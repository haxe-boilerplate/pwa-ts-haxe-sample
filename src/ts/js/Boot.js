// Class: js.Boot

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
var $hxEnums = require("./../hxEnums_stub").default;
var $import = require("./../import_stub").default;
function js__$Boot_HaxeError() {return require("./../js/_Boot/HaxeError");}

// Constructor

var Boot = function(){}

// Meta

Boot.__name__ = "js.Boot";
Boot.prototype = {
	
};
Boot.prototype.__class__ = Boot.prototype.constructor = $hxClasses["js.Boot"] = Boot;

// Init

Boot.__toStr = ({ }).toString;

// Statics

Boot.getClass = function(o) {
	if(((o) instanceof Array) && o.__enum__ == null) {
		return Array
	} else {
		var cl = o.__class__;
		if(cl != null) {
			return cl;
		}
		var name = Boot.__nativeClassName(o);
		if(name != null) {
			return Boot.__resolveNativeClass(name);
		}
		return null;
	}
}
Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o.__enum__) {
			var e = $hxEnums[o.__enum__];
			var n = e.__constructs__[o._hx_index];
			var con = e[n];
			if(con.__params__) {
				s += "\t";
				var tmp = n + "(";
				var _g = [];
				var _g1 = 0;
				var _g2 = con.__params__;
				while(_g1 < _g2.length) {
					var p = _g2[_g1];
					++_g1;
					_g.push(Boot.__string_rec(o[p],s));
				}
				return tmp + _g.join(",") + ")";
			} else {
				return n;
			}
		}
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g3 = 0;
			var _g11 = o.length;
			while(_g3 < _g11) {
				var i = _g3++;
				str += (i > 0 ? "," : "") + Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e1 ) {
			var e2 = ((e1) instanceof (js__$Boot_HaxeError().default)) ? e1.val : e1;
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str1 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str1.length != 2) {
			str1 += ", \n";
		}
		str1 += s + k + " : " + Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str1 += "\n" + s + "}";
		return str1;
	case "string":
		return o;
	default:
		return String(o);
	}
}
Boot.__interfLoop = function(cc,cl) {
	if(cc == null) {
		return false;
	}
	if(cc == cl) {
		return true;
	}
	if(Object.prototype.hasOwnProperty.call(cc,"__interfaces__")) {
		var intf = cc.__interfaces__;
		var _g = 0;
		var _g1 = intf.length;
		while(_g < _g1) {
			var i = _g++;
			var i1 = intf[i];
			if(i1 == cl || Boot.__interfLoop(i1,cl)) {
				return true;
			}
		}
	}
	return Boot.__interfLoop(cc.__super__,cl);
}
Boot.__instanceof = function(o,cl) {
	if(cl == null) {
		return false;
	}
	switch(cl) {
	case Array:
		return ((o) instanceof Array);
	case $hxClasses["Bool"]:
		return typeof(o) == "boolean";
	case $hxClasses["Dynamic"]:
		return o != null;
	case $hxClasses["Float"]:
		return typeof(o) == "number";
	case $hxClasses["Int"]:
		if(typeof(o) == "number") {
			return ((o | 0) === o);
		} else {
			return false;
		}
		break;
	case String:
		return typeof(o) == "string";
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(((o) instanceof cl)) {
					return true;
				}
				if(Boot.__interfLoop(Boot.getClass(o),cl)) {
					return true;
				}
			} else if(typeof(cl) == "object" && Boot.__isNativeObj(cl)) {
				if(((o) instanceof cl)) {
					return true;
				}
			}
		} else {
			return false;
		}
		if(cl == $hxClasses["Class"] ? o.__name__ != null : false) {
			return true;
		}
		if(cl == $hxClasses["Enum"] ? o.__ename__ != null : false) {
			return true;
		}
		if(o.__enum__ != null) {
			return $hxEnums[o.__enum__] == cl;
		} else {
			return false;
		}
	}
}
Boot.__nativeClassName = function(o) {
	var name = Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") {
		return null;
	}
	return name;
}
Boot.__isNativeObj = function(o) {
	return Boot.__nativeClassName(o) != null;
}
Boot.__resolveNativeClass = function(name) {
	return $global[name];
}


// Export

exports.default = Boot;