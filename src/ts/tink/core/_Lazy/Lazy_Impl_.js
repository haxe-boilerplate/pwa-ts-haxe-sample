// Class: tink.core._Lazy.Lazy_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
function tink_core__$Lazy_LazyFunc() {return require("./../../../tink/core/_Lazy/LazyFunc");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}

// Constructor

var Lazy_Impl_ = function(){}

// Meta

Lazy_Impl_.__name__ = ["tink","core","_Lazy","Lazy_Impl_"];
Lazy_Impl_.prototype = {
	
};
Lazy_Impl_.prototype.__class__ = Lazy_Impl_.prototype.constructor = $hxClasses["tink.core._Lazy.Lazy_Impl_"] = Lazy_Impl_;

// Init



// Statics

Lazy_Impl_.get = function(this1) {
	return this1.get();
}
Lazy_Impl_.ofFunc = function(f) {
	return new (tink_core__$Lazy_LazyFunc().default)(f);
}
Lazy_Impl_.map = function(this1,f) {
	return this1.map(f);
}
Lazy_Impl_.flatMap = function(this1,f) {
	return this1.flatMap(f);
}
Lazy_Impl_.ofConst = function(c) {
	return new (tink_core__$Lazy_LazyConst().default)(c);
}


// Export

exports.default = Lazy_Impl_;