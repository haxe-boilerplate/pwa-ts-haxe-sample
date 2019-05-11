// Class: tink.core._Future.NeverFuture

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function tink_core__$Future_FutureObject() {return require("./../../../tink/core/_Future/FutureObject");}

// Constructor

var NeverFuture = function() {
}

// Meta

NeverFuture.__name__ = "tink.core._Future.NeverFuture";
NeverFuture.__interfaces__ = [(tink_core__$Future_FutureObject().default)];
NeverFuture.prototype = {
	map: function(f) {
		return NeverFuture.inst;
	},
	flatMap: function(f) {
		return NeverFuture.inst;
	},
	handle: function(callback) {
		return null;
	},
	gather: function() {
		return NeverFuture.inst;
	},
	eager: function() {
		return NeverFuture.inst;
	}
};
NeverFuture.prototype.__class__ = NeverFuture.prototype.constructor = $hxClasses["tink.core._Future.NeverFuture"] = NeverFuture;

// Init



// Statics


NeverFuture.inst = new NeverFuture()

// Export

exports.default = NeverFuture;