// Class: tink.web.forms._FormField.FormField_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function js__$Boot_HaxeError() {return require("./../../../../js/_Boot/HaxeError");}
function tink__$Stringly_Stringly_$Impl_$() {return require("./../../../../tink/_Stringly/Stringly_Impl_");}

// Constructor

var FormField_Impl_ = function(){}

// Meta

FormField_Impl_.__name__ = "tink.web.forms._FormField.FormField_Impl_";
FormField_Impl_.prototype = {
	
};
FormField_Impl_.prototype.__class__ = FormField_Impl_.prototype.constructor = $hxClasses["tink.web.forms._FormField.FormField_Impl_"] = FormField_Impl_;

// Init



// Statics

FormField_Impl_.getValue = function(this1) {
	switch(this1._hx_index) {
	case 0:
		var v = this1.v;
		return v;
	case 1:
		throw new (js__$Boot_HaxeError().default)("expected plain value but received file");
	}
}
FormField_Impl_.toFloat = function(this1) {
	return (tink__$Stringly_Stringly_$Impl_$().default).toFloat(FormField_Impl_.getValue(this1));
}
FormField_Impl_.toInt = function(this1) {
	return (tink__$Stringly_Stringly_$Impl_$().default).toInt(FormField_Impl_.getValue(this1));
}
FormField_Impl_.toString = function(this1) {
	return FormField_Impl_.getValue(this1);
}
FormField_Impl_.getFile = function(this1) {
	switch(this1._hx_index) {
	case 0:
		throw new (js__$Boot_HaxeError().default)("expected file but got plain value");
	case 1:
		var u = this1.handle;
		var this2 = u;
		return this2;
	}
}


// Export

exports.default = FormField_Impl_;