//
//  CanvasCamera.js
//  PhoneGap iOS Cordova Plugin to capture Camera streaming into a HTML5 Canvas or an IMG tag.
//
//  MIT License

cordova.define("cordova/plugin/CanvasCamera", function(require, exports, module) {
    var exec = require('cordova/exec');
    var argscheck = require('cordova/argscheck');
    var	utils = require('cordova/utils');

    var CanvasCamera = function(){
    };

    CanvasCamera.prototype.setOnPictureTakenHandler = function(onPictureTaken) {
    	exec(onPictureTaken, onPictureTaken, "CanvasCamera", "setOnPictureTakenHandler", []);
    };

    //@param rect {x: 0, y: 0, width: 100, height:100}
    //@param defaultCamera "front" | "back"
    CanvasCamera.prototype.startCamera = function(rect, defaultCamera, tapEnabled, dragEnabled, toBack) {
    	exec(null, null, "CanvasCamera", "startCamera", [rect.x, rect.y, rect.width, rect.height, defaultCamera, !!tapEnabled, !!dragEnabled, !!toBack]);
    };

    CanvasCamera.prototype.stopCamera = function() {
    	exec(null, null, "CanvasCamera", "stopCamera", []);
    };

    //@param size {maxWidth: 100, maxHeight:100}
    CanvasCamera.prototype.takePicture = function(size) {
    	var params = [0, 0];
    	if(size){
    		params = [size.maxWidth, size.maxHeight];
    	}
    	exec(null, null, "CanvasCamera", "takePicture", params);
    };

    CanvasCamera.prototype.setColorEffect = function(effect) {
      exec(null, null, "CanvasCamera", "setColorEffect", [effect]);
    };

    CanvasCamera.prototype.switchCamera = function() {
    	exec(null, null, "CanvasCamera", "switchCamera", []);
    };

    CanvasCamera.prototype.hide = function() {
    	exec(null, null, "CanvasCamera", "hideCamera", []);
    };

    CanvasCamera.prototype.show = function() {
    	exec(null, null, "CanvasCamera", "showCamera", []);
    };

    CanvasCamera.prototype.disable = function(disable) {
    	exec(null, null, "CanvasCamera", "disable", [disable]);
    };

    var myplugin = new CanvasCamera();
    module.exports = myplugin;
});

var CanvasCamera = cordova.require("cordova/plugin/CanvasCamera");


var DestinationType = {
    DATA_URL : 0,
    FILE_URI : 1
};

var PictureSourceType = {
    PHOTOLIBRARY : 0,
    CAMERA : 1,
    SAVEDPHOTOALBUM : 2
};

var EncodingType = {
    JPEG : 0,
    PNG : 1
};

var CameraPosition = {
    BACK : 0,
    FRONT : 1
};

var CameraPosition = {
    BACK : 1,
    FRONT : 2
};

var FlashMode = {
    OFF : 0,
    ON : 1,
    AUTO : 2
};

CanvasCamera.DestinationType = DestinationType;
CanvasCamera.PictureSourceType = PictureSourceType;
CanvasCamera.EncodingType = EncodingType;
CanvasCamera.CameraPosition = CameraPosition;
CanvasCamera.FlashMode = FlashMode;

module.exports = CanvasCamera;
