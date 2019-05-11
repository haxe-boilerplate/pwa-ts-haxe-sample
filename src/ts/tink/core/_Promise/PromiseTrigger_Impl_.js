// Class: tink.core._Promise.PromiseTrigger_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function tink_core_FutureTrigger() {return require("./../../../tink/core/FutureTrigger");}
function tink_core_Outcome() {return require("./../../../tink/core/Outcome");}

// Constructor

var PromiseTrigger_Impl_ = function(){}

// Meta

PromiseTrigger_Impl_.__name__ = "tink.core._Promise.PromiseTrigger_Impl_";
PromiseTrigger_Impl_.prototype = {
	
};
PromiseTrigger_Impl_.prototype.__class__ = PromiseTrigger_Impl_.prototype.constructor = $hxClasses["tink.core._Promise.PromiseTrigger_Impl_"] = PromiseTrigger_Impl_;

// Init



// Statics

PromiseTrigger_Impl_._new = function() {
	var this1 = new (tink_core_FutureTrigger().default)();
	return this1;
}
PromiseTrigger_Impl_.resolve = function(this1,v) {
	return this1.trigger((tink_core_Outcome().default).Success(v));
}
PromiseTrigger_Impl_.reject = function(this1,e) {
	return this1.trigger((tink_core_Outcome().default).Failure(e));
}
PromiseTrigger_Impl_.asPromise = function(this1) {
	return this1;
}


// Export

exports.default = PromiseTrigger_Impl_;