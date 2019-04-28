// Class: tink.core._Future.SyncFuture

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
function tink_core__$Future_FutureObject() {return require("./../../../tink/core/_Future/FutureObject");}
function tink_core__$Future_SimpleFuture() {return require("./../../../tink/core/_Future/SimpleFuture");}
function tink_core__$Callback_Callback_$Impl_$() {return require("./../../../tink/core/_Callback/Callback_Impl_");}

// Constructor

var SyncFuture = function(value) {
	this.value = value;
}

// Meta

SyncFuture.__name__ = ["tink","core","_Future","SyncFuture"];
SyncFuture.__interfaces__ = [(tink_core__$Future_FutureObject().default)];
SyncFuture.prototype = {
	map: function(f) {
		return new SyncFuture(this.value.map(f));
	},
	flatMap: function(f) {
		var l = this.value.map(f);
		return new (tink_core__$Future_SimpleFuture().default)(function(cb) {
			return l.get().handle(cb);
		});
	},
	handle: function(cb) {
		(tink_core__$Callback_Callback_$Impl_$().default).invoke(cb,this.value.get());
		return null;
	},
	eager: function() {
		return this;
	},
	gather: function() {
		return this;
	}
};
SyncFuture.prototype.__class__ = SyncFuture.prototype.constructor = $hxClasses["tink.core._Future.SyncFuture"] = SyncFuture;

// Init



// Statics




// Export

exports.default = SyncFuture;