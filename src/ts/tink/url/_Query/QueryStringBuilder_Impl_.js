// Class: tink.url._Query.QueryStringBuilder_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;

// Constructor

var QueryStringBuilder_Impl_ = function(){}

// Meta

QueryStringBuilder_Impl_.__name__ = "tink.url._Query.QueryStringBuilder_Impl_";
QueryStringBuilder_Impl_.prototype = {
	
};
QueryStringBuilder_Impl_.prototype.__class__ = QueryStringBuilder_Impl_.prototype.constructor = $hxClasses["tink.url._Query.QueryStringBuilder_Impl_"] = QueryStringBuilder_Impl_;

// Init



// Statics

QueryStringBuilder_Impl_._new = function() {
	var this1 = [];
	return this1;
}
QueryStringBuilder_Impl_.add = function(this1,name,value) {
	this1.push(name + "=" + value);
	return this1;
}
QueryStringBuilder_Impl_.toString = function(this1,sep) {
	if(sep == null) {
		sep = "&";
	}
	return this1.join(sep);
}
QueryStringBuilder_Impl_.copy = function(this1) {
	return this1.slice();
}


// Export

exports.default = QueryStringBuilder_Impl_;