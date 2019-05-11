// Class: tink.url._Portion.Portion_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;

// Constructor

var Portion_Impl_ = function(){}

// Meta

Portion_Impl_.__name__ = "tink.url._Portion.Portion_Impl_";
Portion_Impl_.prototype = {
	
};
Portion_Impl_.prototype.__class__ = Portion_Impl_.prototype.constructor = $hxClasses["tink.url._Portion.Portion_Impl_"] = Portion_Impl_;

// Init



// Statics

Portion_Impl_.get_raw = function(this1) {
	return this1;
}
Portion_Impl_._new = function(v) {
	var this1 = v;
	return this1;
}
Portion_Impl_.stringly = function(this1) {
	return Portion_Impl_.toString(this1);
}
Portion_Impl_.toString = function(this1) {
	if(this1 == null) {
		return null;
	} else {
		return decodeURIComponent(this1.split("+").join(" "));
	}
}
Portion_Impl_.ofString = function(s) {
	var this1 = s == null ? "" : encodeURIComponent(s);
	return this1;
}


// Export

exports.default = Portion_Impl_;