// Class: tink.core._Ref.Ref_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
function Std() {return require("./../../../Std");}

// Constructor

var Ref_Impl_ = function(){}

// Meta

Ref_Impl_.__name__ = ["tink","core","_Ref","Ref_Impl_"];
Ref_Impl_.prototype = {
	
};
Ref_Impl_.prototype.__class__ = Ref_Impl_.prototype.constructor = $hxClasses["tink.core._Ref.Ref_Impl_"] = Ref_Impl_;

// Init



// Statics

Ref_Impl_._new = function() {
	var this1 = new Array(1);
	var this2 = this1;
	return this2;
}
Ref_Impl_.get_value = function(this1) {
	return this1[0];
}
Ref_Impl_.set_value = function(this1,param) {
	return this1[0] = param;
}
Ref_Impl_.toString = function(this1) {
	return "@[" + (Std().default).string(this1[0]) + "]";
}
Ref_Impl_.to = function(v) {
	var this1 = new Array(1);
	var this2 = this1;
	var ret = this2;
	ret[0] = v;
	return ret;
}


// Export

exports.default = Ref_Impl_;