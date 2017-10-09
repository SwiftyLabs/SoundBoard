cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.appodeal.plugin.AppodealPlugin",
        "file": "plugins/com.appodeal.plugin/www/appodeal.js",
        "pluginId": "com.appodeal.plugin",
        "clobbers": [
            "Appodeal"
        ]
    },
    {
        "id": "com.xmartlabs.cordova.market.Market",
        "file": "plugins/com.xmartlabs.cordova.market/www/market.js",
        "pluginId": "com.xmartlabs.cordova.market",
        "clobbers": [
            "cordova.plugins.market"
        ]
    },
    {
        "id": "cordova-plugin-console.console",
        "file": "plugins/cordova-plugin-console/www/console-via-logger.js",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "console"
        ]
    },
    {
        "id": "cordova-plugin-console.logger",
        "file": "plugins/cordova-plugin-console/www/logger.js",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "cordova.logger"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-inapppurchase.PaymentsPlugin",
        "file": "plugins/cordova-plugin-inapppurchase/www/index-ios.js",
        "pluginId": "cordova-plugin-inapppurchase",
        "clobbers": [
            "inAppPurchase"
        ]
    },
    {
        "id": "cordova-plugin-network-information.network",
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "id": "cordova-plugin-network-information.Connection",
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "cordova-plugin-x-socialsharing.SocialSharing",
        "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
        "pluginId": "cordova-plugin-x-socialsharing",
        "clobbers": [
            "window.plugins.socialsharing"
        ]
    },
    {
        "id": "cordova-plugin-youtube-video-player.YoutubeVideoPlayer",
        "file": "plugins/cordova-plugin-youtube-video-player/plugins/com.bunkerpalace.cordova.YoutubeVideoPlayer/www/YoutubeVideoPlayer.js",
        "pluginId": "cordova-plugin-youtube-video-player",
        "clobbers": [
            "YoutubeVideoPlayer"
        ]
    },
    {
        "id": "cordova-sqlite-storage.SQLitePlugin",
        "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
        "pluginId": "cordova-sqlite-storage",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "id": "ionic-plugin-keyboard.keyboard",
        "file": "plugins/ionic-plugin-keyboard/www/ios/keyboard.js",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    },
    {
        "id": "onesignal-cordova-plugin.OneSignal",
        "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
        "pluginId": "onesignal-cordova-plugin",
        "clobbers": [
            "OneSignal"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.appodeal.plugin": "2.1.0",
    "com.xmartlabs.cordova.market": "1.1",
    "cordova-plugin-console": "1.0.6",
    "cordova-plugin-device": "1.1.5",
    "cordova-plugin-inapppurchase": "1.1.0",
    "cordova-plugin-network-information": "1.3.3",
    "cordova-plugin-splashscreen": "4.0.3",
    "cordova-plugin-statusbar": "2.1.3",
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-x-socialsharing": "5.1.7",
    "cordova-plugin-youtube-video-player": "1.0.6",
    "cordova-sqlite-storage": "2.0.3",
    "ionic-plugin-keyboard": "2.2.1",
    "onesignal-cordova-plugin": "2.0.11"
};
// BOTTOM OF METADATA
});