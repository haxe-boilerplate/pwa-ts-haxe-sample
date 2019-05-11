// Class: tink.streams._Stream.Regrouper_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function tink_core__$Future_SyncFuture() {return require("./../../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}

// Constructor

var Regrouper_Impl_ = function(){}

// Meta

Regrouper_Impl_.__name__ = "tink.streams._Stream.Regrouper_Impl_";
Regrouper_Impl_.prototype = {
	
};
Regrouper_Impl_.prototype.__class__ = Regrouper_Impl_.prototype.constructor = $hxClasses["tink.streams._Stream.Regrouper_Impl_"] = Regrouper_Impl_;

// Init



// Statics

Regrouper_Impl_.ofIgnorance = function(f) {
	return { apply : function(i,_) {
		return f(i);
	}};
}
Regrouper_Impl_.ofIgnoranceSync = function(f) {
	return { apply : function(i,_) {
		return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)(f(i)));
	}};
}
Regrouper_Impl_.ofFunc = function(f) {
	return { apply : f};
}
Regrouper_Impl_.ofFuncSync = function(f) {
	return { apply : function(i,s) {
		return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)(f(i,s)));
	}};
}


// Export

exports.default = Regrouper_Impl_;