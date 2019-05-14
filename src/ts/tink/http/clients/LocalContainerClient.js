// Class: tink.http.clients.LocalContainerClient

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function tink_http_ClientObject() {return require("./../../../tink/http/ClientObject");}
function tink_core__$Future_Future_$Impl_$() {return require("./../../../tink/core/_Future/Future_Impl_");}
function tink_http_IncomingRequest() {return require("./../../../tink/http/IncomingRequest");}
function tink_http_IncomingRequestHeader() {return require("./../../../tink/http/IncomingRequestHeader");}
function tink__$Url_Url_$Impl_$() {return require("./../../../tink/_Url/Url_Impl_");}
function tink_http_IncomingRequestBody() {return require("./../../../tink/http/IncomingRequestBody");}
function tink_core__$Future_SyncFuture() {return require("./../../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}
function tink_core_Outcome() {return require("./../../../tink/core/Outcome");}
function tink_http_IncomingResponse() {return require("./../../../tink/http/IncomingResponse");}

// Constructor

var LocalContainerClient = function(container) {
	this.container = container;
}

// Meta

LocalContainerClient.__name__ = "tink.http.clients.LocalContainerClient";
LocalContainerClient.__interfaces__ = [(tink_http_ClientObject().default)];
LocalContainerClient.prototype = {
	request: function(req) {
		var this1 = req.header.url;
		return (tink_core__$Future_Future_$Impl_$().default).next(this.container.serve(new (tink_http_IncomingRequest().default)("127.0.0.1",new (tink_http_IncomingRequestHeader().default)(req.header.method,(tink__$Url_Url_$Impl_$().default).fromString(this1.query == null ? this1.path : this1.path + "?" + this1.query),"HTTP/1.1",req.header.fields),(tink_http_IncomingRequestBody().default).Plain(req.body))),function(res) {
			return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Success(new (tink_http_IncomingResponse().default)(res.header,res.body))));
		});
	}
};
LocalContainerClient.prototype.__class__ = LocalContainerClient.prototype.constructor = $hxClasses["tink.http.clients.LocalContainerClient"] = LocalContainerClient;

// Init



// Statics




// Export

exports.default = LocalContainerClient;