// Class: tink.core._Outcome.OutcomeMapper_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function tink_core_Outcome() {return require("./../../../tink/core/Outcome");}
function haxe_ds_Either() {return require("./../../../haxe/ds/Either");}

// Constructor

var OutcomeMapper_Impl_ = function(){}

// Meta

OutcomeMapper_Impl_.__name__ = "tink.core._Outcome.OutcomeMapper_Impl_";
OutcomeMapper_Impl_.prototype = {
	
};
OutcomeMapper_Impl_.prototype.__class__ = OutcomeMapper_Impl_.prototype.constructor = $hxClasses["tink.core._Outcome.OutcomeMapper_Impl_"] = OutcomeMapper_Impl_;

// Init



// Statics

OutcomeMapper_Impl_._new = function(f) {
	var this1 = { f : f};
	return this1;
}
OutcomeMapper_Impl_.apply = function(this1,o) {
	return this1.f(o);
}
OutcomeMapper_Impl_.withSameError = function(f) {
	return OutcomeMapper_Impl_._new(function(o) {
		switch(o._hx_index) {
		case 0:
			var d = o.data;
			return f(d);
		case 1:
			var f1 = o.failure;
			return (tink_core_Outcome().default).Failure(f1);
		}
	});
}
OutcomeMapper_Impl_.withEitherError = function(f) {
	return OutcomeMapper_Impl_._new(function(o) {
		switch(o._hx_index) {
		case 0:
			var d = o.data;
			var _g = f(d);
			switch(_g._hx_index) {
			case 0:
				var d1 = _g.data;
				return (tink_core_Outcome().default).Success(d1);
			case 1:
				var f1 = _g.failure;
				return (tink_core_Outcome().default).Failure((haxe_ds_Either().default).Right(f1));
			}
			break;
		case 1:
			var f2 = o.failure;
			return (tink_core_Outcome().default).Failure((haxe_ds_Either().default).Left(f2));
		}
	});
}


// Export

exports.default = OutcomeMapper_Impl_;