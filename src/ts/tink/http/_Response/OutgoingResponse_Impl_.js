// Class: tink.http._Response.OutgoingResponse_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
function tink_http__$Response_OutgoingResponseData() {return require("./../../../tink/http/_Response/OutgoingResponseData");}
function httpstatus__$HttpStatusMessage_HttpStatusMessage_$Impl_$() {return require("./../../../httpstatus/_HttpStatusMessage/HttpStatusMessage_Impl_");}
function tink_http_HeaderField() {return require("./../../../tink/http/HeaderField");}
function Std() {return require("./../../../Std");}
function tink_http_ResponseHeaderBase() {return require("./../../../tink/http/ResponseHeaderBase");}
function tink_streams_Single() {return require("./../../../tink/streams/Single");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}
function tink_chunk_ByteChunk() {return require("./../../../tink/chunk/ByteChunk");}
function haxe_io_Bytes() {return require("./../../../haxe/io/Bytes");}

// Constructor

var OutgoingResponse_Impl_ = function(){}

// Meta

OutgoingResponse_Impl_.__name__ = ["tink","http","_Response","OutgoingResponse_Impl_"];
OutgoingResponse_Impl_.prototype = {
	
};
OutgoingResponse_Impl_.prototype.__class__ = OutgoingResponse_Impl_.prototype.constructor = $hxClasses["tink.http._Response.OutgoingResponse_Impl_"] = OutgoingResponse_Impl_;

// Init



// Statics

OutgoingResponse_Impl_._new = function(header,body) {
	var this1 = new (tink_http__$Response_OutgoingResponseData().default)(header,body);
	return this1;
}
OutgoingResponse_Impl_.blob = function(code,chunk,contentType,headers) {
	if(code == null) {
		code = 200;
	}
	var this1 = (httpstatus__$HttpStatusMessage_HttpStatusMessage_$Impl_$().default).fromCode(code);
	var this2 = "Content-Type".toLowerCase();
	var fields = new (tink_http_HeaderField().default)(this2,contentType);
	var this3 = "Content-Length".toLowerCase();
	var fields1 = (Std().default).string(chunk.getLength());
	var fields2;
	if(headers == null) {
		fields2 = [];
	} else {
		var v = headers;
		fields2 = v;
	}
	var this4 = new (tink_http_ResponseHeaderBase().default)(code,this1,[fields,new (tink_http_HeaderField().default)(this3,fields1)].concat(fields2),"HTTP/1.1");
	var this5 = new (tink_http__$Response_OutgoingResponseData().default)(this4,new (tink_streams_Single().default)(new (tink_core__$Lazy_LazyConst().default)(chunk)));
	return this5;
}
OutgoingResponse_Impl_.chunked = function(contentType,headers,source) {
}
OutgoingResponse_Impl_.ofString = function(s) {
	return OutgoingResponse_Impl_.blob(null,(tink_chunk_ByteChunk().default).of((haxe_io_Bytes().default).ofString(s)),"text/plain");
}
OutgoingResponse_Impl_.ofChunk = function(c) {
	return OutgoingResponse_Impl_.blob(null,c,"application/octet-stream");
}
OutgoingResponse_Impl_.reportError = function(e) {
	var code = e.code;
	if(code < 100 || code > 999) {
		code = 500;
	}
	var reason = (httpstatus__$HttpStatusMessage_HttpStatusMessage_$Impl_$().default).fromCode(code);
	var this1 = "Content-Type".toLowerCase();
	var this2 = new (tink_http_ResponseHeaderBase().default)(code,reason,[new (tink_http_HeaderField().default)(this1,"application/json")],"HTTP/1.1");
	var this3 = new (tink_http__$Response_OutgoingResponseData().default)(this2,new (tink_streams_Single().default)(new (tink_core__$Lazy_LazyConst().default)((tink_chunk_ByteChunk().default).of((haxe_io_Bytes().default).ofString(JSON.stringify({ error : e.message, details : e.data}))))));
	return this3;
}


// Export

exports.default = OutgoingResponse_Impl_;