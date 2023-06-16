/* eslint-disable functional/prefer-type-literal */
/* eslint-disable functional/no-method-signature */
/* eslint-disable functional/prefer-readonly-type */
/* eslint-disable functional/no-class */

/**
 * These are the types representing the Godot engine in the browser at runtime.
 */
declare namespace Godot {
  /**
   * The canvas resize policy determines how the canvas should be resized by Godot.
   * - `0` means Godot won't do any resizing. This is useful if you want to control the canvas size from javascript code in your template.
   * - `1` means Godot will resize the canvas on start, and when changing window size via engine functions.
   * - `2` means Godot will adapt the canvas size to match the whole browser window.
   */
  enum CANVAS_RESIZE_POLICY {
    NONE,
    START,
    ALWAYS,
  }

  interface GodotModule {

    /**
     * loadDynamicLibrary loads dynamic library @ lib URL / path and returns
     * handle for loaded DSO.
     * 
     * Several flags affect the loading:
     * 
     * - if flags.global=true, symbols from the loaded library are merged into global
     *   process namespace. Flags.global is thus similar to RTLD_GLOBAL in ELF.
     * 
     * - if flags.nodelete=true, the library will be never unloaded. Flags.nodelete
     *   is thus similar to RTLD_NODELETE in ELF.
     * 
     * - if flags.loadAsync=true, the loading is performed asynchronously and
     *   loadDynamicLibrary returns corresponding promise.
     * 
     * If a library was already loaded, it is not loaded a second time. However
     * flags.global and flags.nodelete are handled every time a load request is made.
     * Once a library becomes "global" or "nodelete", it cannot be removed or unloaded.
     * 
     * @param url 
     * @param flags defaults to { async: false, global: true, nodelete: true} 
     * @param handle an id 
     * @param localScope an object to assign the module to
     * @returns DSO a DSO object
     */
    loadDynamicLibrary(url: string, flags?: Partial<{loadAsync: true, global: bool, nodelete: bool}>, handle?: number, localScope?: any): Promise<Object>
    loadDynamicLibrary(url: string, flags?: Partial<{loadAsync: bool, global: bool, nodelete: bool}>, handle?: number, localScope?: any): Object
    requestFullscreen(): void;
    requestAnimationFrame: Window["requestAnimationFrame"];
    setCanvasSize(width: number, height: number, noUpdates: boolean): void;
    pauseMainLoop(): void;
    resumeMainLoop(): void;
    getUserMedia: MediaDevices["getUserMedia"];
    createContext(
      canvas: HTMLCanvasElement,
      useWebGL?: boolean,
      setInModule?: boolean,
      webGLContextAttributes?: Record<string, unknown>
    );
    request_quit(): void;
    onExit(): void;
    initConfig(opts: GodotEssentialConfig): void;
    initFS(paths: string[]): Promise<void>;
    copyToFS(path: string, buffer: ArrayBuffer): void;
    callMain(args: string[]): number;
  }

  interface GodotModuleFactory {
    (config: GodotWASMModuleConfig): Promise<GodotModule>;
  }

  type AsmLibraryArg = any;

  interface GodotWASMModuleConfig {
    print: () => void;
    printErr: () => void;
    //thisProgram: string;
    noExitRuntime: boolean;
    dynamicLibraries: string[];
    instantiateWasm: (
      imports: {
        a: AsmLibraryArg;
      },
      onSuccess: (
        instance: WebAssembly.WebAssemblyInstantiatedSource["instance"],
        module: WebAssembly.WebAssemblyInstantiatedSource["module"]
      ) => void
    ) => Object;
    locateFile: (path: any) => any;
  }

  /** Temporary type to understand which parts of the config can be removed */
  type GodotEssentialConfig = Omit<GodotConfig, 
  'fileSizes'
  |'onPrint'
  |'onPrintError'
  |'onProgress'
  |'executable'
  |'persistentPaths'
  |'unloadAfterInit'
  |'mainPack'
  |'args'
  |'experimentalVK'
  |'serviceWorker'
  >

