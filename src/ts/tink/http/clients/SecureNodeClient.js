// Class: tink.http.clients.SecureNodeClient

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
var $extend = require("./../../../extend_stub").default;
function tink_http_clients_NodeClient() {return require("./../../../tink/http/clients/NodeClient");}
function tink_url__$Host_Host_$Impl_$() {return require("./../../../tink/url/_Host/Host_Impl_");}
function HxOverrides() {return require("./../../../HxOverrides");}
function js_node_Https() {return require("https");}

// Constructor

var SecureNodeClient = function() {
	(tink_http_clients_NodeClient().default).call(this);
}

// Meta

SecureNodeClient.__name__ = "tink.http.clients.SecureNodeClient";
SecureNodeClient.__super__ = (tink_http_clients_NodeClient().default);
SecureNodeClient.prototype = $extend((tink_http_clients_NodeClient().default).prototype, {
	request: function(req) {
		var req1 = req.header.method;
		var this1 = req.header.url;
		var options = this1.query == null ? this1.path : this1.path + "?" + this1.query;
		var options1 = (tink_url__$Host_Host_$Impl_$().default).get_name(req.header.url.host);
		var options2 = (tink_url__$Host_Host_$Impl_$().default).get_port(req.header.url.host);
		var this2 = { };
		var map = this2;
		var h = (HxOverrides().default).iter(req.header.fields);
		while(h.hasNext()) {
			var h1 = h.next();
			map[h1.name] = h1.value;
		}
		var options3 = { method : req1, path : options, host : options1, port : options2, headers : map, agent : false};
		return this.nodeRequest((js_node_Https()),options3,req);
	}
});
SecureNodeClient.prototype.__class__ = SecureNodeClient.prototype.constructor = $hxClasses["tink.http.clients.SecureNodeClient"] = SecureNodeClient;

// Init



// Statics




// Export

exports.default = SecureNodeClient;