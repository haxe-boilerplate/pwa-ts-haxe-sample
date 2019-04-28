// Class: tink.web.routing._Response.Response_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $import = require("./../../../../import_stub").default;
function httpstatus__$HttpStatusMessage_HttpStatusMessage_$Impl_$() {return require("./../../../../httpstatus/_HttpStatusMessage/HttpStatusMessage_Impl_");}
function tink_http_ResponseHeaderBase() {return require("./../../../../tink/http/ResponseHeaderBase");}
function tink_http_HeaderField() {return require("./../../../../tink/http/HeaderField");}
function tink__$Url_Url_$Impl_$() {return require("./../../../../tink/_Url/Url_Impl_");}
function tink_http__$Response_OutgoingResponseData() {return require("./../../../../tink/http/_Response/OutgoingResponseData");}
function tink_streams_Single() {return require("./../../../../tink/streams/Single");}
function tink_core__$Lazy_LazyConst() {return require("./../../../../tink/core/_Lazy/LazyConst");}
function tink__$Chunk_Chunk_$Impl_$() {return require("./../../../../tink/_Chunk/Chunk_Impl_");}
function tink_http__$Response_OutgoingResponse_$Impl_$() {return require("./../../../../tink/http/_Response/OutgoingResponse_Impl_");}
function tink_chunk_ByteChunk() {return require("./../../../../tink/chunk/ByteChunk");}
function haxe_io_Bytes() {return require("./../../../../haxe/io/Bytes");}

// Constructor

var Response_Impl_ = function(){}

// Meta

Response_Impl_.__name__ = ["tink","web","routing","_Response","Response_Impl_"];
Response_Impl_.prototype = {
	
};
Response_Impl_.prototype.__class__ = Response_Impl_.prototype.constructor = $hxClasses["tink.web.routing._Response.Response_Impl_"] = Response_Impl_;

// Init



// Statics

Response_Impl_.ofString = function(s) {
	return Response_Impl_.textual(null,"text/plain",s);
}
Response_Impl_.ofBytes = function(b) {
	return Response_Impl_.binary(null,"application/octet-stream",b);
}
Response_Impl_.ofUrl = function(u) {
	var this1 = (httpstatus__$HttpStatusMessage_HttpStatusMessage_$Impl_$().default).fromCode(302);
	var this2 = "location".toLowerCase();
	var this3 = new (tink_http_ResponseHeaderBase().default)(302,this1,[new (tink_http_HeaderField().default)(this2,(tink__$Url_Url_$Impl_$().default).toString(u))],"HTTP/1.1");
	var this4 = new (tink_http__$Response_OutgoingResponseData().default)(this3,new (tink_streams_Single().default)(new (tink_core__$Lazy_LazyConst().default)((tink__$Chunk_Chunk_$Impl_$().default).EMPTY)));
	return this4;
}
Response_Impl_.binary = function(code,contentType,bytes) {
	return (tink_http__$Response_OutgoingResponse_$Impl_$().default).blob(code,(tink_chunk_ByteChunk().default).of(bytes),contentType);
}
Response_Impl_.empty = function(code) {
	if(code == null) {
		code = 200;
	}
	var this1 = (httpstatus__$HttpStatusMessage_HttpStatusMessage_$Impl_$().default).fromCode(code);
	var this2 = new (tink_http_ResponseHeaderBase().default)(code,this1,[new (tink_http_HeaderField().default)("content-length","0")],"HTTP/1.1");
	var this3 = new (tink_http__$Response_OutgoingResponseData().default)(this2,new (tink_streams_Single().default)(new (tink_core__$Lazy_LazyConst().default)((tink__$Chunk_Chunk_$Impl_$().default).EMPTY)));
	return this3;
}
Response_Impl_.textual = function(code,contentType,string) {
	return Response_Impl_.binary(code,contentType,(haxe_io_Bytes().default).ofString(string));
}


// Export

exports.default = Response_Impl_;