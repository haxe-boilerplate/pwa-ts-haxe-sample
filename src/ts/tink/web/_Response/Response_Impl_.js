// Class: tink.web._Response.Response_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function tink_http_Message() {return require("./../../../tink/http/Message");}

// Constructor

var Response_Impl_ = function(){}

// Meta

Response_Impl_.__name__ = "tink.web._Response.Response_Impl_";
Response_Impl_.prototype = {
	
};
Response_Impl_.prototype.__class__ = Response_Impl_.prototype.constructor = $hxClasses["tink.web._Response.Response_Impl_"] = Response_Impl_;

// Init



// Statics

Response_Impl_._new = function(header,body) {
	var this1 = new (tink_http_Message().default)(header,body);
	return this1;
}
Response_Impl_.getData = function(this1) {
	return this1.body;
}


// Export

exports.default = Response_Impl_;