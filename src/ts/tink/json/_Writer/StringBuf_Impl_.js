// Class: tink.json._Writer.StringBuf_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;

// Constructor

var StringBuf_Impl_ = function(){}

// Meta

StringBuf_Impl_.__name__ = "tink.json._Writer.StringBuf_Impl_";
StringBuf_Impl_.prototype = {
	
};
StringBuf_Impl_.prototype.__class__ = StringBuf_Impl_.prototype.constructor = $hxClasses["tink.json._Writer.StringBuf_Impl_"] = StringBuf_Impl_;

// Init



// Statics

StringBuf_Impl_._new = function() {
	var this1 = "";
	return this1;
}
StringBuf_Impl_.addChar = function(this1,c) {
	this1 += String.fromCodePoint(c);
}
StringBuf_Impl_.add = function(this1,s) {
	this1 += s;
}


// Export

exports.default = StringBuf_Impl_;