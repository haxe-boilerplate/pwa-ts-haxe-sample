// Class: tink.http.clients.StdClient

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function tink_http_ClientObject() {return require("./../../../tink/http/ClientObject");}
function tink_core__$Future_Future_$Impl_$() {return require("./../../../tink/core/_Future/Future_Impl_");}
function haxe_http_HttpNodeJs() {return require("./../../../haxe/http/HttpNodeJs");}
function tink__$Url_Url_$Impl_$() {return require("./../../../tink/_Url/Url_Impl_");}
function tink_io__$Worker_Worker_$Impl_$() {return require("./../../../tink/io/_Worker/Worker_Impl_");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}
function tink_core__$Callback_Callback_$Impl_$() {return require("./../../../tink/core/_Callback/Callback_Impl_");}
function tink_core_Outcome() {return require("./../../../tink/core/Outcome");}
function tink_core_TypedError() {return require("./../../../tink/core/TypedError");}
function tink_http_ResponseHeaderBase() {return require("./../../../tink/http/ResponseHeaderBase");}
function tink_http_IncomingResponse() {return require("./../../../tink/http/IncomingResponse");}
function tink_streams_Single() {return require("./../../../tink/streams/Single");}
function tink_chunk_ByteChunk() {return require("./../../../tink/chunk/ByteChunk");}
function haxe_io_Bytes() {return require("./../../../haxe/io/Bytes");}
function tink_core__$Lazy_LazyFunc() {return require("./../../../tink/core/_Lazy/LazyFunc");}
function HxOverrides() {return require("./../../../HxOverrides");}
function tink_io_IdealSourceTools() {return require("./../../../tink/io/IdealSourceTools");}

// Constructor

var StdClient = function(worker) {
	this.worker = (tink_io__$Worker_Worker_$Impl_$().default).ensure(worker);
}

// Meta

StdClient.__name__ = "tink.http.clients.StdClient";
StdClient.__interfaces__ = [(tink_http_ClientObject().default)];
StdClient.prototype = {
	request: function(req) {
		var _gthis = this;
		return (tink_core__$Future_Future_$Impl_$().default).async(function(cb) {
			var r = new (haxe_http_HttpNodeJs().default)((tink__$Url_Url_$Impl_$().default).toString(req.header.url));
			var send = function(post) {
				var code = 200;
				r.onStatus = function(c) {
					code = c;
				};
				var headers = function() {
					return [];
				};
				r.onError = function(msg) {
					if(code == 200) {
						code = 500;
					}
					(tink_io__$Worker_Worker_$Impl_$().default).work(_gthis.worker,new (tink_core__$Lazy_LazyConst().default)(true)).handle((tink_core__$Callback_Callback_$Impl_$().default).fromNiladic(function() {
						var send1 = (tink_core_Outcome().default).Failure(new (tink_core_TypedError().default)(code,msg,{ fileName : "tink/http/clients/StdClient.hx", lineNumber : 44, className : "tink.http.clients.StdClient", methodName : "request"}));
						cb(send1);
					}));
				};
				r.onData = function(data) {
					(tink_io__$Worker_Worker_$Impl_$().default).work(_gthis.worker,new (tink_core__$Lazy_LazyConst().default)(true)).handle((tink_core__$Callback_Callback_$Impl_$().default).fromNiladic(function() {
						var fields = headers();
						var this1 = new (tink_http_ResponseHeaderBase().default)(code,"OK",fields,"HTTP/1.1");
						var send2 = (tink_core_Outcome().default).Success(new (tink_http_IncomingResponse().default)(this1,new (tink_streams_Single().default)(new (tink_core__$Lazy_LazyConst().default)((tink_chunk_ByteChunk().default).of((haxe_io_Bytes().default).ofString(data))))));
						cb(send2);
					}));
				};
				(tink_io__$Worker_Worker_$Impl_$().default).work(_gthis.worker,new (tink_core__$Lazy_LazyFunc().default)(function() {
					r.request(post);
				}));
			};
			var h = (HxOverrides().default).iter(req.header.fields);
			while(h.hasNext()) {
				var h1 = h.next();
				r.setHeader(h1.name,h1.value);
			}
			switch(req.header.method) {
			case "GET":case "HEAD":case "OPTIONS":
				send(false);
				break;
			default:
				(tink_io_IdealSourceTools().default).all(req.body).handle(function(bytes) {
					var tmp = bytes.toString();
					r.setPostData(tmp);
					send(true);
				});
			}
		});
	}
};
StdClient.prototype.__class__ = StdClient.prototype.constructor = $hxClasses["tink.http.clients.StdClient"] = StdClient;

// Init



// Statics




// Export

exports.default = StdClient;