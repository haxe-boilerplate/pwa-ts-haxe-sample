// Class: tink.core.Annex

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function haxe_ds_ObjectMap() {return require("./../../haxe/ds/ObjectMap");}

// Constructor

var Annex = function(target) {
	this.target = target;
	this.registry = new (haxe_ds_ObjectMap().default)();
}

// Meta

Annex.__name__ = "tink.core.Annex";
Annex.prototype = {
	
};
Annex.prototype.__class__ = Annex.prototype.constructor = $hxClasses["tink.core.Annex"] = Annex;

// Init



// Statics




// Export

exports.default = Annex;