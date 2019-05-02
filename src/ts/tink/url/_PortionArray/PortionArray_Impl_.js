// Class: tink.url._PortionArray.PortionArray_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
function tink_url__$Portion_Portion_$Impl_$() {return require("./../../../tink/url/_Portion/Portion_Impl_");}

// Constructor

var PortionArray_Impl_ = function(){}

// Meta

PortionArray_Impl_.__name__ = ["tink","url","_PortionArray","PortionArray_Impl_"];
PortionArray_Impl_.prototype = {
	
};
PortionArray_Impl_.prototype.__class__ = PortionArray_Impl_.prototype.constructor = $hxClasses["tink.url._PortionArray.PortionArray_Impl_"] = PortionArray_Impl_;

// Init



// Statics

PortionArray_Impl_.toStringArray = function(this1) {
	var _g = [];
	var _g1 = 0;
	while(_g1 < this1.length) {
		var p = this1[_g1];
		++_g1;
		_g.push((tink_url__$Portion_Portion_$Impl_$().default).toString(p));
	}
	return _g;
}


// Export

exports.default = PortionArray_Impl_;