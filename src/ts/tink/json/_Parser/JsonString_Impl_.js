// Class: tink.json._Parser.JsonString_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function Std() {return require("./../../../Std");}

// Constructor

var JsonString_Impl_ = function(){}

// Meta

JsonString_Impl_.__name__ = "tink.json._Parser.JsonString_Impl_";
JsonString_Impl_.prototype = {
	
};
JsonString_Impl_.prototype.__class__ = JsonString_Impl_.prototype.constructor = $hxClasses["tink.json._Parser.JsonString_Impl_"] = JsonString_Impl_;

// Init



// Statics

JsonString_Impl_.contains = function(this1,s) {
	var _g = this1.source.indexOf(s,this1.min);
	if(_g == -1) {
		return false;
	} else {
		var outside = _g;
		if(outside > this1.max) {
			return false;
		} else {
			var v = _g;
			return true;
		}
	}
}
JsonString_Impl_.toString = function(this1) {
	if(JsonString_Impl_.contains(this1,"\\")) {
		return JSON.parse(this1.source.substring(this1.min - 1,this1.max + 1));
	} else {
		return this1.source.substring(this1.min,this1.max);
	}
}
JsonString_Impl_.get = function(this1) {
	return this1.source.substring(this1.min,this1.max);
}
JsonString_Impl_.toInt = function(this1) {
	return (Std().default).parseInt(this1.source.substring(this1.min,this1.max));
}
JsonString_Impl_.toFloat = function(this1) {
	return parseFloat(this1.source.substring(this1.min,this1.max));
}
JsonString_Impl_.equalsString = function(a,b) {
	if(b.length == a.max - a.min) {
		return a.source.startsWith(b,a.min);
	} else {
		return false;
	}
}


// Export

exports.default = JsonString_Impl_;