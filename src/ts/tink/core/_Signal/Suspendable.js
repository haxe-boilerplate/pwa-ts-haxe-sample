// Class: tink.core._Signal.Suspendable

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
var $bind = require("./../../../bind_stub").default;
function tink_core_SignalObject() {return require("./../../../tink/core/SignalObject");}
function tink_core__$Callback_CallbackList_$Impl_$() {return require("./../../../tink/core/_Callback/CallbackList_Impl_");}
function tink_core__$Callback_SimpleLink() {return require("./../../../tink/core/_Callback/SimpleLink");}
function tink_core__$Callback_LinkPair() {return require("./../../../tink/core/_Callback/LinkPair");}
function tink_core_SignalTrigger() {return require("./../../../tink/core/SignalTrigger");}

// Constructor

var Suspendable = function(activate) {
	this.killed = false;
	this.trigger = new (tink_core_SignalTrigger().default)();
	this.activate = activate;
}

// Meta

Suspendable.__name__ = "tink.core._Signal.Suspendable";
Suspendable.__interfaces__ = [(tink_core_SignalObject().default)];
Suspendable.prototype = {
	kill: function() {
		if(!this.killed) {
			this.killed = true;
			this.trigger = null;
		}
	},
	handle: function(cb) {
		var _gthis = this;
		if(this.killed) {
			return null;
		}
		if(this.trigger.handlers.length == 0) {
			this.suspend = this.activate(($_=this.trigger,$bind($_,$_.trigger)));
		}
		var a = (tink_core__$Callback_CallbackList_$Impl_$().default).add(this.trigger.handlers,cb);
		var this1 = new (tink_core__$Callback_SimpleLink().default)(function() {
			if(_gthis.trigger.handlers.length == 0) {
				_gthis.suspend();
				_gthis.suspend = null;
			}
		});
		return new (tink_core__$Callback_LinkPair().default)(a,this1);
	}
};
Suspendable.prototype.__class__ = Suspendable.prototype.constructor = $hxClasses["tink.core._Signal.Suspendable"] = Suspendable;

// Init



// Statics




// Export

exports.default = Suspendable;