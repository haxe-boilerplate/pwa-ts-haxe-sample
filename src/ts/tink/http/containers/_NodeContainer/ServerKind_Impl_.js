// Class: tink.http.containers._NodeContainer.ServerKind_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function tink_http_containers__$NodeContainer_ServerKindBase() {return require("./../../../../tink/http/containers/_NodeContainer/ServerKindBase");}

// Constructor

var ServerKind_Impl_ = function(){}

// Meta

ServerKind_Impl_.__name__ = "tink.http.containers._NodeContainer.ServerKind_Impl_";
ServerKind_Impl_.prototype = {
	
};
ServerKind_Impl_.prototype.__class__ = ServerKind_Impl_.prototype.constructor = $hxClasses["tink.http.containers._NodeContainer.ServerKind_Impl_"] = ServerKind_Impl_;

// Init



// Statics

ServerKind_Impl_.fromInstance = function(server) {
	return (tink_http_containers__$NodeContainer_ServerKindBase().default).Instance(server);
}
ServerKind_Impl_.fromPort = function(port) {
	return (tink_http_containers__$NodeContainer_ServerKindBase().default).Port(port);
}
ServerKind_Impl_.fromHost = function(host) {
	return (tink_http_containers__$NodeContainer_ServerKindBase().default).Host(host);
}
ServerKind_Impl_.fromPath = function(path) {
	return (tink_http_containers__$NodeContainer_ServerKindBase().default).Path(path);
}
ServerKind_Impl_.fromFd = function(fd) {
	return (tink_http_containers__$NodeContainer_ServerKindBase().default).Fd(fd);
}


// Export

exports.default = ServerKind_Impl_;