// Class: tink.core._Future.NestedFuture

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
function tink_core__$Future_FutureObject() {return require("./../../../tink/core/_Future/FutureObject");}
function tink_core_FutureTrigger() {return require("./../../../tink/core/FutureTrigger");}
function tink_core__$Callback_Callback_$Impl_$() {return require("./../../../tink/core/_Callback/Callback_Impl_");}

// Constructor

var NestedFuture = function(outer) {
	this.outer = outer;
}

// Meta

NestedFuture.__name__ = ["tink","core","_Future","NestedFuture"];
NestedFuture.__interfaces__ = [(tink_core__$Future_FutureObject().default)];
NestedFuture.prototype = {
	map: function(f) {
		var ret = this.outer.flatMap(function(inner) {
			var ret1 = inner.map(f);
			return ret1.gather();
		});
		return ret.gather();
	},
	flatMap: function(f) {
		var ret = this.outer.flatMap(function(inner) {
			var ret1 = inner.flatMap(f);
			return ret1.gather();
		});
		return ret.gather();
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
	},
	handle: function(cb) {
		var ret = null;
		ret = this.outer.handle(function(inner) {
			ret = inner.handle(function(result) {
				(tink_core__$Callback_Callback_$Impl_$().default).invoke(cb,result);
			});
		});
		return ret;
	}
};
NestedFuture.prototype.__class__ = NestedFuture.prototype.constructor = $hxClasses["tink.core._Future.NestedFuture"] = NestedFuture;

// Init



// Statics




// Export

exports.default = NestedFuture;