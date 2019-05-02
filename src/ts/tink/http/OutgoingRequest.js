// Class: tink.http.OutgoingRequest

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function tink_http_Message() {return require("./../../tink/http/Message");}

// Constructor

var OutgoingRequest = function(header,body) {
	(tink_http_Message().default).call(this,header,body);
}

// Meta

OutgoingRequest.__name__ = ["tink","http","OutgoingRequest"];
OutgoingRequest.__super__ = (tink_http_Message().default);
OutgoingRequest.prototype = $extend((tink_http_Message().default).prototype, {
	
});
OutgoingRequest.prototype.__class__ = OutgoingRequest.prototype.constructor = $hxClasses["tink.http.OutgoingRequest"] = OutgoingRequest;

// Init



// Statics




// Export

exports.default = OutgoingRequest;