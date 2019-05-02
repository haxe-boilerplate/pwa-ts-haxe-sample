// Class: tink.http.ContentType

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function tink_http__$Header_HeaderValue_$Impl_$() {return require("./../../tink/http/_Header/HeaderValue_Impl_");}
function haxe_ds_StringMap() {return require("./../../haxe/ds/StringMap");}

// Constructor

var ContentType = function() {
	this.subtype = "*";
	this.type = "*";
	this.extensions = new (haxe_ds_StringMap().default)();
}

// Meta

ContentType.__name__ = ["tink","http","ContentType"];
ContentType.prototype = {
	get_fullType: function() {
		return "" + this.type + "/" + this.subtype;
	},
	toString: function() {
		return this.raw;
	}
};
ContentType.prototype.__class__ = ContentType.prototype.constructor = $hxClasses["tink.http.ContentType"] = ContentType;

// Init



// Statics

ContentType.ofString = function(s) {
	var ret = new ContentType();
	ret.raw = s;
	var parsed = (tink_http__$Header_HeaderValue_$Impl_$().default).parse(s);
	var value = parsed[0].value;
	var _g = value.indexOf("/");
	if(_g == -1) {
		ret.type = value;
	} else {
		var pos = _g;
		ret.type = value.substring(0,pos);
		ret.subtype = value.substring(pos + 1);
	}
	ret.extensions = parsed[0].extensions;
	return ret;
}


// Export

exports.default = ContentType;