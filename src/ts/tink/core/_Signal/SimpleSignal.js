// Class: tink.core._Signal.SimpleSignal

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
function tink_core_SignalObject() {return require("./../../../tink/core/SignalObject");}

// Constructor

var SimpleSignal = function(f) {
	this.f = f;
}

// Meta

SimpleSignal.__name__ = ["tink","core","_Signal","SimpleSignal"];
SimpleSignal.__interfaces__ = [(tink_core_SignalObject().default)];
SimpleSignal.prototype = {
	handle: function(cb) {
		return this.f(cb);
	}
};
SimpleSignal.prototype.__class__ = SimpleSignal.prototype.constructor = $hxClasses["tink.core._Signal.SimpleSignal"] = SimpleSignal;

// Init



// Statics




// Export

exports.default = SimpleSignal;