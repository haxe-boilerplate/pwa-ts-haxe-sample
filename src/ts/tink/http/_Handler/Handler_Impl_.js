// Class: tink.http._Handler.Handler_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function tink_http_SimpleHandler() {return require("./../../../tink/http/SimpleHandler");}

// Constructor

var Handler_Impl_ = function(){}

// Meta

Handler_Impl_.__name__ = "tink.http._Handler.Handler_Impl_";
Handler_Impl_.prototype = {
	
};
Handler_Impl_.prototype.__class__ = Handler_Impl_.prototype.constructor = $hxClasses["tink.http._Handler.Handler_Impl_"] = Handler_Impl_;

// Init



// Statics

Handler_Impl_.ofFunc = function(f) {
	return new (tink_http_SimpleHandler().default)(f);
}


// Export

exports.default = Handler_Impl_;