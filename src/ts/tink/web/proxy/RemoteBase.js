// Class: tink.web.proxy.RemoteBase

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;

// Constructor

var RemoteBase = function(client,endpoint) {
	this.client = client;
	this.endpoint = endpoint;
}

// Meta

RemoteBase.__name__ = "tink.web.proxy.RemoteBase";
RemoteBase.prototype = {
	
};
RemoteBase.prototype.__class__ = RemoteBase.prototype.constructor = $hxClasses["tink.web.proxy.RemoteBase"] = RemoteBase;

// Init



// Statics




// Export

exports.default = RemoteBase;