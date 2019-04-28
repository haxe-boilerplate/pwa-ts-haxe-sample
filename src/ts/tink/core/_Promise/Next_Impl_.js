// Class: tink.core._Promise.Next_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
function tink_core__$Future_SyncFuture() {return require("./../../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}
function tink_core_Outcome() {return require("./../../../tink/core/Outcome");}
function tink_core__$Promise_Promise_$Impl_$() {return require("./../../../tink/core/_Promise/Promise_Impl_");}

// Constructor

var Next_Impl_ = function(){}

// Meta

Next_Impl_.__name__ = ["tink","core","_Promise","Next_Impl_"];
Next_Impl_.prototype = {
	
};
Next_Impl_.prototype.__class__ = Next_Impl_.prototype.constructor = $hxClasses["tink.core._Promise.Next_Impl_"] = Next_Impl_;

// Init



// Statics

Next_Impl_.ofSafe = function(f) {
	return function(x) {
		return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)(f(x)));
	};
}
Next_Impl_.ofSync = function(f) {
	return function(x) {
		var ret = f(x).map((tink_core_Outcome().default).Success);
		return ret.gather();
	};
}
Next_Impl_.ofSafeSync = function(f) {
	return function(x) {
		return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Success(f(x))));
	};
}
Next_Impl_._chain = function(a,b) {
	return function(v) {
		return (tink_core__$Promise_Promise_$Impl_$().default).next(a(v),b);
	};
}


// Export

exports.default = Next_Impl_;