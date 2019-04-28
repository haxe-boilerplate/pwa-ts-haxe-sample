// Class: Reflect

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./hxClasses_stub").default;
var $import = require("./import_stub").default;
function js__$Boot_HaxeError() {return require("./js/_Boot/HaxeError");}

// Constructor

var Reflect = function(){}

// Meta

Reflect.__name__ = ["Reflect"];
Reflect.prototype = {
	
};
Reflect.prototype.__class__ = Reflect.prototype.constructor = $hxClasses["Reflect"] = Reflect;

// Init



// Statics

Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		var e1 = ((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e;
		return null;
	}
}
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) {
			a.push(f);
		}
		}
	}
	return a;
}
Reflect.copy = function(o) {
	var o2 = { };
	var _g = 0;
	var _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		o2[f] = Reflect.field(o,f);
	}
	return o2;
}


// Export

exports.default = Reflect;