// Class: tink.core._Callback.SimpleLink

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
function tink_core__$Callback_LinkObject() {return require("./../../../tink/core/_Callback/LinkObject");}

// Constructor

var SimpleLink = function(f) {
	this.f = f;
}

// Meta

SimpleLink.__name__ = ["tink","core","_Callback","SimpleLink"];
SimpleLink.__interfaces__ = [(tink_core__$Callback_LinkObject().default)];
SimpleLink.prototype = {
	cancel: function() {
		if(this.f != null) {
			this.f();
			this.f = null;
		}
	}
};
SimpleLink.prototype.__class__ = SimpleLink.prototype.constructor = $hxClasses["tink.core._Callback.SimpleLink"] = SimpleLink;

// Init



// Statics




// Export

exports.default = SimpleLink;