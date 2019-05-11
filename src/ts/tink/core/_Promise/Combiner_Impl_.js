// Class: tink.core._Promise.Combiner_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function tink_core__$Future_SyncFuture() {return require("./../../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}
function tink_core_Outcome() {return require("./../../../tink/core/Outcome");}

// Constructor

var Combiner_Impl_ = function(){}

// Meta

Combiner_Impl_.__name__ = "tink.core._Promise.Combiner_Impl_";
Combiner_Impl_.prototype = {
	
};
Combiner_Impl_.prototype.__class__ = Combiner_Impl_.prototype.constructor = $hxClasses["tink.core._Promise.Combiner_Impl_"] = Combiner_Impl_;

// Init



// Statics

Combiner_Impl_.ofSafe = function(f) {
	return function(x1,x2) {
		return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)(f(x1,x2)));
	};
}
Combiner_Impl_.ofSync = function(f) {
	return function(x1,x2) {
		var ret = f(x1,x2).map((tink_core_Outcome().default).Success);
		return ret.gather();
	};
}
Combiner_Impl_.ofSafeSync = function(f) {
	return function(x1,x2) {
		return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Success(f(x1,x2))));
	};
}


// Export

exports.default = Combiner_Impl_;