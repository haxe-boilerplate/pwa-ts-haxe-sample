// Class: tink.http.IncomingRequest

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
function tink_http_IncomingRequestHeader() {return require("./../../tink/http/IncomingRequestHeader");}
function tink_io__$Source_Source_$Impl_$() {return require("./../../tink/io/_Source/Source_Impl_");}
function StringTools() {return require("./../../StringTools");}
function tink_http_Chunked() {return require("./../../tink/http/Chunked");}
function tink_core__$Future_SyncFuture() {return require("./../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../tink/core/_Lazy/LazyConst");}
function tink_core_Outcome() {return require("./../../tink/core/Outcome");}
function tink_core_TypedError() {return require("./../../tink/core/TypedError");}
function tink_http_IncomingRequestBody() {return require("./../../tink/http/IncomingRequestBody");}

// Constructor

var IncomingRequest = function(clientIp,header,body) {
	this.clientIp = clientIp;
	(tink_http_Message().default).call(this,header,body);
}

// Meta

IncomingRequest.__name__ = "tink.http.IncomingRequest";
IncomingRequest.__super__ = (tink_http_Message().default);
IncomingRequest.prototype = $extend((tink_http_Message().default).prototype, {
	
});
IncomingRequest.prototype.__class__ = IncomingRequest.prototype.constructor = $hxClasses["tink.http.IncomingRequest"] = IncomingRequest;

// Init



// Statics

IncomingRequest.parse = function(clientIp,source) {
	return (tink_core__$Promise_Promise_$Impl_$().default).next((tink_io_RealSourceTools().default).parse(source,(tink_http_IncomingRequestHeader().default).parser()),function(parts) {
		var parts1 = parts.a;
		var _g = parts.a.getContentLength();
		var d;
		switch(_g._hx_index) {
		case 0:
			var len = _g.data;
			d = (tink_io__$Source_Source_$Impl_$().default).limit(parts.b,len);
			break;
		case 1:
			var _g2 = _g.failure;
			var _g1 = parts.a.byName("transfer-encoding");
			switch(parts.a.method) {
			case "GET":case "OPTIONS":
				d = (tink_io__$Source_Source_$Impl_$().default).EMPTY;
				break;
			default:
				if(_g1._hx_index == 0) {
					var encodings = _g1.data.split(",").map((StringTools().default).trim);
					if(encodings.indexOf("chunked") != -1) {
						var source1 = parts.b;
						d = (tink_http_Chunked().default).decoder().transform(source1);
					} else {
						return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Failure(new (tink_core_TypedError().default)(411,"Content-Length header missing",{ fileName : "tink/http/Request.hx", lineNumber : 142, className : "tink.http.IncomingRequest", methodName : "parse"}))));
					}
				} else {
					return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Failure(new (tink_core_TypedError().default)(411,"Content-Length header missing",{ fileName : "tink/http/Request.hx", lineNumber : 142, className : "tink.http.IncomingRequest", methodName : "parse"}))));
				}
			}
			break;
		}
		return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Success(new IncomingRequest(clientIp,parts1,(tink_http_IncomingRequestBody().default).Plain(d)))));
	});
}


// Export

exports.default = IncomingRequest;