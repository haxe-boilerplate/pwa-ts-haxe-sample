// Class: tink.core.OptionTools

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function tink_core_TypedError() {return require("./../../tink/core/TypedError");}
function haxe_ds_Option() {return require("./../../haxe/ds/Option");}
function tink_core_OptionIter() {return require("./../../tink/core/OptionIter");}

// Constructor

var OptionTools = function(){}

// Meta

OptionTools.__name__ = ["tink","core","OptionTools"];
OptionTools.prototype = {
	
};
OptionTools.prototype.__class__ = OptionTools.prototype.constructor = $hxClasses["tink.core.OptionTools"] = OptionTools;

// Init



// Statics

OptionTools.force = function(o,pos) {
	if(o._hx_index == 0) {
		var v = o.v;
		return v;
	} else {
		throw new (js__$Boot_HaxeError().default)(new (tink_core_TypedError().default)(404,"Some value expected but none found",pos));
	}
}
OptionTools.or = function(o,l) {
	if(o._hx_index == 0) {
		var v = o.v;
		return v;
	} else {
		return l.get();
	}
}
OptionTools.orNull = function(o) {
	if(o._hx_index == 0) {
		var v = o.v;
		return v;
	} else {
		return null;
	}
}
OptionTools.filter = function(o,f) {
	if(o._hx_index == 0) {
		if(f(o.v) == false) {
			return (haxe_ds_Option().default).None;
		} else {
			return o;
		}
	} else {
		return o;
	}
}
OptionTools.satisfies = function(o,f) {
	if(o._hx_index == 0) {
		var v = o.v;
		return f(v);
	} else {
		return false;
	}
}
OptionTools.equals = function(o,v) {
	if(o._hx_index == 0) {
		var v1 = o.v;
		return v1 == v;
	} else {
		return false;
	}
}
OptionTools.map = function(o,f) {
	if(o._hx_index == 0) {
		var v = o.v;
		return (haxe_ds_Option().default).Some(f(v));
	} else {
		return (haxe_ds_Option().default).None;
	}
}
OptionTools.flatMap = function(o,f) {
	if(o._hx_index == 0) {
		var v = o.v;
		return f(v);
	} else {
		return (haxe_ds_Option().default).None;
	}
}
OptionTools.iterator = function(o) {
	return new (tink_core_OptionIter().default)(o);
}
OptionTools.toArray = function(o) {
	if(o._hx_index == 0) {
		var v = o.v;
		return [v];
	} else {
		return [];
	}
}


// Export

exports.default = OptionTools;