// Class: tink.http.HeaderField

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function tink_core_NamedWith() {return require("./../../tink/core/NamedWith");}
function HxOverrides() {return require("./../../HxOverrides");}
function StringTools() {return require("./../../StringTools");}
function Std() {return require("./../../Std");}
function tink_http__$Header_HeaderValue_$Impl_$() {return require("./../../tink/http/_Header/HeaderValue_Impl_");}

// Constructor

var HeaderField = function(name,value) {
	(tink_core_NamedWith().default).call(this,name,value);
}

// Meta

HeaderField.__name__ = "tink.http.HeaderField";
HeaderField.__super__ = (tink_core_NamedWith().default);
HeaderField.prototype = $extend((tink_core_NamedWith().default).prototype, {
	toString: function() {
		if(this.value == null) {
			return this.name;
		} else {
			return "" + this.name + ": " + this.value;
		}
	}
});
HeaderField.prototype.__class__ = HeaderField.prototype.constructor = $hxClasses["tink.http.HeaderField"] = HeaderField;

// Init



// Statics

HeaderField.ofString = function(s) {
	var _g = s.indexOf(":");
	if(_g == -1) {
		var this1 = s.toLowerCase();
		return new HeaderField(this1,null);
	} else {
		var v = _g;
		var name = (HxOverrides().default).substr(s,0,v);
		var this2 = name.toLowerCase();
		return new HeaderField(this2,(StringTools().default).trim((HxOverrides().default).substr(s,v + 1,null)));
	}
}
HeaderField.setCookie = function(key,value,options) {
	if(options == null) {
		options = { };
	}
	var buf_b = "";
	buf_b += (Std().default).string(encodeURIComponent(key) + "=" + encodeURIComponent(value));
	if(options.expires != null) {
		var value1 = (tink_http__$Header_HeaderValue_$Impl_$().default).ofDate(options.expires);
		if(value1 != null) {
			buf_b += "; ";
			buf_b += "expires=";
			buf_b += (Std().default).string(value1);
		}
	}
	var value2 = options.domain;
	if(value2 != null) {
		buf_b += "; ";
		buf_b += "domain=";
		buf_b += (Std().default).string(value2);
	}
	var value3 = options.path;
	if(value3 != null) {
		buf_b += "; ";
		buf_b += "path=";
		buf_b += (Std().default).string(value3);
	}
	if(options.secure) {
		buf_b += "; ";
		buf_b += "secure";
		buf_b += "";
	}
	if(options.scriptable != true) {
		buf_b += "; ";
		buf_b += "HttpOnly";
		buf_b += "";
	}
	return new HeaderField("set-cookie",buf_b);
}


// Export

exports.default = HeaderField;