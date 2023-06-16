/**
 * AUTOMATICALLY GENERATED
 * Represents the parsed Godot configuration files.
 * You should only need those types if you parse Godot configuration files to manipulate them.
 * This file is generated automatically.
 */
declare namespace Godot3 {

  type PoolStringArray = string[]
  
  type Color = number[]
  type Path = `res://${string}` | `user://${string}`

  interface Project{
    "config_version": number
    "application": {
      "config": {
        "name": string
        "icon": Path
      }
      "run": {
        "main_scene": Path
      }
    }
    "display": {
      "window": {
        "size": {
          "width": number
          "height": number
        }
        "stretch": {
          "mode": string
          "aspect": string
        }
      }
    }
    "gui": {
      "common": {
        "drop_mouse_on_gui_input_disabled": boolean
      }
    }
    "physics": {
      "common": {
        "enable_pause_aware_picking": boolean
      }
    }
    "rendering": {
      "environment": {
        "default_environment": Path
      }
    }
  }


  type ExportPresetPlatform = "HTML5" | "Mac OSX" | "Windows Desktop" | "Linux/X11" | "UWP" | "iOS" | "Android"

  interface ExportPreset<T extends ExportPresetPlatform>{
    "name": string
    "platform": T
    "runnable": boolean
    "custom_features": string
    "export_filter": string
    "include_filter": string
    "exclude_filter": string
    "export_path": string
    "script_export_mode": number
    "script_encryption_key": string
  }

  interface ExportPresetOptionsHTML5{
    "custom_template": {
      "debug": string
      "release": string
    }
    "variant": {
      "export_type": number
    }
    "vram_texture_compression": {
      "for_desktop": boolean
      "for_mobile": boolean
    }
    "html": {
      "export_icon": boolean
      "custom_html_shell": string
      "head_include": string
      "canvas_resize_policy": number
      "focus_canvas_on_start": boolean
      "experimental_virtual_keyboard": boolean
    }
    "progressive_web_app": {
      "enabled": boolean
      "offline_page": string
      "display": number
      "orientation": number
      "icon_144x144": string
      "icon_180x180": string
      "icon_512x512": string
      "background_color": Color
    }
  }

  interface ExportPresetOptionsMacOSX{
    "custom_template": {
      "debug": string
      "release": string
    }
    "application": {
      "name": string
      "info": string
      "icon": string
      "identifier": string
      "signature": string
      "app_category": string
      "short_version": string
      "version": string
      "copyright": string
    }
    "display": {
      "high_res": boolean
    }
    "privacy": {
      "microphone_usage_description": string
      "camera_usage_description": string
      "location_usage_description": string
      "address_book_usage_description": string
      "calendar_usage_description": string
      "photos_library_usage_description": string
      "desktop_folder_usage_description": string
      "documents_folder_usage_description": string
      "downloads_folder_usage_description": string
      "network_volumes_usage_description": string
      "removable_volumes_usage_description": string
    }
    "codesign": {
      "enable": boolean
      "identity": string
      "timestamp": boolean
      "hardened_runtime": boolean
      "replace_existing_signature": boolean
      "entitlements": {
        "custom_file": string
        "allow_jit_code_execution": boolean
        "allow_unsigned_executable_memory": boolean
        "allow_dyld_environment_variables": boolean
        "disable_library_validation": boolean
        "audio_input": boolean
        "camera": boolean
        "location": boolean
        "address_book": boolean
        "calendars": boolean
        "photos_library": boolean
        "apple_events": boolean
        "debugging": boolean
        "app_sandbox": {
          "enabled": boolean
          "network_server": boolean
          "network_client": boolean
          "device_usb": boolean
          "device_bluetooth": boolean
          "files_downloads": number
          "files_pictures": number
          "files_music": number
          "files_movies": number
        }
      }
      "custom_options": PoolStringArray
    }
    "notarization": {
      "enable": boolean
      "apple_id_name": string
      "apple_id_password": string
      "apple_team_id": string
    }
    "texture_format": {
      "s3tc": boolean
      "etc": boolean
      "etc2": boolean
    }
  }

