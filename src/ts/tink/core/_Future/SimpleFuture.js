// Class: tink.core._Future.SimpleFuture

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function tink_core__$Future_FutureObject() {return require("./../../../tink/core/_Future/FutureObject");}
function tink_core__$Callback_Callback_$Impl_$() {return require("./../../../tink/core/_Callback/Callback_Impl_");}
function tink_core__$Future_Future_$Impl_$() {return require("./../../../tink/core/_Future/Future_Impl_");}
function tink_core_FutureTrigger() {return require("./../../../tink/core/FutureTrigger");}

// Constructor

var SimpleFuture = function(f) {
	this.f = f;
}

// Meta

SimpleFuture.__name__ = "tink.core._Future.SimpleFuture";
SimpleFuture.__interfaces__ = [(tink_core__$Future_FutureObject().default)];
SimpleFuture.prototype = {
	handle: function(callback) {
		return this.f(callback);
	},
	map: function(f) {
		var _gthis = this;
		return new SimpleFuture(function(cb) {
			return _gthis.f(function(v) {
				var tmp = f(v);
				(tink_core__$Callback_Callback_$Impl_$().default).invoke(cb,tmp);
			});
		});
	},
	flatMap: function(f) {
		var f1 = f;
		var _gthis = this;
		return (tink_core__$Future_Future_$Impl_$().default).flatten(new SimpleFuture(function(cb) {
			return _gthis.f(function(v) {
				var tmp = f1(v);
				(tink_core__$Callback_Callback_$Impl_$().default).invoke(cb,tmp);
			});
		}));
	},
	gather: function() {
		if(this.gathered != null) {
			return this.gathered;
		} else {
			return this.gathered = (tink_core_FutureTrigger().default).gatherFuture(this);
		}
	},
	eager: function() {
		var ret = this.gathered != null ? this.gathered : this.gathered = (tink_core_FutureTrigger().default).gatherFuture(this);
		ret.handle((tink_core__$Callback_Callback_$Impl_$().default).fromNiladic(function() {
		}));
		return ret;
	}
};
SimpleFuture.prototype.__class__ = SimpleFuture.prototype.constructor = $hxClasses["tink.core._Future.SimpleFuture"] = SimpleFuture;

// Init



// Statics




// Export

exports.default = SimpleFuture;