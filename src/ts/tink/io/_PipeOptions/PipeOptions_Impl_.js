// Class: tink.io._PipeOptions.PipeOptions_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;

// Constructor

var PipeOptions_Impl_ = function(){}

// Meta

PipeOptions_Impl_.__name__ = ["tink","io","_PipeOptions","PipeOptions_Impl_"];
PipeOptions_Impl_.prototype = {
	
};
PipeOptions_Impl_.prototype.__class__ = PipeOptions_Impl_.prototype.constructor = $hxClasses["tink.io._PipeOptions.PipeOptions_Impl_"] = PipeOptions_Impl_;

// Init



// Statics

PipeOptions_Impl_.get_end = function(this1) {
	if(this1 != null) {
		return this1.end;
	} else {
		return false;
	}
}
PipeOptions_Impl_.get_destructive = function(this1) {
	if(this1 != null) {
		return this1.destructive;
	} else {
		return false;
	}
}


// Export

exports.default = PipeOptions_Impl_;