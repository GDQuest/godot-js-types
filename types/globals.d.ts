/**
 * Global loadings for Godot types, makes sure "Engine" and "Preloader" 
 * are available in the global scope.
 * 
 */
export {};

declare global {
  interface Window {
    Godot: Godot.GodotModuleFactory
    Engine: Godot.EngineClass;
    GODOT_CONFIG: Godot.GodotConfig;
    Preloader: Godot.PreloaderClass;
    Features: Godot.Features;
  }
}
