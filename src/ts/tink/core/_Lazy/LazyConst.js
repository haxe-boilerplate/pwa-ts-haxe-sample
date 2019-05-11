// Class: tink.core._Lazy.LazyConst

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function tink_core__$Lazy_LazyObject() {return require("./../../../tink/core/_Lazy/LazyObject");}
function tink_core__$Lazy_LazyFunc() {return require("./../../../tink/core/_Lazy/LazyFunc");}

// Constructor

var LazyConst = function(value) {
	this.value = value;
}

// Meta

LazyConst.__name__ = "tink.core._Lazy.LazyConst";
LazyConst.__interfaces__ = [(tink_core__$Lazy_LazyObject().default)];
LazyConst.prototype = {
	get: function() {
		return this.value;
	},
	map: function(f) {
		var _gthis = this;
		return new (tink_core__$Lazy_LazyFunc().default)(function() {
			return f(_gthis.value);
		});
	},
	flatMap: function(f) {
		var _gthis = this;
		return new (tink_core__$Lazy_LazyFunc().default)(function() {
			return f(_gthis.value).get();
		});
	}
};
LazyConst.prototype.__class__ = LazyConst.prototype.constructor = $hxClasses["tink.core._Lazy.LazyConst"] = LazyConst;

// Init



// Statics




// Export

exports.default = LazyConst;