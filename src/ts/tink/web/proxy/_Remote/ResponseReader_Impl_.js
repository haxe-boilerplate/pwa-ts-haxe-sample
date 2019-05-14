// Class: tink.web.proxy._Remote.ResponseReader_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function tink_core__$Promise_Promise_$Impl_$() {return require("./../../../../tink/core/_Promise/Promise_Impl_");}
function tink_io_RealSourceTools() {return require("./../../../../tink/io/RealSourceTools");}
function tink_core__$Future_SyncFuture() {return require("./../../../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../../../tink/core/_Lazy/LazyConst");}
function tink_core_Outcome() {return require("./../../../../tink/core/Outcome");}
function tink_core_TypedError() {return require("./../../../../tink/core/TypedError");}

// Constructor

var ResponseReader_Impl_ = function(){}

// Meta

ResponseReader_Impl_.__name__ = "tink.web.proxy._Remote.ResponseReader_Impl_";
ResponseReader_Impl_.prototype = {
	
};
ResponseReader_Impl_.prototype.__class__ = ResponseReader_Impl_.prototype.constructor = $hxClasses["tink.web.proxy._Remote.ResponseReader_Impl_"] = ResponseReader_Impl_;

// Init



// Statics

ResponseReader_Impl_.withHeader = function(this1,header) {
	var f = this1;
	var a1 = header;
	return function(a2) {
		return f(a1,a2);
	};
}
ResponseReader_Impl_.ofStringReader = function(read) {
	return function(header,body) {
		return (tink_core__$Promise_Promise_$Impl_$().default).next((tink_io_RealSourceTools().default).all(body),function(chunk) {
			if(header.statusCode >= 400) {
				return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Failure((tink_core_TypedError().default).withData(header.statusCode,header.reason,chunk.toString(),{ fileName : "tink/web/proxy/Remote.hx", lineNumber : 78, className : "tink.web.proxy._Remote.ResponseReader_Impl_", methodName : "ofStringReader"}))));
			} else {
				var o = chunk.toString();
				return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)(read(o)));
			}
		});
	};
}
ResponseReader_Impl_.ofSafeStringReader = function(read) {
	return ResponseReader_Impl_.ofStringReader(function(s) {
		return (tink_core_Outcome().default).Success(read(s));
	});
}


// Export

exports.default = ResponseReader_Impl_;