  interface ExportPresetOptionsWindowsDesktop{
    "custom_template": {
      "debug": string
      "release": string
    }
    "binary_format": {
      "64_bits": boolean
      "embed_pck": boolean
    }
    "texture_format": {
      "bptc": boolean
      "s3tc": boolean
      "etc": boolean
      "etc2": boolean
      "no_bptc_fallbacks": boolean
    }
    "codesign": {
      "enable": boolean
      "identity_type": number
      "identity": string
      "password": string
      "timestamp": boolean
      "timestamp_server_url": string
      "digest_algorithm": number
      "description": string
      "custom_options": PoolStringArray
    }
    "application": {
      "modify_resources": boolean
      "icon": string
      "file_version": string
      "product_version": string
      "company_name": string
      "product_name": string
      "file_description": string
      "copyright": string
      "trademarks": string
    }
  }

  interface ExportPresetOptionsLinuxX11{
    "custom_template": {
      "debug": string
      "release": string
    }
    "binary_format": {
      "64_bits": boolean
      "embed_pck": boolean
    }
    "texture_format": {
      "bptc": boolean
      "s3tc": boolean
      "etc": boolean
      "etc2": boolean
      "no_bptc_fallbacks": boolean
    }
  }

  interface ExportPresetOptionsUWP{
    "custom_template": {
      "debug": string
      "release": string
    }
    "architecture": {
      "target": number
    }
    "command_line": {
      "extra_args": string
    }
    "package": {
      "display_name": string
      "short_name": string
      "unique_name": string
      "description": string
      "publisher": string
      "publisher_display_name": string
    }
    "identity": {
      "product_guid": string
      "publisher_guid": string
    }
    "signing": {
      "certificate": string
      "password": string
      "algorithm": number
    }
    "version": {
      "major": number
      "minor": number
      "build": number
      "revision": number
    }
    "orientation": {
      "landscape": boolean
      "portrait": boolean
      "landscape_flipped": boolean
      "portrait_flipped": boolean
    }
    "images": {
      "background_color": string
    }
    "tiles": {
      "show_name_on_square150x150": boolean
      "show_name_on_wide310x150": boolean
      "show_name_on_square310x310": boolean
    }
    "capabilities": {
      "allJoyn": boolean
      "codeGeneration": boolean
      "internetClient": boolean
      "internetClientServer": boolean
      "privateNetworkClientServer": boolean
      "appointments": boolean
      "blockedChatMessages": boolean
      "chat": boolean
      "contacts": boolean
      "enterpriseAuthentication": boolean
      "musicLibrary": boolean
      "objects3D": boolean
      "picturesLibrary": boolean
      "phoneCall": boolean
      "removableStorage": boolean
      "sharedUserCertificates": boolean
      "userAccountInformation": boolean
      "videosLibrary": boolean
      "voipCall": boolean
      "bluetooth": boolean
      "location": boolean
      "microphone": boolean
      "proximity": boolean
      "webcam": boolean
    }
  }

  interface ExportPresetOptionsiOS{
    "custom_template": {
      "debug": string
      "release": string
    }
    "architectures": {
      "armv7": boolean
      "arm64": boolean
    }
    "application": {
      "app_store_team_id": string
      "provisioning_profile_uuid_debug": string
      "code_sign_identity_debug": string
      "export_method_debug": number
      "provisioning_profile_uuid_release": string
      "code_sign_identity_release": string
      "export_method_release": number
      "targeted_device_family": number
      "name": string
      "info": string
      "identifier": string
      "signature": string
      "short_version": string
      "version": string
      "copyright": string
    }
    "capabilities": {
      "access_wifi": boolean
      "push_notifications": boolean
    }
    "user_data": {
      "accessible_from_files_app": boolean
      "accessible_from_itunes_sharing": boolean
    }
    "privacy": {
      "camera_usage_description": string
      "microphone_usage_description": string
      "photolibrary_usage_description": string
    }
    "icons": {
      "iphone_120x120": string
      "iphone_180x180": string
      "ipad_76x76": string
      "ipad_152x152": string
      "ipad_167x167": string
      "app_store_1024x1024": string
      "spotlight_40x40": string
      "spotlight_80x80": string
    }
    "storyboard": {
      "use_launch_screen_storyboard": boolean
      "image_scale_mode": number
      "custom_image@2x": string
      "custom_image@3x": string
      "use_custom_bg_color": boolean
      "custom_bg_color": Color
    }
    "landscape_launch_screens": {
      "iphone_2436x1125": string
      "iphone_2208x1242": string
      "ipad_1024x768": string
      "ipad_2048x1536": string
    }
    "portrait_launch_screens": {
      "iphone_640x960": string
      "iphone_640x1136": string
      "iphone_750x1334": string
      "iphone_1125x2436": string
      "ipad_768x1024": string
      "ipad_1536x2048": string
      "iphone_1242x2208": string
    }
  }

