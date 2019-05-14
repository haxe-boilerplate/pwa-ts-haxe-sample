// Class: tink.http._Client.Client_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function tink_http_Fetch() {return require("./../../../tink/http/Fetch");}

// Constructor

var Client_Impl_ = function(){}

// Meta

Client_Impl_.__name__ = "tink.http._Client.Client_Impl_";
Client_Impl_.prototype = {
	
};
Client_Impl_.prototype.__class__ = Client_Impl_.prototype.constructor = $hxClasses["tink.http._Client.Client_Impl_"] = Client_Impl_;

// Init



// Statics

Client_Impl_.fetch = function(url,options) {
	return (tink_http_Fetch().default).fetch(url,options);
}


// Export

exports.default = Client_Impl_;