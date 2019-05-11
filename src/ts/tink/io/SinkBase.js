// Class: tink.io.SinkBase

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function tink_io_SinkObject() {return require("./../../tink/io/SinkObject");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}

// Constructor

var SinkBase = function(){}

// Meta

SinkBase.__name__ = "tink.io.SinkBase";
SinkBase.__interfaces__ = [(tink_io_SinkObject().default)];
SinkBase.prototype = {
	get_sealed: function() {
		return true;
	},
	consume: function(source,options) {
		throw new (js__$Boot_HaxeError().default)("not implemented");
	}
};
SinkBase.prototype.__class__ = SinkBase.prototype.constructor = $hxClasses["tink.io.SinkBase"] = SinkBase;

// Init



// Statics




// Export

exports.default = SinkBase;