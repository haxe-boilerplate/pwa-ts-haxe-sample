// Class: tink.core._Callback.LinkPair

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
function tink_core__$Callback_LinkObject() {return require("./../../../tink/core/_Callback/LinkObject");}

// Constructor

var LinkPair = function(a,b) {
	this.dissolved = false;
	this.a = a;
	this.b = b;
}

// Meta

LinkPair.__name__ = ["tink","core","_Callback","LinkPair"];
LinkPair.__interfaces__ = [(tink_core__$Callback_LinkObject().default)];
LinkPair.prototype = {
	cancel: function() {
		if(!this.dissolved) {
			this.dissolved = true;
			var this1 = this.a;
			if(this1 != null) {
				this1.cancel();
			}
			var this2 = this.b;
			if(this2 != null) {
				this2.cancel();
			}
			this.a = null;
			this.b = null;
		}
	}
};
LinkPair.prototype.__class__ = LinkPair.prototype.constructor = $hxClasses["tink.core._Callback.LinkPair"] = LinkPair;

// Init



// Statics




// Export

exports.default = LinkPair;