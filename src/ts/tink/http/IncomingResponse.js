// Class: tink.http.IncomingResponse

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function tink_http_Message() {return require("./../../tink/http/Message");}
function tink_core__$Promise_Promise_$Impl_$() {return require("./../../tink/core/_Promise/Promise_Impl_");}
function tink_io_RealSourceTools() {return require("./../../tink/io/RealSourceTools");}
function tink_core__$Future_SyncFuture() {return require("./../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../tink/core/_Lazy/LazyConst");}
function tink_core_Outcome() {return require("./../../tink/core/Outcome");}
function tink_core_TypedError() {return require("./../../tink/core/TypedError");}
function httpstatus__$HttpStatusMessage_HttpStatusMessage_$Impl_$() {return require("./../../httpstatus/_HttpStatusMessage/HttpStatusMessage_Impl_");}
function tink_http_ResponseHeaderBase() {return require("./../../tink/http/ResponseHeaderBase");}
function tink_http_HeaderField() {return require("./../../tink/http/HeaderField");}
function tink_streams_Single() {return require("./../../tink/streams/Single");}
function tink_chunk_ByteChunk() {return require("./../../tink/chunk/ByteChunk");}
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}

// Constructor

var IncomingResponse = function(header,body) {
	(tink_http_Message().default).call(this,header,body);
}

// Meta

IncomingResponse.__name__ = "tink.http.IncomingResponse";
IncomingResponse.__super__ = (tink_http_Message().default);
IncomingResponse.prototype = $extend((tink_http_Message().default).prototype, {
	
});
IncomingResponse.prototype.__class__ = IncomingResponse.prototype.constructor = $hxClasses["tink.http.IncomingResponse"] = IncomingResponse;

// Init



// Statics

IncomingResponse.readAll = function(res) {
	return (tink_core__$Promise_Promise_$Impl_$().default).next((tink_io_RealSourceTools().default).all(res.body),function(b) {
		if(res.header.statusCode >= 400) {
			return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Failure((tink_core_TypedError().default).withData(res.header.statusCode,res.header.reason,b.toString(),{ fileName : "tink/http/Response.hx", lineNumber : 115, className : "tink.http.IncomingResponse", methodName : "readAll"}))));
		} else {
			return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Success(b)));
		}
	});
}
IncomingResponse.reportError = function(e) {
	var statusCode = e.code;
	var reason = (httpstatus__$HttpStatusMessage_HttpStatusMessage_$Impl_$().default).fromCode(e.code);
	var this1 = "Content-Type".toLowerCase();
	var this2 = new (tink_http_ResponseHeaderBase().default)(statusCode,reason,[new (tink_http_HeaderField().default)(this1,"application/json")],"HTTP/1.1");
	return new IncomingResponse(this2,new (tink_streams_Single().default)(new (tink_core__$Lazy_LazyConst().default)((tink_chunk_ByteChunk().default).of((haxe_io_Bytes().default).ofString(JSON.stringify({ error : e.message, details : e.data}))))));
}


// Export

exports.default = IncomingResponse;