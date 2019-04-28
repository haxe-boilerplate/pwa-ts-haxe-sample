// Class: tink.core.OptionIter

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;

// Constructor

var OptionIter = function(o) {
	this.alive = true;
	if(o._hx_index == 0) {
		var v = o.v;
		this.value = v;
	} else {
		this.alive = false;
	}
}

// Meta

OptionIter.__name__ = ["tink","core","OptionIter"];
OptionIter.prototype = {
	hasNext: function() {
		return this.alive;
	},
	next: function() {
		this.alive = false;
		return this.value;
	}
};
OptionIter.prototype.__class__ = OptionIter.prototype.constructor = $hxClasses["tink.core.OptionIter"] = OptionIter;

// Init



// Statics




// Export

exports.default = OptionIter;