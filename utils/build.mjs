//@ts-check

import fs from "fs";
import { generateGodotTypes, tabulation } from "./parsingUtils.mjs";

tabulation.character = "  ";

const makeComment = (...lines) => [
  "/**",
  ...lines.map((line) => ` * ${line}`),
  " */",
];

/**
 * Generates the types from the projects included in this repository
 */
const _generateTypes = () => {
  const contents = [
    ...makeComment(
      "AUTOMATICALLY GENERATED",
      "Represents the parsed Godot configuration files.",
      "You should only need those types if you parse Godot configuration files to manipulate them.",
      "This file is generated automatically."
    ),
    .../** @type { const } */ ([3, 4]).map((num) =>
      generateGodotTypes(num, `./godotProjects/g${num}`)
    ),
  ].join("\n");

  fs.writeFileSync("types/GodotConfigTypes.d.ts", contents, "utf8");
};

_generateTypes();

const contents = [
  ...makeComment("AUTOMATICALLY GENERATED"),
  ...[
    "types/globals.d.ts",
    "types/GodotConfigTypes.d.ts",
    "types/GodotEngine.d.ts",
  ]
    .map((filename) => fs.readFileSync(filename, "utf-8")),
  "",
  "export type GlobalGodot = Godot.GodotModuleFactory & typeof globalThis.Godot",
  "",
  "export { Godot, Godot3, Godot4 }",
].join("\n");


fs.writeFileSync("index.d.ts", contents, "utf8");