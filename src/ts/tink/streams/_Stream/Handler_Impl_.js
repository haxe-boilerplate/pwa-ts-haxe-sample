// Class: tink.streams._Stream.Handler_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
function tink_core__$Future_SyncFuture() {return require("./../../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}

// Constructor

var Handler_Impl_ = function(){}

// Meta

Handler_Impl_.__name__ = ["tink","streams","_Stream","Handler_Impl_"];
Handler_Impl_.prototype = {
	
};
Handler_Impl_.prototype.__class__ = Handler_Impl_.prototype.constructor = $hxClasses["tink.streams._Stream.Handler_Impl_"] = Handler_Impl_;

// Init



// Statics

Handler_Impl_._new = function(f) {
	var this1 = f;
	return this1;
}
Handler_Impl_.apply = function(this1,item) {
	return this1(item);
}
Handler_Impl_.ofSafeSync = function(f) {
	var this1 = function(i) {
		return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)(f(i)));
	};
	return this1;
}
Handler_Impl_.ofUnknownSync = function(f) {
	var this1 = function(i) {
		return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)(f(i)));
	};
	return this1;
}
Handler_Impl_.ofSafe = function(f) {
	var this1 = f;
	return this1;
}
Handler_Impl_.ofUnknown = function(f) {
	var this1 = f;
	return this1;
}


// Export

exports.default = Handler_Impl_;