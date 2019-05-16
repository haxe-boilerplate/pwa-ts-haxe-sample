// Class: client.Client

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
var $hxEnums = require("./../hxEnums_stub").default;
var $import = require("./../import_stub").default;
function tink_url__$Host_Host_$Impl_$() {return require("./../tink/url/_Host/Host_Impl_");}
function tink_web_proxy_Remote0() {return require("./../tink/web/proxy/Remote0");}
function tink_http_clients_NodeClient() {return require("./../tink/http/clients/NodeClient");}
function tink_web_proxy__$Remote_RemoteEndpoint_$Impl_$() {return require("./../tink/web/proxy/_Remote/RemoteEndpoint_Impl_");}

// Constructor

var Client = function(){}

// Meta

Client.__name__ = "client.Client";
Client.prototype = {
	
};
Client.prototype.__class__ = Client.prototype.constructor = $hxClasses["client.Client"] = Client;

// Init



// Statics

Client.call = function() {
	var remote = new (tink_web_proxy_Remote0().default)(new (tink_http_clients_NodeClient().default)(),(tink_web_proxy__$Remote_RemoteEndpoint_$Impl_$().default)._new((tink_url__$Host_Host_$Impl_$().default)._new("localhost",3000)));
	return remote.json();
}
Client.HOST = (tink_url__$Host_Host_$Impl_$().default)._new("localhost")

// Export

exports.default = Client;