  interface ExportPresetOptionsAndroid{
    "custom_template": {
      "debug": string
      "release": string
    }
    "custom_build": {
      "use_custom_build": boolean
      "export_format": number
      "min_sdk": string
      "target_sdk": string
    }
    "architectures": {
      "armeabi-v7a": boolean
      "arm64-v8a": boolean
      "x86": boolean
      "x86_64": boolean
    }
    "keystore": {
      "debug": string
      "debug_user": string
      "debug_password": string
      "release": string
      "release_user": string
      "release_password": string
    }
    "one_click_deploy": {
      "clear_previous_install": boolean
    }
    "version": {
      "code": number
      "name": string
    }
    "package": {
      "unique_name": string
      "name": string
      "signed": boolean
      "classify_as_game": boolean
      "retain_data_on_uninstall": boolean
      "exclude_from_recents": boolean
    }
    "launcher_icons": {
      "main_192x192": string
      "adaptive_foreground_432x432": string
      "adaptive_background_432x432": string
    }
    "graphics": {
      "opengl_debug": boolean
    }
    "xr_features": {
      "xr_mode": number
      "hand_tracking": number
      "hand_tracking_frequency": number
      "passthrough": number
    }
    "screen": {
      "immersive_mode": boolean
      "support_small": boolean
      "support_normal": boolean
      "support_large": boolean
      "support_xlarge": boolean
    }
    "user_data_backup": {
      "allow": boolean
    }
    "command_line": {
      "extra_args": string
    }
    "apk_expansion": {
      "enable": boolean
      "SALT": string
      "public_key": string
    }
    "permissions": {
      "custom_permissions": PoolStringArray
      "access_checkin_properties": boolean
      "access_coarse_location": boolean
      "access_fine_location": boolean
      "access_location_extra_commands": boolean
      "access_mock_location": boolean
      "access_network_state": boolean
      "access_surface_flinger": boolean
      "access_wifi_state": boolean
      "account_manager": boolean
      "add_voicemail": boolean
      "authenticate_accounts": boolean
      "battery_stats": boolean
      "bind_accessibility_service": boolean
      "bind_appwidget": boolean
      "bind_device_admin": boolean
      "bind_input_method": boolean
      "bind_nfc_service": boolean
      "bind_notification_listener_service": boolean
      "bind_print_service": boolean
      "bind_remoteviews": boolean
      "bind_text_service": boolean
      "bind_vpn_service": boolean
      "bind_wallpaper": boolean
      "bluetooth": boolean
      "bluetooth_admin": boolean
      "bluetooth_privileged": boolean
      "brick": boolean
      "broadcast_package_removed": boolean
      "broadcast_sms": boolean
      "broadcast_sticky": boolean
      "broadcast_wap_push": boolean
      "call_phone": boolean
      "call_privileged": boolean
      "camera": boolean
      "capture_audio_output": boolean
      "capture_secure_video_output": boolean
      "capture_video_output": boolean
      "change_component_enabled_state": boolean
      "change_configuration": boolean
      "change_network_state": boolean
      "change_wifi_multicast_state": boolean
      "change_wifi_state": boolean
      "clear_app_cache": boolean
      "clear_app_user_data": boolean
      "control_location_updates": boolean
      "delete_cache_files": boolean
      "delete_packages": boolean
      "device_power": boolean
      "diagnostic": boolean
      "disable_keyguard": boolean
      "dump": boolean
      "expand_status_bar": boolean
      "factory_test": boolean
      "flashlight": boolean
      "force_back": boolean
      "get_accounts": boolean
      "get_package_size": boolean
      "get_tasks": boolean
      "get_top_activity_info": boolean
      "global_search": boolean
      "hardware_test": boolean
      "inject_events": boolean
      "install_location_provider": boolean
      "install_packages": boolean
      "install_shortcut": boolean
      "internal_system_window": boolean
      "internet": boolean
      "kill_background_processes": boolean
      "location_hardware": boolean
      "manage_accounts": boolean
      "manage_app_tokens": boolean
      "manage_documents": boolean
      "manage_external_storage": boolean
      "master_clear": boolean
      "media_content_control": boolean
      "modify_audio_settings": boolean
      "modify_phone_state": boolean
      "mount_format_filesystems": boolean
      "mount_unmount_filesystems": boolean
      "nfc": boolean
      "persistent_activity": boolean
      "process_outgoing_calls": boolean
      "read_calendar": boolean
      "read_call_log": boolean
      "read_contacts": boolean
      "read_external_storage": boolean
      "read_frame_buffer": boolean
      "read_history_bookmarks": boolean
      "read_input_state": boolean
      "read_logs": boolean
      "read_phone_state": boolean
      "read_profile": boolean
      "read_sms": boolean
      "read_social_stream": boolean
      "read_sync_settings": boolean
      "read_sync_stats": boolean
      "read_user_dictionary": boolean
      "reboot": boolean
      "receive_boot_completed": boolean
      "receive_mms": boolean
      "receive_sms": boolean
      "receive_wap_push": boolean
      "record_audio": boolean
      "reorder_tasks": boolean
      "restart_packages": boolean
      "send_respond_via_message": boolean
      "send_sms": boolean
      "set_activity_watcher": boolean
      "set_alarm": boolean
      "set_always_finish": boolean
      "set_animation_scale": boolean
      "set_debug_app": boolean
      "set_orientation": boolean
      "set_pointer_speed": boolean
      "set_preferred_applications": boolean
      "set_process_limit": boolean
      "set_time": boolean
      "set_time_zone": boolean
      "set_wallpaper": boolean
      "set_wallpaper_hints": boolean
      "signal_persistent_processes": boolean
      "status_bar": boolean
      "subscribed_feeds_read": boolean
      "subscribed_feeds_write": boolean
      "system_alert_window": boolean
      "transmit_ir": boolean
      "uninstall_shortcut": boolean
      "update_device_stats": boolean
      "use_credentials": boolean
      "use_sip": boolean
      "vibrate": boolean
      "wake_lock": boolean
      "write_apn_settings": boolean
      "write_calendar": boolean
      "write_call_log": boolean
      "write_contacts": boolean
      "write_external_storage": boolean
      "write_gservices": boolean
      "write_history_bookmarks": boolean
      "write_profile": boolean
      "write_secure_settings": boolean
      "write_settings": boolean
      "write_sms": boolean
      "write_social_stream": boolean
      "write_sync_settings": boolean
      "write_user_dictionary": boolean
    }
  }


