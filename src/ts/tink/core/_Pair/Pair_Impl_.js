// Class: tink.core._Pair.Pair_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
function tink_core_MPair() {return require("./../../../tink/core/MPair");}

// Constructor

var Pair_Impl_ = function(){}

// Meta

Pair_Impl_.__name__ = ["tink","core","_Pair","Pair_Impl_"];
Pair_Impl_.prototype = {
	
};
Pair_Impl_.prototype.__class__ = Pair_Impl_.prototype.constructor = $hxClasses["tink.core._Pair.Pair_Impl_"] = Pair_Impl_;

// Init



// Statics

Pair_Impl_._new = function(a,b) {
	var this1 = new (tink_core_MPair().default)(a,b);
	return this1;
}
Pair_Impl_.get_a = function(this1) {
	return this1.a;
}
Pair_Impl_.get_b = function(this1) {
	return this1.b;
}
Pair_Impl_.toBool = function(this1) {
	return this1 != null;
}
Pair_Impl_.isNil = function(this1) {
	return this1 == null;
}
Pair_Impl_.nil = function() {
	return null;
}


// Export

exports.default = Pair_Impl_;