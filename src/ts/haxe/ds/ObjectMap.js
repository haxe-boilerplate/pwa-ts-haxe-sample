// Class: haxe.ds.ObjectMap

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function haxe_IMap() {return require("./../../haxe/IMap");}
function HxOverrides() {return require("./../../HxOverrides");}

// Constructor

var ObjectMap = function() {
	this.h = { __keys__ : { }};
}

// Meta

ObjectMap.__name__ = "haxe.ds.ObjectMap";
ObjectMap.__interfaces__ = [(haxe_IMap().default)];
ObjectMap.prototype = {
	get: function(key) {
		return this.h[key.__id__];
	},
	exists: function(key) {
		return this.h.__keys__[key.__id__] != null;
	},
	keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) {
			a.push(this.h.__keys__[key]);
		}
		}
		return (HxOverrides().default).iter(a);
	},
	iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i.__id__];
		}};
	}
};
ObjectMap.prototype.__class__ = ObjectMap.prototype.constructor = $hxClasses["haxe.ds.ObjectMap"] = ObjectMap;

// Init

ObjectMap.count = 0;

// Statics




// Export

exports.default = ObjectMap;