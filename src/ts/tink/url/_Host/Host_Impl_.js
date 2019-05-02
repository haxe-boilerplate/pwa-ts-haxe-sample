// Class: tink.url._Host.Host_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
function js__$Boot_HaxeError() {return require("./../../../js/_Boot/HaxeError");}
function Std() {return require("./../../../Std");}

// Constructor

var Host_Impl_ = function(){}

// Meta

Host_Impl_.__name__ = ["tink","url","_Host","Host_Impl_"];
Host_Impl_.prototype = {
	
};
Host_Impl_.prototype.__class__ = Host_Impl_.prototype.constructor = $hxClasses["tink.url._Host.Host_Impl_"] = Host_Impl_;

// Init



// Statics

Host_Impl_._new = function(name,port) {
	var this1;
	if(port == null) {
		this1 = name;
	} else if(port > 65535 || port <= 0) {
		throw new (js__$Boot_HaxeError().default)("Invalid port");
	} else {
		this1 = "" + name + ":" + port;
	}
	return this1;
}
Host_Impl_.get_name = function(this1) {
	if(this1 == null) {
		return null;
	} else {
		var _g = this1.split("]");
		switch(_g.length) {
		case 1:
			var v = _g[0];
			return v.split(":")[0];
		case 2:
			var v1 = _g[0];
			return v1 + "]";
		default:
			throw new (js__$Boot_HaxeError().default)("assert");
		}
	}
}
Host_Impl_.get_port = function(this1) {
	if(this1 == null) {
		return null;
	} else {
		var _g = this1.split("]");
		switch(_g.length) {
		case 1:
			var v = _g[0];
			var _g1 = v.split(":")[1];
			if(_g1 == null) {
				return null;
			} else {
				var p = _g1;
				return (Std().default).parseInt(p);
			}
			break;
		case 2:
			var v1 = _g[1];
			var _g2 = v1.split(":")[1];
			if(_g2 == null) {
				return null;
			} else {
				var p1 = _g2;
				return (Std().default).parseInt(p1);
			}
			break;
		default:
			throw new (js__$Boot_HaxeError().default)("assert");
		}
	}
}
Host_Impl_.toString = function(this1) {
	return this1;
}


// Export

exports.default = Host_Impl_;