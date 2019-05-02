// Class: tink.web.routing._Context.Path_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $import = require("./../../../../import_stub").default;
function tink_url__$Portion_Portion_$Impl_$() {return require("./../../../../tink/url/_Portion/Portion_Impl_");}

// Constructor

var Path_Impl_ = function(){}

// Meta

Path_Impl_.__name__ = ["tink","web","routing","_Context","Path_Impl_"];
Path_Impl_.prototype = {
	
};
Path_Impl_.prototype.__class__ = Path_Impl_.prototype.constructor = $hxClasses["tink.web.routing._Context.Path_Impl_"] = Path_Impl_;

// Init



// Statics

Path_Impl_.toString = function(this1) {
	var _g = [];
	var _g1 = 0;
	while(_g1 < this1.length) {
		var p = this1[_g1];
		++_g1;
		_g.push((tink_url__$Portion_Portion_$Impl_$().default).stringly(p));
	}
	return "/" + _g.join("/");
}


// Export

exports.default = Path_Impl_;