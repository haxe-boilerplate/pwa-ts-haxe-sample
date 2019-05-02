// Class: tink.core._Callback.CallbackList_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
function tink_core__$Callback_ListCell() {return require("./../../../tink/core/_Callback/ListCell");}
function tink_core__$Callback_Callback_$Impl_$() {return require("./../../../tink/core/_Callback/Callback_Impl_");}

// Constructor

var CallbackList_Impl_ = function(){}

// Meta

CallbackList_Impl_.__name__ = ["tink","core","_Callback","CallbackList_Impl_"];
CallbackList_Impl_.prototype = {
	
};
CallbackList_Impl_.prototype.__class__ = CallbackList_Impl_.prototype.constructor = $hxClasses["tink.core._Callback.CallbackList_Impl_"] = CallbackList_Impl_;

// Init



// Statics

CallbackList_Impl_._new = function() {
	var this1 = [];
	return this1;
}
CallbackList_Impl_.get_length = function(this1) {
	return this1.length;
}
CallbackList_Impl_.add = function(this1,cb) {
	var node = new (tink_core__$Callback_ListCell().default)(cb,this1);
	this1.push(node);
	return node;
}
CallbackList_Impl_.invoke = function(this1,data) {
	var _g = 0;
	var _g1 = this1.slice();
	while(_g < _g1.length) {
		var cell = _g1[_g];
		++_g;
		if(cell.cb != null) {
			(tink_core__$Callback_Callback_$Impl_$().default).invoke(cell.cb,data);
		}
	}
}
CallbackList_Impl_.clear = function(this1) {
	var _g = 0;
	var _g1 = this1.splice(0,this1.length);
	while(_g < _g1.length) {
		var cell = _g1[_g];
		++_g;
		cell.clear();
	}
}
CallbackList_Impl_.invokeAndClear = function(this1,data) {
	var _g = 0;
	var _g1 = this1.splice(0,this1.length);
	while(_g < _g1.length) {
		var cell = _g1[_g];
		++_g;
		if(cell.cb != null) {
			(tink_core__$Callback_Callback_$Impl_$().default).invoke(cell.cb,data);
		}
	}
}


// Export

exports.default = CallbackList_Impl_;