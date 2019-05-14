// Class: tink.web.proxy._Remote.QueryParams_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function tink_core_NamedWith() {return require("./../../../../tink/core/NamedWith");}
function tink_url__$Portion_Portion_$Impl_$() {return require("./../../../../tink/url/_Portion/Portion_Impl_");}

// Constructor

var QueryParams_Impl_ = function(){}

// Meta

QueryParams_Impl_.__name__ = "tink.web.proxy._Remote.QueryParams_Impl_";
QueryParams_Impl_.prototype = {
	
};
QueryParams_Impl_.prototype.__class__ = QueryParams_Impl_.prototype.constructor = $hxClasses["tink.web.proxy._Remote.QueryParams_Impl_"] = QueryParams_Impl_;

// Init



// Statics

QueryParams_Impl_._new = function() {
	var this1 = [];
	return this1;
}
QueryParams_Impl_.add = function(this1,name,value) {
	this1.push(new (tink_core_NamedWith().default)((tink_url__$Portion_Portion_$Impl_$().default).ofString(name),(tink_url__$Portion_Portion_$Impl_$().default).ofString(value)));
	return this1;
}
QueryParams_Impl_.flush = function(this1) {
	return this1;
}
QueryParams_Impl_.toString = function(this1) {
	if(this1 == null) {
		return "";
	} else if(this1.length == 0) {
		return "";
	} else {
		var this2 = [];
		var ret = this2;
		var _g = 0;
		while(_g < this1.length) {
			var p = this1[_g];
			++_g;
			ret.push(p.name + "=" + p.value);
		}
		return "?" + ret.join("&");
	}
}


// Export

exports.default = QueryParams_Impl_;