  type ExportPresetOptions = ExportPresetOptionsHTML5 | ExportPresetOptionsMacOSX | ExportPresetOptionsWindowsDesktop | ExportPresetOptionsLinuxX11 | ExportPresetOptionsUWP | ExportPresetOptionsiOS | ExportPresetOptionsAndroid


}
declare namespace Godot4 {

  type PackedStringArray = string[]
  type Renderer = 'Forward Plus' | 'mobile' | 'gl_compatibility' | 'none'
  type Color = number[]
  type Path = `res://${string}` | `user://${string}`

  interface Project{
    "config_version": number
    "application": {
      "config": {
        "name": string
        "features": PackedStringArray
        "icon": Path
      }
      "run": {
        "main_scene": Path
      }
    }
  }


  type ExportPresetPlatform = "Android" | "Linux/X11" | "macOS" | "Web" | "Windows Desktop" | "iOS" | "UWP"

  interface ExportPreset<T extends ExportPresetPlatform>{
    "name": string
    "platform": T
    "runnable": boolean
    "custom_features": string
    "export_filter": string
    "include_filter": string
    "exclude_filter": string
    "export_path": string
    "encryption_include_filters": string
    "encryption_exclude_filters": string
    "encrypt_pck": boolean
    "encrypt_directory": boolean
    "script_export_mode": number
    "script_encryption_key": string
  }

