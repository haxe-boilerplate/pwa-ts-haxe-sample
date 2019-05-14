// Class: Type

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./hxClasses_stub").default;
var $hxEnums = require("./hxEnums_stub").default;

// Constructor

var Type = function(){}

// Meta

Type.__name__ = "Type";
Type.prototype = {
	
};
Type.prototype.__class__ = Type.prototype.constructor = $hxClasses["Type"] = Type;

// Init



// Statics

Type.enumParameters = function(e) {
	var enm = $hxEnums[e.__enum__];
	var ctorName = enm.__constructs__[e._hx_index];
	var params = enm[ctorName].__params__;
	if(params != null) {
		var _g = [];
		var _g1 = 0;
		while(_g1 < params.length) {
			var p = params[_g1];
			++_g1;
			_g.push(e[p]);
		}
		return _g;
	} else {
		return [];
	}
}


// Export

exports.default = Type;