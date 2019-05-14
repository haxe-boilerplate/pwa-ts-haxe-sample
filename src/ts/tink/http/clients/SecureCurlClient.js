// Class: tink.http.clients.SecureCurlClient

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
var $extend = require("./../../../extend_stub").default;
function tink_http_clients_CurlClient() {return require("./../../../tink/http/clients/CurlClient");}

// Constructor

var SecureCurlClient = function(curl) {
	(tink_http_clients_CurlClient().default).call(this,curl);
	this.protocol = "https";
}

// Meta

SecureCurlClient.__name__ = "tink.http.clients.SecureCurlClient";
SecureCurlClient.__super__ = (tink_http_clients_CurlClient().default);
SecureCurlClient.prototype = $extend((tink_http_clients_CurlClient().default).prototype, {
	
});
SecureCurlClient.prototype.__class__ = SecureCurlClient.prototype.constructor = $hxClasses["tink.http.clients.SecureCurlClient"] = SecureCurlClient;

// Init



// Statics




// Export

exports.default = SecureCurlClient;