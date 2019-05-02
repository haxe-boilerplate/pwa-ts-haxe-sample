// Class: tink.core._Future.LazyTrigger

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
var $bind = require("./../../../bind_stub").default;
var $extend = require("./../../../extend_stub").default;
function tink_core_FutureTrigger() {return require("./../../../tink/core/FutureTrigger");}
function tink_core__$Callback_Callback_$Impl_$() {return require("./../../../tink/core/_Callback/Callback_Impl_");}
function tink_core__$Future_Future_$Impl_$() {return require("./../../../tink/core/_Future/Future_Impl_");}

// Constructor

var LazyTrigger = function(op) {
	this.op = op;
	(tink_core_FutureTrigger().default).call(this);
}

// Meta

LazyTrigger.__name__ = ["tink","core","_Future","LazyTrigger"];
LazyTrigger.__super__ = (tink_core_FutureTrigger().default);
LazyTrigger.prototype = $extend((tink_core_FutureTrigger().default).prototype, {
	eager: function() {
		if(this.op != null) {
			var op = this.op;
			this.op = null;
			(tink_core__$Callback_Callback_$Impl_$().default).invoke(op,$bind(this,this.trigger));
		}
		return this;
	},
	map: function(f) {
		var _gthis = this;
		if(this.op == null) {
			return (tink_core_FutureTrigger().default).prototype.map.call(this,f);
		} else {
			return (tink_core__$Future_Future_$Impl_$().default).async(function(cb) {
				_gthis.handle(function(v) {
					var tmp = f(v);
					cb(tmp);
				});
			},true);
		}
	},
	flatMap: function(f) {
		var _gthis = this;
		if(this.op == null) {
			return (tink_core_FutureTrigger().default).prototype.flatMap.call(this,f);
		} else {
			return (tink_core__$Future_Future_$Impl_$().default).async(function(cb) {
				_gthis.handle(function(v) {
					f(v).handle(cb);
				});
			},true);
		}
	},
	handle: function(cb) {
		this.eager();
		return (tink_core_FutureTrigger().default).prototype.handle.call(this,cb);
	}
});
LazyTrigger.prototype.__class__ = LazyTrigger.prototype.constructor = $hxClasses["tink.core._Future.LazyTrigger"] = LazyTrigger;

// Init



// Statics




// Export

exports.default = LazyTrigger;