// Class: haxe.ds.EnumValueMap

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function haxe_IMap() {return require("./../../haxe/IMap");}
function haxe_ds_BalancedTree() {return require("./../../haxe/ds/BalancedTree");}
function Type() {return require("./../../Type");}
function Reflect() {return require("./../../Reflect");}

// Constructor

var EnumValueMap = function() {
	(haxe_ds_BalancedTree().default).call(this);
}

// Meta

EnumValueMap.__name__ = "haxe.ds.EnumValueMap";
EnumValueMap.__interfaces__ = [(haxe_IMap().default)];
EnumValueMap.__super__ = (haxe_ds_BalancedTree().default);
EnumValueMap.prototype = $extend((haxe_ds_BalancedTree().default).prototype, {
	compare: function(k1,k2) {
		var d = k1._hx_index - k2._hx_index;
		if(d != 0) {
			return d;
		}
		var p1 = (Type().default).enumParameters(k1);
		var p2 = (Type().default).enumParameters(k2);
		if(p1.length == 0 && p2.length == 0) {
			return 0;
		}
		return this.compareArgs(p1,p2);
	},
	compareArgs: function(a1,a2) {
		var ld = a1.length - a2.length;
		if(ld != 0) {
			return ld;
		}
		var _g = 0;
		var _g1 = a1.length;
		while(_g < _g1) {
			var i = _g++;
			var d = this.compareArg(a1[i],a2[i]);
			if(d != 0) {
				return d;
			}
		}
		return 0;
	},
	compareArg: function(v1,v2) {
		if((Reflect().default).isEnumValue(v1) && (Reflect().default).isEnumValue(v2)) {
			return this.compare(v1,v2);
		} else if(((v1) instanceof Array) && v1.__enum__ == null && (((v2) instanceof Array) && v2.__enum__ == null)) {
			return this.compareArgs(v1,v2);
		} else {
			return (Reflect().default).compare(v1,v2);
		}
	}
});
EnumValueMap.prototype.__class__ = EnumValueMap.prototype.constructor = $hxClasses["haxe.ds.EnumValueMap"] = EnumValueMap;

// Init



// Statics




// Export

exports.default = EnumValueMap;