  /**
   * The Engine configuration object
   */
  interface GodotConfig {
    fileSizes: { [path: string]: number };
    /**
     * Whether the unload the engine automatically after the instance is initialized.
     */
    unloadAfterInit: boolean;
    /**
     * The HTML DOM Canvas object to use.
     * By default, the first canvas element in the document will be used is none is specified.
     */
    canvas: HTMLCanvasElement;
    /**
     * The name of the WASM file without the extension. (Set by Godot Editor export process)
     */
    executable: string;
    /**
     * An alternative name for the game pck to load. The executable name is used otherwise.
     */
    mainPack: string;
    /**
     * Specify a language code to select the proper localization for the game.
     * The browser locale will be used if none is specified.
     * See complete list of [supported locales](https://docs.godotengine.org/en/stable/tutorials/i18n/locales.html#doc-locales).
     */
    locale: string;
    /**
     * The canvas resize policy determines how the canvas should be resized by Godot.
     * - `0` means Godot won't do any resizing. This is useful if you want to control the canvas size from javascript code in your template.
     * - `1` means Godot will resize the canvas on start, and when changing window size via engine functions.
     * - `2` means Godot will adapt the canvas size to match the whole browser window.
     * @defaultValue `2`
     */
    canvasResizePolicy: CANVAS_RESIZE_POLICY;
    /**
     * The arguments to be passed as command line arguments on startup.
     * See [command line tutorial](https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html#doc-command-line-tutorial).
     * Note: `startGame` will always add the `--main-pack` argument.
     */
    args: string[];
    /**
     * When enabled, the game canvas will automatically grab the focus when the engine starts.
     * @memberof EngineConfig
     * @defaultValue `false`
     */
    focusCanvas: boolean;
    /**
     * When enabled, this will turn on experimental virtual keyboard support on mobile.
     * @memberof EngineConfig
     * @type {boolean}
     * @defaultValue `false`
     */
    experimentalVK: boolean;
    /**
     * The progressive web app service worker to install.
     * @memberof EngineConfig
     * @type {string}
     */
    serviceWorker: string;
    /**
     * @type {string[]}
     */
    persistentPaths: string[];
    /**
     * @type {boolean}
     */
    persistentDrops: boolean;
    /**
     * @type {string[]}
     */
    gdnativeLibs: [];
    /**
     * A callback function for handling Godot's OS.execute calls.
     * This is for example used in the Web Editor template to switch between project manager and editor, and for running the game.
     *
     * @param path The path that Godot's wants executed.
     * @param args The arguments of the "command" to execute.
     */
    onExecute(path: string, args: string[]): void;
    /**
     * A callback function for being notified when the Godot instance quits.
     * **Note**: This function will not be called if the engine crashes or become unresponsive
     * @param status_code The status code returned by Godot on exit.
     */
    onExit(status_code: number): void;
    /**
     * A callback function for displaying download progress.
     * The function is called once per frame while downloading files, so the usage of requestAnimationFrame() is not necessary.
     * If the callback function receives a total amount of bytes as 0, this means that it is impossible to calculate. Possible reasons include:
     *
     * - Files are delivered with server-side chunked compression
     * - Files are delivered with server-side compression on Chromium
     * - Not all file downloads have started yet (usually on servers without multi-threading)
     *
     * @param current The current amount of downloaded bytes so far.
     * @param total The total amount of bytes to be downloaded.
     */
    onProgress(current: number, total: number): void;
    /**
     * A callback function for handling the standard output stream. This method should usually only be used in debug pages.
     * By default, `console.log()` is used.
     * @param args A variadic number of arguments to be printed.
     */
    onPrint(...args: unknown[]): void;
    /**
     * A callback function for handling the standard error stream. This method should usually only be used in debug pages.
     * By default, `console.error()` is used.
     * @param args A variadic number of arguments to be printed as errors.
     * @defaultValue `console.error()`
     */
    onPrintError(...args: unknown[]): void;
  }

  /**
   * The Engine class provides methods for loading and starting exported projects on the Web.
   * For default export settings, this is already part of the exported HTML page.
   * To understand practical use of the Engine class, see [Custom HTML page for Web export](https://docs.godotengine.org/en/stable/tutorials/platform/customizing_html5_shell.html#doc-customizing-html5-shell).
   */

  interface EngineClass {
    new (initConfig?: Partial<GodotConfig>): Engine;

    /**
     * Load the engine from the specified base path.
     * @param basePath Base path of the engine to load.
     * @return A Promise that resolves once the engine is loaded.
     */
    load(basePath: string): Promise<void>;
    /**
     * Unload the engine to free memory.
     * This method will be called automatically depending on the configuration.
     * @see GodotConfig.unloadAfterInit
     */
    unload(): void;

    /**
     * Check whether WebGL is available. Optionally, specify a particular version of WebGL to check for.
     * @param majorVersion The major WebGL version to check for
     */
    isWebGLAvailable(majorVersion?: number): boolean;
  }

