// Class: tink.url._Path.Path_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function HxOverrides() {return require("./../../../HxOverrides");}
function StringTools() {return require("./../../../StringTools");}

// Constructor

var Path_Impl_ = function(){}

// Meta

Path_Impl_.__name__ = "tink.url._Path.Path_Impl_";
Path_Impl_.prototype = {
	
};
Path_Impl_.prototype.__class__ = Path_Impl_.prototype.constructor = $hxClasses["tink.url._Path.Path_Impl_"] = Path_Impl_;

// Init



// Statics

Path_Impl_.parts = function(this1) {
	var _g = [];
	var _g1 = 0;
	var _g2 = this1.split("/");
	while(_g1 < _g2.length) {
		var p = _g2[_g1];
		++_g1;
		if(p != "") {
			var this2 = p;
			_g.push(this2);
		}
	}
	return _g;
}
Path_Impl_.get_absolute = function(this1) {
	return this1.charAt(0) == "/";
}
Path_Impl_.get_isDir = function(this1) {
	return this1.charAt(this1.length - 1) == "/";
}
Path_Impl_._new = function(s) {
	var this1 = s;
	return this1;
}
Path_Impl_.join = function(this1,that) {
	if(that == "") {
		return this1;
	} else if(that.charAt(0) == "/") {
		return that;
	} else if(this1.charAt(this1.length - 1) == "/") {
		return Path_Impl_.ofString(this1 + that);
	} else {
		var _g = this1.lastIndexOf("/");
		if(_g == -1) {
			return that;
		} else {
			var v = _g;
			return Path_Impl_.ofString((HxOverrides().default).substr(this1,0,v + 1) + that);
		}
	}
}
Path_Impl_.ofString = function(s) {
	var this1 = Path_Impl_.normalize(s);
	return this1;
}
Path_Impl_.normalize = function(s) {
	s = (StringTools().default).trim((StringTools().default).replace(s,"\\","/"));
	if(s == ".") {
		return "./";
	}
	var isDir = (StringTools().default).endsWith(s,"/..") || (StringTools().default).endsWith(s,"/") || (StringTools().default).endsWith(s,"/.");
	var parts = [];
	var isAbsolute = (StringTools().default).startsWith(s,"/");
	var up = 0;
	var _g = 0;
	var _g1 = s.split("/");
	while(_g < _g1.length) {
		var part = _g1[_g];
		++_g;
		var _g2 = (StringTools().default).trim(part);
		switch(_g2) {
		case "":
			break;
		case ".":
			break;
		case "..":
			if(parts.pop() == null) {
				++up;
			}
			break;
		default:
			var v = _g2;
			parts.push(v);
		}
	}
	if(isAbsolute) {
		parts.unshift("");
	} else {
		var _g21 = 0;
		var _g3 = up;
		while(_g21 < _g3) {
			var i = _g21++;
			parts.unshift("..");
		}
	}
	if(isDir) {
		parts.push("");
	}
	return parts.join("/");
}
Path_Impl_.toString = function(this1) {
	return this1;
}
Path_Impl_.root = (function($this) {
	var $r;
	var this1 = "/";
	$r = this1;
	return $r;
}(this))

// Export

exports.default = Path_Impl_;