  interface ExportPresetOptionsAndroid{
    "custom_template": {
      "debug": string
      "release": string
    }
    "custom_build": {
      "use_custom_build": boolean
      "export_format": number
      "min_sdk": string
      "target_sdk": string
    }
    "architectures": {
      "armeabi-v7a": boolean
      "arm64-v8a": boolean
      "x86": boolean
      "x86_64": boolean
    }
    "keystore": {
      "debug": string
      "debug_user": string
      "debug_password": string
      "release": string
      "release_user": string
      "release_password": string
    }
    "version": {
      "code": number
      "name": string
    }
    "package": {
      "unique_name": string
      "name": string
      "signed": boolean
      "classify_as_game": boolean
      "retain_data_on_uninstall": boolean
      "exclude_from_recents": boolean
    }
    "launcher_icons": {
      "main_192x192": string
      "adaptive_foreground_432x432": string
      "adaptive_background_432x432": string
    }
    "graphics": {
      "opengl_debug": boolean
    }
    "xr_features": {
      "xr_mode": number
      "hand_tracking": number
      "hand_tracking_frequency": number
      "passthrough": number
    }
    "screen": {
      "immersive_mode": boolean
      "support_small": boolean
      "support_normal": boolean
      "support_large": boolean
      "support_xlarge": boolean
    }
    "user_data_backup": {
      "allow": boolean
    }
    "command_line": {
      "extra_args": string
    }
    "apk_expansion": {
      "enable": boolean
      "SALT": string
      "public_key": string
    }
    "permissions": {
      "custom_permissions": PackedStringArray
      "access_checkin_properties": boolean
      "access_coarse_location": boolean
      "access_fine_location": boolean
      "access_location_extra_commands": boolean
      "access_mock_location": boolean
      "access_network_state": boolean
      "access_surface_flinger": boolean
      "access_wifi_state": boolean
      "account_manager": boolean
      "add_voicemail": boolean
      "authenticate_accounts": boolean
      "battery_stats": boolean
      "bind_accessibility_service": boolean
      "bind_appwidget": boolean
      "bind_device_admin": boolean
      "bind_input_method": boolean
      "bind_nfc_service": boolean
      "bind_notification_listener_service": boolean
      "bind_print_service": boolean
      "bind_remoteviews": boolean
      "bind_text_service": boolean
      "bind_vpn_service": boolean
      "bind_wallpaper": boolean
      "bluetooth": boolean
      "bluetooth_admin": boolean
      "bluetooth_privileged": boolean
      "brick": boolean
      "broadcast_package_removed": boolean
      "broadcast_sms": boolean
      "broadcast_sticky": boolean
      "broadcast_wap_push": boolean
      "call_phone": boolean
      "call_privileged": boolean
      "camera": boolean
      "capture_audio_output": boolean
      "capture_secure_video_output": boolean
      "capture_video_output": boolean
      "change_component_enabled_state": boolean
      "change_configuration": boolean
      "change_network_state": boolean
      "change_wifi_multicast_state": boolean
      "change_wifi_state": boolean
      "clear_app_cache": boolean
      "clear_app_user_data": boolean
      "control_location_updates": boolean
      "delete_cache_files": boolean
      "delete_packages": boolean
      "device_power": boolean
      "diagnostic": boolean
      "disable_keyguard": boolean
      "dump": boolean
      "expand_status_bar": boolean
      "factory_test": boolean
      "flashlight": boolean
      "force_back": boolean
      "get_accounts": boolean
      "get_package_size": boolean
      "get_tasks": boolean
      "get_top_activity_info": boolean
      "global_search": boolean
      "hardware_test": boolean
      "inject_events": boolean
      "install_location_provider": boolean
      "install_packages": boolean
      "install_shortcut": boolean
      "internal_system_window": boolean
      "internet": boolean
      "kill_background_processes": boolean
      "location_hardware": boolean
      "manage_accounts": boolean
      "manage_app_tokens": boolean
      "manage_documents": boolean
      "manage_external_storage": boolean
      "master_clear": boolean
      "media_content_control": boolean
      "modify_audio_settings": boolean
      "modify_phone_state": boolean
      "mount_format_filesystems": boolean
      "mount_unmount_filesystems": boolean
      "nfc": boolean
      "persistent_activity": boolean
      "process_outgoing_calls": boolean
      "read_calendar": boolean
      "read_call_log": boolean
      "read_contacts": boolean
      "read_external_storage": boolean
      "read_frame_buffer": boolean
      "read_history_bookmarks": boolean
      "read_input_state": boolean
      "read_logs": boolean
      "read_phone_state": boolean
      "read_profile": boolean
      "read_sms": boolean
      "read_social_stream": boolean
      "read_sync_settings": boolean
      "read_sync_stats": boolean
      "read_user_dictionary": boolean
      "reboot": boolean
      "receive_boot_completed": boolean
      "receive_mms": boolean
      "receive_sms": boolean
      "receive_wap_push": boolean
      "record_audio": boolean
      "reorder_tasks": boolean
      "restart_packages": boolean
      "send_respond_via_message": boolean
      "send_sms": boolean
      "set_activity_watcher": boolean
      "set_alarm": boolean
      "set_always_finish": boolean
      "set_animation_scale": boolean
      "set_debug_app": boolean
      "set_orientation": boolean
      "set_pointer_speed": boolean
      "set_preferred_applications": boolean
      "set_process_limit": boolean
      "set_time": boolean
      "set_time_zone": boolean
      "set_wallpaper": boolean
      "set_wallpaper_hints": boolean
      "signal_persistent_processes": boolean
      "status_bar": boolean
      "subscribed_feeds_read": boolean
      "subscribed_feeds_write": boolean
      "system_alert_window": boolean
      "transmit_ir": boolean
      "uninstall_shortcut": boolean
      "update_device_stats": boolean
      "use_credentials": boolean
      "use_sip": boolean
      "vibrate": boolean
      "wake_lock": boolean
      "write_apn_settings": boolean
      "write_calendar": boolean
      "write_call_log": boolean
      "write_contacts": boolean
      "write_external_storage": boolean
      "write_gservices": boolean
      "write_history_bookmarks": boolean
      "write_profile": boolean
      "write_secure_settings": boolean
      "write_settings": boolean
      "write_sms": boolean
      "write_social_stream": boolean
      "write_sync_settings": boolean
      "write_user_dictionary": boolean
    }
  }

