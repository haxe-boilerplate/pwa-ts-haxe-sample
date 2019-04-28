// Class: tink.http._Response.OutgoingResponseData

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
var $extend = require("./../../../extend_stub").default;
function tink_http_Message() {return require("./../../../tink/http/Message");}

// Constructor

var OutgoingResponseData = function(header,body) {
	(tink_http_Message().default).call(this,header,body);
}

// Meta

OutgoingResponseData.__name__ = ["tink","http","_Response","OutgoingResponseData"];
OutgoingResponseData.__super__ = (tink_http_Message().default);
OutgoingResponseData.prototype = $extend((tink_http_Message().default).prototype, {
	
});
OutgoingResponseData.prototype.__class__ = OutgoingResponseData.prototype.constructor = $hxClasses["tink.http._Response.OutgoingResponseData"] = OutgoingResponseData;

// Init



// Statics




// Export

exports.default = OutgoingResponseData;