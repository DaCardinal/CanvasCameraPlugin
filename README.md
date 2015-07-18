CanvasCameraPlugin
============================

Cordova canvas camera plugin for iOS/Android, supports camera preview and taking photos.

### Plugin's Purpose
The purpose of the plugin is to capture video to preview camera on web page(canvas tag) and to take photos with user defined quality / dimension.


## Supported Platforms
- **iOS**<br>
- **Android**<br>

## Dependencies
[Cordova][cordova] will check all dependencies and install them if they are missing.


## Installation
The plugin can either be installed into the local development environment or cloud based through [PhoneGap Build][PGB].

### Adding the Plugin to your project
Through the [Command-line Interface][CLI]:
```bash
# ~~ from master ~~
cordova plugin add https://github.com/DaCardinal/CanvasCameraPlugin.git && cordova prepare
```

### Removing the Plugin from your project
Through the [Command-line Interface][CLI]:
```bash
cordova plugin rm com.keith.cordova.plugin.canvascamera
```

### Ionic Build
Add the following xml to your package.json to always use the latest version of this plugin:
```xml
"cordovaPlugins": [
  "cordova-plugin-device",
  "cordova-plugin-console",
  "cordova-plugin-whitelist",
  "cordova-plugin-splashscreen",
  "com.ionic.keyboard",
  {
    "locator": "https://github.com/DaCardinal/CanvasCameraPlugin.git",
    "id": "com.keith.cordova.plugin.canvascamera"
  },
  "cordova-plugin-camera"
]
```
More informations can be found [here][PGB_plugin].

[ctassetspickercontroller]: https://github.com/chiunam/CTAssetsPickerController
[cordova-plugin-local-notifications]: https://github.com/katzer/cordova-plugin-local-notifications
[cordova]: https://cordova.apache.org
[PGB_plugin]: https://build.phonegap.com/plugins/413
[onsuccess]: #onSuccess
[oncancel]: #onCancel
[options]: #options
[getById]: #getById
[ongetbyid]: #onGetById
[CLI]: http://cordova.apache.org/docs/en/3.0.0/guide_cli_index.md.html#The%20Command-line%20Interface
[PGB]: http://docs.build.phonegap.com/en_US/3.3.0/index.html
[apache2_license]: http://opensource.org/licenses/Apache-2.0
