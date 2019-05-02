// Class: tink.core.SignalTrigger

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function tink_core_SignalObject() {return require("./../../tink/core/SignalObject");}
function tink_core__$Callback_CallbackList_$Impl_$() {return require("./../../tink/core/_Callback/CallbackList_Impl_");}

// Constructor

var SignalTrigger = function() {
	this.handlers = [];
}

// Meta

SignalTrigger.__name__ = ["tink","core","SignalTrigger"];
SignalTrigger.__interfaces__ = [(tink_core_SignalObject().default)];
SignalTrigger.prototype = {
	trigger: function(event) {
		(tink_core__$Callback_CallbackList_$Impl_$().default).invoke(this.handlers,event);
	},
	getLength: function() {
		return this.handlers.length;
	},
	handle: function(cb) {
		return (tink_core__$Callback_CallbackList_$Impl_$().default).add(this.handlers,cb);
	},
	clear: function() {
		(tink_core__$Callback_CallbackList_$Impl_$().default).clear(this.handlers);
	},
	asSignal: function() {
		return this;
	}
};
SignalTrigger.prototype.__class__ = SignalTrigger.prototype.constructor = $hxClasses["tink.core.SignalTrigger"] = SignalTrigger;

// Init



// Statics




// Export

exports.default = SignalTrigger;