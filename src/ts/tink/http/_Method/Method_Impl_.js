// Class: tink.http._Method.Method_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;

// Constructor

var Method_Impl_ = function(){}

// Meta

Method_Impl_.__name__ = ["tink","http","_Method","Method_Impl_"];
Method_Impl_.prototype = {
	
};
Method_Impl_.prototype.__class__ = Method_Impl_.prototype.constructor = $hxClasses["tink.http._Method.Method_Impl_"] = Method_Impl_;

// Init



// Statics

Method_Impl_.ofString = function(s,fallback) {
	var _g = s.toUpperCase();
	switch(_g) {
	case "DELETE":
		return "DELETE";
	case "GET":
		return "GET";
	case "HEAD":
		return "HEAD";
	case "OPTIONS":
		return "OPTIONS";
	case "PATCH":
		return "PATCH";
	case "POST":
		return "POST";
	case "PUT":
		return "PUT";
	default:
		var v = _g;
		return fallback(v);
	}
}
Method_Impl_.GET = "GET"
Method_Impl_.HEAD = "HEAD"
Method_Impl_.OPTIONS = "OPTIONS"
Method_Impl_.POST = "POST"
Method_Impl_.PUT = "PUT"
Method_Impl_.PATCH = "PATCH"
Method_Impl_.DELETE = "DELETE"

// Export

exports.default = Method_Impl_;