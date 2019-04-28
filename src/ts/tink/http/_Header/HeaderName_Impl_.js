// Class: tink.http._Header.HeaderName_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;

// Constructor

var HeaderName_Impl_ = function(){}

// Meta

HeaderName_Impl_.__name__ = ["tink","http","_Header","HeaderName_Impl_"];
HeaderName_Impl_.prototype = {
	
};
HeaderName_Impl_.prototype.__class__ = HeaderName_Impl_.prototype.constructor = $hxClasses["tink.http._Header.HeaderName_Impl_"] = HeaderName_Impl_;

// Init



// Statics

HeaderName_Impl_._new = function(s) {
	var this1 = s;
	return this1;
}
HeaderName_Impl_.ofString = function(s) {
	var this1 = s.toLowerCase();
	return this1;
}
HeaderName_Impl_.REFERER = "referer"
HeaderName_Impl_.HOST = "host"
HeaderName_Impl_.SET_COOKIE = "set-cookie"
HeaderName_Impl_.COOKIE = "cookie"
HeaderName_Impl_.CONTENT_TYPE = "content-type"
HeaderName_Impl_.CONTENT_LENGTH = "content-length"
HeaderName_Impl_.CONTENT_DISPOSITION = "content-disposition"
HeaderName_Impl_.ACCEPT = "accept"
HeaderName_Impl_.ACCEPT_ENCODING = "accept-encoding"
HeaderName_Impl_.TRANSFER_ENCODING = "transfer-encoding"
HeaderName_Impl_.LOCATION = "location"
HeaderName_Impl_.AUTHORIZATION = "authorization"
HeaderName_Impl_.ORIGIN = "origin"
HeaderName_Impl_.VARY = "vary"
HeaderName_Impl_.CACHE_CONTROL = "cache-control"
HeaderName_Impl_.EXPIRES = "expires"
HeaderName_Impl_.ACCESS_CONTROL_REQUEST_METHOD = "access-control-request-method"
HeaderName_Impl_.ACCESS_CONTROL_REQUEST_HEADERS = "access-control-request-headers"
HeaderName_Impl_.ACCESS_CONTROL_ALLOW_ORIGIN = "access-control-allow-origin"
HeaderName_Impl_.ACCESS_CONTROL_ALLOW_CREDENTIALS = "access-control-allow-credentials"
HeaderName_Impl_.ACCESS_CONTROL_EXPOSE_HEADERS = "access-control-expose-headers"
HeaderName_Impl_.ACCESS_CONTROL_MAX_AGE = "access-control-max-age"
HeaderName_Impl_.ACCESS_CONTROL_ALLOW_METHODS = "access-control-allow-methods"
HeaderName_Impl_.ACCESS_CONTROL_ALLOW_HEADERS = "access-control-allow-headers"

// Export

exports.default = HeaderName_Impl_;