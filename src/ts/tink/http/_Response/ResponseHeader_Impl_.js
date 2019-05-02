// Class: tink.http._Response.ResponseHeader_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
function tink_http_ResponseHeaderBase() {return require("./../../../tink/http/ResponseHeaderBase");}

// Constructor

var ResponseHeader_Impl_ = function(){}

// Meta

ResponseHeader_Impl_.__name__ = ["tink","http","_Response","ResponseHeader_Impl_"];
ResponseHeader_Impl_.prototype = {
	
};
ResponseHeader_Impl_.prototype.__class__ = ResponseHeader_Impl_.prototype.constructor = $hxClasses["tink.http._Response.ResponseHeader_Impl_"] = ResponseHeader_Impl_;

// Init



// Statics

ResponseHeader_Impl_._new = function(statusCode,reason,fields,protocol) {
	if(protocol == null) {
		protocol = "HTTP/1.1";
	}
	var this1 = new (tink_http_ResponseHeaderBase().default)(statusCode,reason,fields,protocol);
	return this1;
}
ResponseHeader_Impl_.fromStatusCode = function(code) {
	var this1 = new (tink_http_ResponseHeaderBase().default)(code,null,null,"HTTP/1.1");
	return this1;
}
ResponseHeader_Impl_.fromHeaderFields = function(fields) {
	var this1 = new (tink_http_ResponseHeaderBase().default)(200,null,fields,"HTTP/1.1");
	return this1;
}
ResponseHeader_Impl_.parser = function() {
	return (tink_http_ResponseHeaderBase().default).parser();
}


// Export

exports.default = ResponseHeader_Impl_;