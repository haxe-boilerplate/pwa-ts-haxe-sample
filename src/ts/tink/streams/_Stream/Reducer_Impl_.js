// Class: tink.streams._Stream.Reducer_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function tink_core__$Future_SyncFuture() {return require("./../../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}
function tink_streams_ReductionStep() {return require("./../../../tink/streams/ReductionStep");}

// Constructor

var Reducer_Impl_ = function(){}

// Meta

Reducer_Impl_.__name__ = "tink.streams._Stream.Reducer_Impl_";
Reducer_Impl_.prototype = {
	
};
Reducer_Impl_.prototype.__class__ = Reducer_Impl_.prototype.constructor = $hxClasses["tink.streams._Stream.Reducer_Impl_"] = Reducer_Impl_;

// Init



// Statics

Reducer_Impl_._new = function(f) {
	var this1 = f;
	return this1;
}
Reducer_Impl_.apply = function(this1,res,item) {
	return this1(res,item);
}
Reducer_Impl_.ofSafeSync = function(f) {
	var this1 = function(res,cur) {
		return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)(f(res,cur)));
	};
	return this1;
}
Reducer_Impl_.ofUnknownSync = function(f) {
	var this1 = function(res,cur) {
		return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)(f(res,cur)));
	};
	return this1;
}
Reducer_Impl_.ofSafe = function(f) {
	var this1 = f;
	return this1;
}
Reducer_Impl_.ofPlainSync = function(f) {
	var this1 = function(res,cur) {
		return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_streams_ReductionStep().default).Progress(f(res,cur))));
	};
	return this1;
}
Reducer_Impl_.ofUnknown = function(f) {
	var this1 = f;
	return this1;
}
Reducer_Impl_.ofPromiseBased = function(f) {
	var this1 = function(res,cur) {
		var ret = f(res,cur).map(function(s) {
			switch(s._hx_index) {
			case 0:
				var r = s.data;
				return (tink_streams_ReductionStep().default).Progress(r);
			case 1:
				var e = s.failure;
				return (tink_streams_ReductionStep().default).Crash(e);
			}
		});
		return ret.gather();
	};
	return this1;
}


// Export

exports.default = Reducer_Impl_;