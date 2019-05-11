// Class: tink.core._Callback.Callback_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function tink_core_Noise() {return require("./../../../tink/core/Noise");}

// Constructor

var Callback_Impl_ = function(){}

// Meta

Callback_Impl_.__name__ = "tink.core._Callback.Callback_Impl_";
Callback_Impl_.prototype = {
	
};
Callback_Impl_.prototype.__class__ = Callback_Impl_.prototype.constructor = $hxClasses["tink.core._Callback.Callback_Impl_"] = Callback_Impl_;

// Init



// Statics

Callback_Impl_._new = function(f) {
	var this1 = f;
	return this1;
}
Callback_Impl_.toFunction = function(this1) {
	return this1;
}
Callback_Impl_.invoke = function(this1,data) {
	if(Callback_Impl_.depth < 1000) {
		Callback_Impl_.depth++;
		this1(data);
		Callback_Impl_.depth--;
	} else {
		var _e = this1;
		var f = function(data1) {
			Callback_Impl_.invoke(_e,data1);
		};
		var data2 = data;
		Callback_Impl_.defer(function() {
			f(data2);
		});
	}
}
Callback_Impl_.ignore = function(cb) {
	return function(_) {
		Callback_Impl_.invoke(cb,(tink_core_Noise().default).Noise);
	};
}
Callback_Impl_.fromNiladic = function(f) {
	return f;
}
Callback_Impl_.fromMany = function(callbacks) {
	return function(v) {
		var _g = 0;
		while(_g < callbacks.length) {
			var callback = callbacks[_g];
			++_g;
			Callback_Impl_.invoke(callback,v);
		}
	};
}
Callback_Impl_.defer = function(f) {
	process.nextTick(f);
}
Callback_Impl_.depth = 0
Callback_Impl_.MAX_DEPTH = 1000

// Export

exports.default = Callback_Impl_;