  interface ExportPresetOptionsLinuxX11{
    "custom_template": {
      "debug": string
      "release": string
    }
    "debug": {
      "export_console_script": number
    }
    "binary_format": {
      "embed_pck": boolean
      "architecture": string
    }
    "texture_format": {
      "bptc": boolean
      "s3tc": boolean
      "etc": boolean
      "etc2": boolean
      "no_bptc_fallbacks": boolean
    }
  }

  interface ExportPresetOptionsmacOS{
    "binary_format": {
      "architecture": string
    }
    "custom_template": {
      "debug": string
      "release": string
    }
    "debug": {
      "export_console_script": number
    }
    "application": {
      "icon": string
      "icon_interpolation": number
      "bundle_identifier": string
      "signature": string
      "app_category": string
      "short_version": string
      "version": string
      "copyright": string
      "copyright_localized": string
    }
    "display": {
      "high_res": boolean
    }
    "codesign": {
      "codesign": number
      "identity": string
      "certificate_file": string
      "certificate_password": string
      "entitlements": {
        "custom_file": string
        "allow_jit_code_execution": boolean
        "allow_unsigned_executable_memory": boolean
        "allow_dyld_environment_variables": boolean
        "disable_library_validation": boolean
        "audio_input": boolean
        "camera": boolean
        "location": boolean
        "address_book": boolean
        "calendars": boolean
        "photos_library": boolean
        "apple_events": boolean
        "debugging": boolean
        "app_sandbox": {
          "enabled": boolean
          "network_server": boolean
          "network_client": boolean
          "device_usb": boolean
          "device_bluetooth": boolean
          "files_downloads": number
          "files_pictures": number
          "files_music": number
          "files_movies": number
          "helper_executables": string
        }
      }
      "custom_options": PackedStringArray
    }
    "notarization": {
      "notarization": number
      "apple_id_name": string
      "apple_id_password": string
      "apple_team_id": string
      "api_uuid": string
      "api_key": string
    }
    "privacy": {
      "microphone_usage_description": string
      "microphone_usage_description_localized": string
      "camera_usage_description": string
      "camera_usage_description_localized": string
      "location_usage_description": string
      "location_usage_description_localized": string
      "address_book_usage_description": string
      "address_book_usage_description_localized": string
      "calendar_usage_description": string
      "calendar_usage_description_localized": string
      "photos_library_usage_description": string
      "photos_library_usage_description_localized": string
      "desktop_folder_usage_description": string
      "desktop_folder_usage_description_localized": string
      "documents_folder_usage_description": string
      "documents_folder_usage_description_localized": string
      "downloads_folder_usage_description": string
      "downloads_folder_usage_description_localized": string
      "network_volumes_usage_description": string
      "network_volumes_usage_description_localized": string
      "removable_volumes_usage_description": string
      "removable_volumes_usage_description_localized": string
    }
    "texture_format": {
      "s3tc": boolean
      "etc": boolean
      "etc2": boolean
    }
  }

