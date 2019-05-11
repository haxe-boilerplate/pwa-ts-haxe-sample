// Class: tink.streams._RealStream.RealStream_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function tink_streams__$Stream_Stream_$Impl_$() {return require("./../../../tink/streams/_Stream/Stream_Impl_");}
function tink_core__$Promise_Promise_$Impl_$() {return require("./../../../tink/core/_Promise/Promise_Impl_");}
function tink_streams__$Stream_Handler_$Impl_$() {return require("./../../../tink/streams/_Stream/Handler_Impl_");}
function tink_core__$Future_SyncFuture() {return require("./../../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}
function tink_streams_Handled() {return require("./../../../tink/streams/Handled");}
function js__$Boot_HaxeError() {return require("./../../../js/_Boot/HaxeError");}
function tink_core_Outcome() {return require("./../../../tink/core/Outcome");}

// Constructor

var RealStream_Impl_ = function(){}

// Meta

RealStream_Impl_.__name__ = "tink.streams._RealStream.RealStream_Impl_";
RealStream_Impl_.prototype = {
	
};
RealStream_Impl_.prototype.__class__ = RealStream_Impl_.prototype.constructor = $hxClasses["tink.streams._RealStream.RealStream_Impl_"] = RealStream_Impl_;

// Init



// Statics

RealStream_Impl_.promiseOfIdealStream = function(p) {
	return (tink_streams__$Stream_Stream_$Impl_$().default).promise((tink_core__$Promise_Promise_$Impl_$().default).ofSpecific(p));
}
RealStream_Impl_.promiseOfStreamNoise = function(p) {
	return (tink_streams__$Stream_Stream_$Impl_$().default).promise(p);
}
RealStream_Impl_.promiseOfRealStream = function(p) {
	return (tink_streams__$Stream_Stream_$Impl_$().default).promise((tink_core__$Promise_Promise_$Impl_$().default).ofSpecific(p));
}
RealStream_Impl_.promiseOfStreamError = function(p) {
	return (tink_streams__$Stream_Stream_$Impl_$().default).promise(p);
}
RealStream_Impl_.collect = function(this1) {
	var buf = [];
	var ret = this1.forEach((tink_streams__$Stream_Handler_$Impl_$().default).ofSafe(function(x) {
		buf.push(x);
		return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_streams_Handled().default).Resume));
	})).map(function(c) {
		switch(c._hx_index) {
		case 0:
			throw new (js__$Boot_HaxeError().default)("unreachable");
		case 2:
			var e = c.error;
			return (tink_core_Outcome().default).Failure(e);
		case 3:
			return (tink_core_Outcome().default).Success(buf);
		}
	});
	return ret.gather();
}


// Export

exports.default = RealStream_Impl_;