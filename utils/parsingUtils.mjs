//@ts-check
/**
 * A set of utilities that can be used to parse Godot config files and 
 * automatically generated well-typed interfaces
 */

import fs from "fs";

export const GodotClassRegexp = /(?<className>[A-Z]\w+)\((?<value>.*?)\)/;

export const tabulation = {
  character: "\t"
}

/**
 * @typedef {ReturnType<typeof parseValue>} ParsedValue
 * @typedef {Record<string, ParsedValue>} ParsedValueRecord
 * @typedef {Record<string, ParsedValueRecord|ParsedValue>} ParsedFileBody
 */

/**
 * Removes double quotes from a string.
 * @param {string} str
 * @returns {string} the unquoted string
 */
export const unquote = (/** @type {string} */ str) =>
  str.trim().replace(/^"(.*)"$/, "$1");

/**
 * Takes a value as it appears in a Godot configuration file and attempts to parse it.
 * Special classes like PackedIntArray and PackedStringArray are handled.
 * @param {string} name
 * @param {string} strValue
 */
export const parseValue = (name, strValue) => {
  if (!isNaN(+strValue)) {
    return +strValue;
  }
  const object = (strValue.match(GodotClassRegexp) || { groups: undefined })
    .groups;
  if (object) {
    const { className, value } = object;
    switch (className) {
      case "PackedStringArray":
      case "PoolStringArray":
        return { className, value: value.split(",").map(unquote) };
      case "PackedIntArray":
      case "PoolIntArray":
      case "Color":
        return { className, value: value.split(",").map((v) => parseFloat(v)) };
    }
    return { className, value };
  }
  if (strValue.startsWith('"') && strValue.endsWith('"')) {
    strValue = unquote(strValue);
    if (strValue.startsWith("res://")) {
      return {
        className: "Path",
        location: "res",
        value: strValue.substring(6),
      };
    }
  }
  if (strValue === "true" || strValue === "false") {
    return strValue === "true";
  }
  return strValue;
};

/**
 *
 * @param {string} body
 * @returns
 */
export const parseFileBody = (body) => {
  /** @type {ParsedFileBody} */
  const ret = {};
  const lines = body.split("\n");
  let context = ret;
  let count = lines.length;
  let i = 0;
  while (i < count) {
    const line = lines[i].trim();
    i++;
    if (line === "") {
      continue;
    }
    if (line.startsWith(";")) {
      continue;
    }
    if (line.startsWith("[") && line.endsWith("]")) {
      const key = line.substring(1, line.length - 1);
      ret[key] = {};
      // @ts-ignore
      context = ret[key];
      continue;
    }
    const [pathStr, valueStr] = line.split("=");
    const path = pathStr.split("/");
    let base = context;
    for (let n = 0; n < path.length; n++) {
      const key = path[n];
      if (n === path.length - 1) {
        base[key] = parseValue(key, valueStr);
      } else {
        base[key] = base[key] || {};
      }
      // @ts-ignore
      base = base[key];
    }
  }
  return ret;
};

/**
 * Reads a Godot configuration file (project or exports) synchronously and parses it.
 * @param {string} filename
 * @returns
 */
export const parseFile = (filename) => {
  return parseFileBody(fs.readFileSync(filename, "utf-8"));
};

/**
 * Receives a parsed Godot configuration file (project or exports) and generates a typescript schema from it.
 * The schema is not named, it's up to you to wrap it.
 * @param {ParsedFileBody} parsedFileBody
 * @param {number} indents
 */
export const generateTypescriptInterface = (parsedFileBody, indents = 0) => {
  const ret = [];
  const tabs = `${tabulation.character}`.repeat(indents);
  for (const [key, value] of Object.entries(parsedFileBody)) {
    if (typeof value == "object") {
      if (value.className) {
        ret.push(`${tabs}"${key}": ${value.className}`);
      } else {
        ret.push(
          `${tabs}"${key}": {\n` +
            // @ts-ignore
            generateTypescriptInterface(value, indents + 1) +
            `\n${tabs}}`
        );
      }
    } else if (
      typeof value == "string" &&
      value.startsWith("<") &&
      value.endsWith(">")
    ) {
      ret.push(`${tabs}"${key}": ${value.substring(1, value.length - 1)}`);
    } else {
      ret.push(`${tabs}"${key}": ${typeof value}`);
    }
  }
  return ret.join("\n");
};

/**
 * Serves a few additional Godot types that are necessary but that we can't generate.
 * @param {3|4} version
 */
const additionalTypeScriptTypes = (version) => [
  version == 3
    ? "type PoolStringArray = string[]"
    : "type PackedStringArray = string[]",
  version == 3
    ? ""
    : "type Renderer = 'Forward Plus' | 'mobile' | 'gl_compatibility' | 'none'",
  "type Color = number[]",
  "type Path = `res://${string}` | `user://${string}`",
];

/**
 * Generates a set of typescript interfaces from a parsed Godot Export file.
 * @param {ParsedFileBody} parsedFileBody
 * @returns
 */
export const generateExportsTypes = (parsedFileBody) => {
  /** @type {ParsedFileBody} */
  let exportModel = {};
  const exports = [];
  const options = [];
  for (const [key, value] of Object.entries(parsedFileBody)) {
    const [, number, isOptions] = key.split(".");
    if (isOptions === "options") {
      options[number] = value;
    } else {
      // @ts-ignore
      exports[number] = value.platform;
      exportModel = /** @type {ParsedFileBody} */ (value);
    }
  }
  const lines = [];
  const classes = [];
  lines.push(`${tabulation.character}type ExportPresetPlatform = "` + exports.join('" | "') + '"');
  lines.push("");
  lines.push(`${tabulation.character}interface ExportPreset<T extends ExportPresetPlatform>{`);
  exportModel.platform = "<T>";
  lines.push(generateTypescriptInterface(exportModel, 2));
  lines.push(`${tabulation.character}}\n`);
  for (const index in exports) {
    const platform = exports[index];
    const value = options[index];
    const className = "ExportPresetOptions" + platform.replace(/\s|\//g, "");
    classes.push(className);
    lines.push(`${tabulation.character}interface ` + className + "{");
    lines.push(generateTypescriptInterface(value, 2));
    lines.push(`${tabulation.character}}\n`);
  }
  lines.push("");
  lines.push(`${tabulation.character}type ExportPresetOptions = ` + classes.join(" | "));
  lines.push("");
  return lines.join("\n");
};

/**
 * Generates a set of typescript interfaces from a parsed Godot project
 * @param {ParsedFileBody} parsedFileBody
 * @returns
 */
export const generateProjectTypes = (parsedFileBody) => {
  const lines = [];
  lines.push(`${tabulation.character}interface Project{`);
  lines.push(generateTypescriptInterface(parsedFileBody, 2));
  lines.push(`${tabulation.character}}\n`);
  return lines.join("\n");
};

/**
 * Generates a set of typescript interfaces from a Godot project
 * @param {3|4} version the Godot version
 * @param {string} path the path to the project (must contain both a project.godot and export_presets.cfg file)
 * @returns
 */
export const generateGodotTypes = (version, path) => {
  const lines = [
    `declare namespace Godot${version} {`,
    "",
    ...additionalTypeScriptTypes(version).map((t) => `${tabulation.character}${t}`),
    "",
    generateProjectTypes(parseFile(`${path}/project.godot`)),
    "",
    generateExportsTypes(parseFile(`${path}/export_presets.cfg`)),
    "",
    `}`,
  ].join("\n");

  return lines;
};
