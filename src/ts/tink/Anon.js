// Class: tink.Anon

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
var $hxEnums = require("./../hxEnums_stub").default;
var $import = require("./../import_stub").default;
function Reflect() {return require("./../Reflect");}

// Constructor

var Anon = function(){}

// Meta

Anon.__name__ = "tink.Anon";
Anon.prototype = {
	
};
Anon.prototype.__class__ = Anon.prototype.constructor = $hxClasses["tink.Anon"] = Anon;

// Init



// Statics

Anon.getExistentFields = function(o) {
	var ret = { };
	var _g = 0;
	var _g1 = (Reflect().default).fields(o);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		ret[f] = true;
	}
	return ret;
}


// Export

exports.default = Anon;