  interface ExportPresetOptionsWeb{
    "custom_template": {
      "debug": string
      "release": string
    }
    "variant": {
      "extensions_support": boolean
    }
    "vram_texture_compression": {
      "for_desktop": boolean
      "for_mobile": boolean
    }
    "html": {
      "export_icon": boolean
      "custom_html_shell": string
      "head_include": string
      "canvas_resize_policy": number
      "focus_canvas_on_start": boolean
      "experimental_virtual_keyboard": boolean
    }
    "progressive_web_app": {
      "enabled": boolean
      "offline_page": string
      "display": number
      "orientation": number
      "icon_144x144": string
      "icon_180x180": string
      "icon_512x512": string
      "background_color": Color
    }
  }

  interface ExportPresetOptionsWindowsDesktop{
    "custom_template": {
      "debug": string
      "release": string
    }
    "debug": {
      "export_console_script": number
    }
    "binary_format": {
      "embed_pck": boolean
      "architecture": string
    }
    "texture_format": {
      "bptc": boolean
      "s3tc": boolean
      "etc": boolean
      "etc2": boolean
      "no_bptc_fallbacks": boolean
    }
    "codesign": {
      "enable": boolean
      "identity_type": number
      "identity": string
      "password": string
      "timestamp": boolean
      "timestamp_server_url": string
      "digest_algorithm": number
      "description": string
      "custom_options": PackedStringArray
    }
    "application": {
      "modify_resources": boolean
      "icon": string
      "console_wrapper_icon": string
      "icon_interpolation": number
      "file_version": string
      "product_version": string
      "company_name": string
      "product_name": string
      "file_description": string
      "copyright": string
      "trademarks": string
    }
  }

