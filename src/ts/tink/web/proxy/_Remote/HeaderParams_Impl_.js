// Class: tink.web.proxy._Remote.HeaderParams_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function tink_http_HeaderField() {return require("./../../../../tink/http/HeaderField");}
function tink_http_Header() {return require("./../../../../tink/http/Header");}

// Constructor

var HeaderParams_Impl_ = function(){}

// Meta

HeaderParams_Impl_.__name__ = "tink.web.proxy._Remote.HeaderParams_Impl_";
HeaderParams_Impl_.prototype = {
	
};
HeaderParams_Impl_.prototype.__class__ = HeaderParams_Impl_.prototype.constructor = $hxClasses["tink.web.proxy._Remote.HeaderParams_Impl_"] = HeaderParams_Impl_;

// Init



// Statics

HeaderParams_Impl_._new = function() {
	var this1 = [];
	return this1;
}
HeaderParams_Impl_.add = function(this1,name,value) {
	this1.push(new (tink_http_HeaderField().default)(name,value));
	return this1;
}
HeaderParams_Impl_.flush = function(this1) {
	return this1;
}
HeaderParams_Impl_.toString = function(this1) {
	return new (tink_http_Header().default)(this1).toString();
}


// Export

exports.default = HeaderParams_Impl_;