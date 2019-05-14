// Class: tink.http._Fetch.FetchResponse_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function tink_core__$Promise_Promise_$Impl_$() {return require("./../../../tink/core/_Promise/Promise_Impl_");}
function tink_io_RealSourceTools() {return require("./../../../tink/io/RealSourceTools");}
function tink_core__$Future_SyncFuture() {return require("./../../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}
function tink_core_Outcome() {return require("./../../../tink/core/Outcome");}
function tink_core_TypedError() {return require("./../../../tink/core/TypedError");}
function tink_http_Message() {return require("./../../../tink/http/Message");}

// Constructor

var FetchResponse_Impl_ = function(){}

// Meta

FetchResponse_Impl_.__name__ = "tink.http._Fetch.FetchResponse_Impl_";
FetchResponse_Impl_.prototype = {
	
};
FetchResponse_Impl_.prototype.__class__ = FetchResponse_Impl_.prototype.constructor = $hxClasses["tink.http._Fetch.FetchResponse_Impl_"] = FetchResponse_Impl_;

// Init



// Statics

FetchResponse_Impl_.all = function(this1) {
	return (tink_core__$Promise_Promise_$Impl_$().default).next(this1,function(r) {
		return (tink_core__$Promise_Promise_$Impl_$().default).next((tink_io_RealSourceTools().default).all(r.body),function(chunk) {
			if(r.header.statusCode >= 400) {
				return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Failure((tink_core_TypedError().default).withData(r.header.statusCode,r.header.reason,chunk.toString(),{ fileName : "tink/http/Fetch.hx", lineNumber : 133, className : "tink.http._Fetch.FetchResponse_Impl_", methodName : "all"}))));
			} else {
				return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Success(new (tink_http_Message().default)(r.header,chunk))));
			}
		});
	});
}


// Export

exports.default = FetchResponse_Impl_;