// Class: tink.core.JsPromiseTools

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function tink_core__$Future_Future_$Impl_$() {return require("./../../tink/core/_Future/Future_Impl_");}

// Constructor

var JsPromiseTools = function(){}

// Meta

JsPromiseTools.__name__ = ["tink","core","JsPromiseTools"];
JsPromiseTools.prototype = {
	
};
JsPromiseTools.prototype.__class__ = JsPromiseTools.prototype.constructor = $hxClasses["tink.core.JsPromiseTools"] = JsPromiseTools;

// Init



// Statics

JsPromiseTools.toSurprise = function(promise) {
	return (tink_core__$Future_Future_$Impl_$().default).ofJsPromise(promise);
}
JsPromiseTools.toPromise = function(promise) {
	return (tink_core__$Future_Future_$Impl_$().default).ofJsPromise(promise);
}


// Export

exports.default = JsPromiseTools;