  interface Engine {
    config: GodotConfig;
    /**
     * Initialize the engine instance. Optionally, pass the base path to the engine to load it, if it hasn't been loaded yet.
     * @param basePath Base path of the engine to load.
     * @returns A Promise that resolves once the engine is loaded and initialized.
     * @see load()
     */
    init(basePath: string): Promise<void>;
    /**
     * Load a file so it is available in the instance's file system once it runs. Must be called before starting the instance.
     * If not provided, the path is derived from the URL of the loaded file.
     *
     * @param file  The file to preload.
     *              If a string the file will be loaded from that path.
     *              If an ArrayBuffer or a view on one, the buffer will used as the content of the file.
     * @param path Path by which the file will be accessible. Required, if file is not a string.
     * @return A Promise that resolves once the file is loaded.
     */
    preloadFile(file: string | ArrayBuffer, path?: string): Promise<void>;
    /**
     * Start the engine instance using the given override configuration (if any). `startGame` can be used in typical cases instead.
     * This will initialize the instance if it is not initialized. For manual initialization, see `init`. The engine must be loaded beforehand.
     * Fails if a canvas cannot be found on the page, or not specified in the configuration.
     *
     * @param override An optional configuration override.
     * @return Promise that resolves once the engine started.
     */
    start(override: Partial<GodotConfig>): Promise<void>;
    /**
     * Start the game instance using the given configuration override (if any).
     * This will initialize the instance if it is not initialized. For manual initialization, see `init`.
     * This will load the engine if it is not loaded, and preload the main pck.
     * This method expects the initial config (or the override) to have both the `executable` and `mainPack` properties set (normally done by the editor during export).
     * @param override An optional configuration override.
     * @return Promise that resolves once the game started.
     */
    startGame(override: Partial<GodotConfig>): Promise<void>;
    /**
     * Create a file at the specified path with the passed as buffer in the instance's file system.
     * @param path The location where the file will be created.
     * @param buffer The content of the file.
     */
    copyToFS(path: string, buffer: ArrayBuffer): void;
    /**
     *     Request that the current instance quit.
     * This is akin the user pressing the close button in the window manager, and will have no effect if the engine has crashed, or is stuck in a loop.
     */
    requestQuit(): void;
  }

  interface PreloaderClass {
    new (): Preloader;
  }

  interface Preloader {
    /**
     * contains the files loaded by that Preloader instance.
     * Push them to the Godot file system with something like:
     * ```js
     * preloader.preloadedFiles.forEach(file => {
     *  engine.copyToFS(file.path, file.buffer)
     * })
     * ```
     * If you used `raw`, then the `buffer` property contains a `Blob` object.
     */
    preloadedFiles: { path: string; buffer: ArrayBuffer | Blob }[];
    /**
     * Calls a progress func for every tick.
     * If no total filesize was provided, then the progress will not be correctly calculated.
     *
     * Note that this isn't automatically called; You should request it at regular intervals.
     * The easiest way to do this is:
     * ```js
     * requestAnimationFrame(preloader.animateProgress);
     * ```
     * the callback function will then be called on each frame.
     * @param callback the function to be called when progress is made
     */
    setProgressFunc(callback: (loaded: number, total: number) => void): void;
    /**
     * Loads a file, returns a promise that is resolved when the file is loaded.
     * If the file fails, then the function will try to download again 4 times.
     * @param pathOrBuffer The path to the file
     * @param fileSize The size of the file. Must be provided for the callback to work
     * @param raw if true, the file's `Blob` will be returned rather than just the array buffer. Defaults to `false`
     */
    loadPromise(
      pathOrBuffer: string | ArrayBuffer,
      fileSize: number,
      raw?: boolean
    ): void;

    /**
     * Loads a file, returns a promise that is resolved when the file is loaded.
     * Adds the file to the list of loaded files if successful.
     * @param pathOrBuffer The path to the file
     * @param destPath The destination path to write the file to.
     * @param fileSize The size of the file. Must be provided for the callback to work
     */
    preload(
      pathOrBuffer: string | ArrayBuffer,
      destPath: string,
      fileSize: number
    ): void;
  }

  interface Features {
    /**
     * Check whether WebGL is available. Optionally, specify a particular version of WebGL to check for.
     *
     * @param majorVersion The major WebGL version to check for. Defaults to 1
     */
    isWebGLAvailable(majorVersion?: number): boolean;

    /**
     * Check whether the Fetch API available and supports streaming responses.
     */
    isFetchAvailable(): boolean;

    /**
     * Check whether the engine is running in a Secure Context.
     */
    isSecureContext(): boolean;

    /**
     * Check whether the engine is cross origin isolated.
     * This value is dependent on Cross-Origin-Opener-Policy and Cross-Origin-Embedder-Policy headers sent by the server.
     */
    isCrossOriginIsolated(): boolean;

    /**
     * Check whether SharedBufferArray is available.
     *
     * Most browsers require the page to be running in a secure context, and the
     * the server to provide specific CORS headers for SharedArrayBuffer to be available.
     */
    isSharedArrayBufferAvailable(): boolean;
    /**
     * Check whether the AudioContext supports AudioWorkletNodes.
     */
    isAudioWorkletAvailable(): boolean;

    /**
     * Return an array of missing required features (as string).
     *
     * @returns A list of human-readable missing features.
     */
    getMissingFeatures(): string[];
  }
}
