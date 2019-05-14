// Class: tink.web.proxy.Remote0

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
var $bind = require("./../../../bind_stub").default;
var $extend = require("./../../../extend_stub").default;
function tink_web_proxy_RemoteBase() {return require("./../../../tink/web/proxy/RemoteBase");}
function tink_chunk_ByteChunk() {return require("./../../../tink/chunk/ByteChunk");}
function haxe_io_Bytes() {return require("./../../../haxe/io/Bytes");}
function tink_web_proxy__$Remote_RemoteEndpoint_$Impl_$() {return require("./../../../tink/web/proxy/_Remote/RemoteEndpoint_Impl_");}
function tink_streams_Single() {return require("./../../../tink/streams/Single");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}
function tink_web_proxy__$Remote_ResponseReader_$Impl_$() {return require("./../../../tink/web/proxy/_Remote/ResponseReader_Impl_");}
function tink_json_Parser0() {return require("./../../../tink/json/Parser0");}

// Constructor

var Remote0 = function(client,endpoint) {
	(tink_web_proxy_RemoteBase().default).call(this,client,endpoint);
}

// Meta

Remote0.__name__ = "tink.web.proxy.Remote0";
Remote0.__super__ = (tink_web_proxy_RemoteBase().default);
Remote0.prototype = $extend((tink_web_proxy_RemoteBase().default).prototype, {
	json: function() {
		var __body__ = (tink_chunk_ByteChunk().default).of((haxe_io_Bytes().default).ofString(""));
		var this1 = "tink_api";
		return (tink_web_proxy__$Remote_RemoteEndpoint_$Impl_$().default).request((tink_web_proxy__$Remote_RemoteEndpoint_$Impl_$().default).sub(this.endpoint,{ path : [this1], query : [], headers : null}),this.client,"GET",new (tink_streams_Single().default)(new (tink_core__$Lazy_LazyConst().default)(__body__)),(tink_web_proxy__$Remote_ResponseReader_$Impl_$().default).ofStringReader(($_=new (tink_json_Parser0().default)(),$bind($_,$_.tryParse))));
	}
});
Remote0.prototype.__class__ = Remote0.prototype.constructor = $hxClasses["tink.web.proxy.Remote0"] = Remote0;

// Init



// Statics




// Export

exports.default = Remote0;