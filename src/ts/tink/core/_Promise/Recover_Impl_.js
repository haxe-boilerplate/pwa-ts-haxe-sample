// Class: tink.core._Promise.Recover_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
function tink_core__$Future_SyncFuture() {return require("./../../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}

// Constructor

var Recover_Impl_ = function(){}

// Meta

Recover_Impl_.__name__ = ["tink","core","_Promise","Recover_Impl_"];
Recover_Impl_.prototype = {
	
};
Recover_Impl_.prototype.__class__ = Recover_Impl_.prototype.constructor = $hxClasses["tink.core._Promise.Recover_Impl_"] = Recover_Impl_;

// Init



// Statics

Recover_Impl_.ofSync = function(f) {
	return function(e) {
		return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)(f(e)));
	};
}


// Export

exports.default = Recover_Impl_;