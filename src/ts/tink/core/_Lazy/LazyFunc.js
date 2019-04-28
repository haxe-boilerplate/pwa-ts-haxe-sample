// Class: tink.core._Lazy.LazyFunc

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
function tink_core__$Lazy_LazyObject() {return require("./../../../tink/core/_Lazy/LazyObject");}

// Constructor

var LazyFunc = function(f) {
	this.f = f;
}

// Meta

LazyFunc.__name__ = ["tink","core","_Lazy","LazyFunc"];
LazyFunc.__interfaces__ = [(tink_core__$Lazy_LazyObject().default)];
LazyFunc.prototype = {
	get: function() {
		if(this.f != null) {
			this.result = this.f();
			this.f = null;
		}
		return this.result;
	},
	map: function(f) {
		var _gthis = this;
		return new LazyFunc(function() {
			var tmp = _gthis.get();
			return f(tmp);
		});
	},
	flatMap: function(f) {
		var _gthis = this;
		return new LazyFunc(function() {
			var this1 = _gthis.get();
			return f(this1).get();
		});
	}
};
LazyFunc.prototype.__class__ = LazyFunc.prototype.constructor = $hxClasses["tink.core._Lazy.LazyFunc"] = LazyFunc;

// Init



// Statics




// Export

exports.default = LazyFunc;