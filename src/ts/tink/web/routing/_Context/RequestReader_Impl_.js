// Class: tink.web.routing._Context.RequestReader_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $import = require("./../../../../import_stub").default;
function tink_core__$Promise_Promise_$Impl_$() {return require("./../../../../tink/core/_Promise/Promise_Impl_");}
function tink_core__$Future_SyncFuture() {return require("./../../../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../../../tink/core/_Lazy/LazyConst");}
function tink_core_Outcome() {return require("./../../../../tink/core/Outcome");}

// Constructor

var RequestReader_Impl_ = function(){}

// Meta

RequestReader_Impl_.__name__ = ["tink","web","routing","_Context","RequestReader_Impl_"];
RequestReader_Impl_.prototype = {
	
};
RequestReader_Impl_.prototype.__class__ = RequestReader_Impl_.prototype.constructor = $hxClasses["tink.web.routing._Context.RequestReader_Impl_"] = RequestReader_Impl_;

// Init



// Statics

RequestReader_Impl_.ofStringReader = function(read) {
	return function(ctx) {
		return (tink_core__$Promise_Promise_$Impl_$().default).next(ctx.allRaw(),function(body) {
			var o = body.toString();
			return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)(read(o)));
		});
	};
}
RequestReader_Impl_.ofSafeStringReader = function(read) {
	return RequestReader_Impl_.ofStringReader(function(s) {
		return (tink_core_Outcome().default).Success(read(s));
	});
}


// Export

exports.default = RequestReader_Impl_;