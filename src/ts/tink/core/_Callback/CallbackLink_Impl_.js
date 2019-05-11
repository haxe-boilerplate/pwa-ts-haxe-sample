// Class: tink.core._Callback.CallbackLink_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
var $bind = require("./../../../bind_stub").default;
function tink_core__$Callback_SimpleLink() {return require("./../../../tink/core/_Callback/SimpleLink");}
function tink_core__$Callback_LinkPair() {return require("./../../../tink/core/_Callback/LinkPair");}

// Constructor

var CallbackLink_Impl_ = function(){}

// Meta

CallbackLink_Impl_.__name__ = "tink.core._Callback.CallbackLink_Impl_";
CallbackLink_Impl_.prototype = {
	
};
CallbackLink_Impl_.prototype.__class__ = CallbackLink_Impl_.prototype.constructor = $hxClasses["tink.core._Callback.CallbackLink_Impl_"] = CallbackLink_Impl_;

// Init



// Statics

CallbackLink_Impl_._new = function(link) {
	var this1 = new (tink_core__$Callback_SimpleLink().default)(link);
	return this1;
}
CallbackLink_Impl_.cancel = function(this1) {
	if(this1 != null) {
		this1.cancel();
	}
}
CallbackLink_Impl_.dissolve = function(this1) {
	if(this1 != null) {
		this1.cancel();
	}
}
CallbackLink_Impl_.noop = function() {
}
CallbackLink_Impl_.toFunction = function(this1) {
	if(this1 == null) {
		return CallbackLink_Impl_.noop;
	} else {
		return $bind(this1,this1.cancel);
	}
}
CallbackLink_Impl_.toCallback = function(this1) {
	return function(_) {
		this1.cancel();
	};
}
CallbackLink_Impl_.fromFunction = function(f) {
	var this1 = new (tink_core__$Callback_SimpleLink().default)(f);
	return this1;
}
CallbackLink_Impl_.join = function(a,b) {
	return new (tink_core__$Callback_LinkPair().default)(a,b);
}
CallbackLink_Impl_.fromMany = function(callbacks) {
	var this1 = new (tink_core__$Callback_SimpleLink().default)(function() {
		var _g = 0;
		while(_g < callbacks.length) {
			var cb = callbacks[_g];
			++_g;
			if(cb != null) {
				cb.cancel();
			}
		}
	});
	return this1;
}


// Export

exports.default = CallbackLink_Impl_;