  interface ExportPresetOptionsiOS{
    "custom_template": {
      "debug": string
      "release": string
    }
    "architectures": {
      "arm64": boolean
    }
    "application": {
      "app_store_team_id": string
      "provisioning_profile_uuid_debug": string
      "code_sign_identity_debug": string
      "export_method_debug": number
      "provisioning_profile_uuid_release": string
      "code_sign_identity_release": string
      "export_method_release": number
      "targeted_device_family": number
      "bundle_identifier": string
      "signature": string
      "short_version": string
      "version": string
      "icon_interpolation": number
      "launch_screens_interpolation": number
    }
    "capabilities": {
      "access_wifi": boolean
      "push_notifications": boolean
    }
    "user_data": {
      "accessible_from_files_app": boolean
      "accessible_from_itunes_sharing": boolean
    }
    "privacy": {
      "camera_usage_description": string
      "camera_usage_description_localized": string
      "microphone_usage_description": string
      "microphone_usage_description_localized": string
      "photolibrary_usage_description": string
      "photolibrary_usage_description_localized": string
    }
    "icons": {
      "iphone_120x120": string
      "iphone_180x180": string
      "ipad_76x76": string
      "ipad_152x152": string
      "ipad_167x167": string
      "app_store_1024x1024": string
      "spotlight_40x40": string
      "spotlight_80x80": string
      "settings_58x58": string
      "settings_87x87": string
      "notification_40x40": string
      "notification_60x60": string
    }
    "storyboard": {
      "use_launch_screen_storyboard": boolean
      "image_scale_mode": number
      "custom_image@2x": string
      "custom_image@3x": string
      "use_custom_bg_color": boolean
      "custom_bg_color": Color
    }
    "landscape_launch_screens": {
      "iphone_2436x1125": string
      "iphone_2208x1242": string
      "ipad_1024x768": string
      "ipad_2048x1536": string
    }
    "portrait_launch_screens": {
      "iphone_640x960": string
      "iphone_640x1136": string
      "iphone_750x1334": string
      "iphone_1125x2436": string
      "ipad_768x1024": string
      "ipad_1536x2048": string
      "iphone_1242x2208": string
    }
  }

  interface ExportPresetOptionsUWP{
    "custom_template": {
      "debug": string
      "release": string
    }
    "binary_format": {
      "architecture": string
    }
    "command_line": {
      "extra_args": string
    }
    "package": {
      "display_name": string
      "short_name": string
      "unique_name": string
      "description": string
      "publisher": string
      "publisher_display_name": string
    }
    "identity": {
      "product_guid": string
      "publisher_guid": string
    }
    "signing": {
      "certificate": string
      "password": string
      "algorithm": number
    }
    "version": {
      "major": number
      "minor": number
      "build": number
      "revision": number
    }
    "orientation": {
      "landscape": boolean
      "portrait": boolean
      "landscape_flipped": boolean
      "portrait_flipped": boolean
    }
    "images": {
      "background_color": string
    }
    "tiles": {
      "show_name_on_square150x150": boolean
      "show_name_on_wide310x150": boolean
      "show_name_on_square310x310": boolean
    }
    "capabilities": {
      "allJoyn": boolean
      "codeGeneration": boolean
      "internetClient": boolean
      "internetClientServer": boolean
      "privateNetworkClientServer": boolean
      "appointments": boolean
      "blockedChatMessages": boolean
      "chat": boolean
      "contacts": boolean
      "enterpriseAuthentication": boolean
      "musicLibrary": boolean
      "objects3D": boolean
      "picturesLibrary": boolean
      "phoneCall": boolean
      "removableStorage": boolean
      "sharedUserCertificates": boolean
      "userAccountInformation": boolean
      "videosLibrary": boolean
      "voipCall": boolean
      "bluetooth": boolean
      "location": boolean
      "microphone": boolean
      "proximity": boolean
      "webcam": boolean
    }
  }


  type ExportPresetOptions = ExportPresetOptionsAndroid | ExportPresetOptionsLinuxX11 | ExportPresetOptionsmacOS | ExportPresetOptionsWeb | ExportPresetOptionsWindowsDesktop | ExportPresetOptionsiOS | ExportPresetOptionsUWP


}