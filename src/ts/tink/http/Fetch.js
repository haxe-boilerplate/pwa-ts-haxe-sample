// Class: tink.http.Fetch

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function haxe_ds_EnumValueMap() {return require("./../../haxe/ds/EnumValueMap");}
function tink_core__$Future_Future_$Impl_$() {return require("./../../tink/core/_Future/Future_Impl_");}
function tink_io__$Source_Source_$Impl_$() {return require("./../../tink/io/_Source/Source_Impl_");}
function tink_http_ClientType() {return require("./../../tink/http/ClientType");}
function tink_http_OutgoingRequest() {return require("./../../tink/http/OutgoingRequest");}
function tink_http_OutgoingRequestHeader() {return require("./../../tink/http/OutgoingRequestHeader");}
function tink_core__$Promise_Promise_$Impl_$() {return require("./../../tink/core/_Promise/Promise_Impl_");}
function tink_core__$Future_SyncFuture() {return require("./../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../tink/core/_Lazy/LazyConst");}
function tink__$Url_Url_$Impl_$() {return require("./../../tink/_Url/Url_Impl_");}
function tink_core_Outcome() {return require("./../../tink/core/Outcome");}
function tink_http_clients_SecureNodeClient() {return require("./../../tink/http/clients/SecureNodeClient");}
function tink_http_clients_NodeClient() {return require("./../../tink/http/clients/NodeClient");}
function tink_http_clients_LocalContainerClient() {return require("./../../tink/http/clients/LocalContainerClient");}
function tink_http_clients_SecureCurlClient() {return require("./../../tink/http/clients/SecureCurlClient");}
function tink_http_clients_CurlClient() {return require("./../../tink/http/clients/CurlClient");}
function tink_http_clients_StdClient() {return require("./../../tink/http/clients/StdClient");}

// Constructor

var Fetch = function(){}

// Meta

Fetch.__name__ = "tink.http.Fetch";
Fetch.prototype = {
	
};
Fetch.prototype.__class__ = Fetch.prototype.constructor = $hxClasses["tink.http.Fetch"] = Fetch;

// Init



// Statics

Fetch.fetch = function(url,options) {
	return (tink_core__$Future_Future_$Impl_$().default).async(function(cb) {
		var uri = url.path;
		if(url.query != null) {
			uri += "?" + url.query;
		}
		var method = "GET";
		var headers = null;
		var body = (tink_io__$Source_Source_$Impl_$().default).EMPTY;
		var type = (tink_http_ClientType().default).Default;
		var followRedirect = true;
		if(options != null) {
			if(options.method != null) {
				method = options.method;
			}
			if(options.headers != null) {
				headers = options.headers;
			}
			if(options.body != null) {
				body = options.body;
			}
			if(options.client != null) {
				type = options.client;
			}
			if(options.followRedirect == false) {
				followRedirect = false;
			}
		}
		var client = Fetch.getClient(type,url.scheme == "https");
		client.request(new (tink_http_OutgoingRequest().default)(new (tink_http_OutgoingRequestHeader().default)(method,url,null,headers),body)).handle(function(res) {
			switch(res._hx_index) {
			case 0:
				var res1 = res.data;
				var _g = res1.header.statusCode;
				switch(_g) {
				case 301:case 302:case 303:case 307:case 308:
					var code = _g;
					if(followRedirect) {
						var this1 = "location".toLowerCase();
						(tink_core__$Promise_Promise_$Impl_$().default).next(new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)(res1.header.byName(this1))),function(location) {
							var this2 = (tink__$Url_Url_$Impl_$().default).resolve(url,(tink__$Url_Url_$Impl_$().default).fromString(location));
							var this3;
							if(code == 303) {
								var __ret = { method : "GET"};
								var _g1 = options.body;
								if(_g1 != null) {
									var v = _g1;
									__ret.body = v;
								}
								var _g11 = options.client;
								if(_g11 != null) {
									var v1 = _g11;
									__ret.client = v1;
								}
								var _g2 = options.followRedirect;
								if(_g2 != null) {
									var v2 = _g2;
									__ret.followRedirect = v2;
								}
								var _g3 = options.headers;
								if(_g3 != null) {
									var v3 = _g3;
									__ret.headers = v3;
								}
								this3 = __ret;
							} else {
								this3 = options;
							}
							return Fetch.fetch(this2,this3);
						}).handle(cb);
					} else {
						cb((tink_core_Outcome().default).Success(res1));
					}
					break;
				default:
					cb((tink_core_Outcome().default).Success(res1));
				}
				break;
			case 1:
				var e = res.failure;
				cb((tink_core_Outcome().default).Failure(e));
				break;
			}
		});
	});
}
Fetch.getClient = function(type,secure) {
	var cache = secure ? Fetch.sclient : Fetch.client;
	if(!cache.exists(type)) {
		var c;
		switch(type._hx_index) {
		case 0:
			c = secure ? new (tink_http_clients_SecureNodeClient().default)() : new (tink_http_clients_NodeClient().default)();
			break;
		case 1:
			var c1 = type.container;
			c = new (tink_http_clients_LocalContainerClient().default)(c1);
			break;
		case 2:
			c = secure ? new (tink_http_clients_SecureCurlClient().default)() : new (tink_http_clients_CurlClient().default)();
			break;
		case 3:
			c = secure ? new (tink_http_clients_StdClient().default)() : new (tink_http_clients_StdClient().default)();
			break;
		case 4:
			var c2 = type.v;
			c = c2;
			break;
		}
		cache.set(type,c);
	}
	return cache.get(type);
}
Fetch.client = new (haxe_ds_EnumValueMap().default)()
Fetch.sclient = new (haxe_ds_EnumValueMap().default)()

// Export

exports.default = Fetch;