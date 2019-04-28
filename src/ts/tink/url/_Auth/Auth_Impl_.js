// Class: tink.url._Auth.Auth_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;

// Constructor

var Auth_Impl_ = function(){}

// Meta

Auth_Impl_.__name__ = ["tink","url","_Auth","Auth_Impl_"];
Auth_Impl_.prototype = {
	
};
Auth_Impl_.prototype.__class__ = Auth_Impl_.prototype.constructor = $hxClasses["tink.url._Auth.Auth_Impl_"] = Auth_Impl_;

// Init



// Statics

Auth_Impl_._new = function(user,password) {
	var this1 = "" + user + ":" + password;
	return this1;
}
Auth_Impl_.get_user = function(this1) {
	if(this1 == null) {
		return null;
	} else {
		return this1.split(":")[0];
	}
}
Auth_Impl_.get_password = function(this1) {
	if(this1 == null) {
		return null;
	} else {
		return this1.split(":")[1];
	}
}
Auth_Impl_.toString = function(this1) {
	if(this1 == null) {
		return "";
	} else {
		return "" + this1 + "@";
	}
}


// Export

exports.default = Auth_Impl_;