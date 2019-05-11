// Class: tink.core.OutcomeTools

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function tink_core_TypedError() {return require("./../../tink/core/TypedError");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function haxe_ds_Option() {return require("./../../haxe/ds/Option");}
function tink_core_Outcome() {return require("./../../tink/core/Outcome");}
function tink_core__$Outcome_OutcomeMapper_$Impl_$() {return require("./../../tink/core/_Outcome/OutcomeMapper_Impl_");}

// Constructor

var OutcomeTools = function(){}

// Meta

OutcomeTools.__name__ = "tink.core.OutcomeTools";
OutcomeTools.prototype = {
	
};
OutcomeTools.prototype.__class__ = OutcomeTools.prototype.constructor = $hxClasses["tink.core.OutcomeTools"] = OutcomeTools;

// Init



// Statics

OutcomeTools.sure = function(outcome) {
	switch(outcome._hx_index) {
	case 0:
		var data = outcome.data;
		return data;
	case 1:
		var failure = outcome.failure;
		var _g = (tink_core_TypedError().default).asError(failure);
		if(_g == null) {
			throw new (js__$Boot_HaxeError().default)(failure);
		} else {
			var e = _g;
			return e.throwSelf();
		}
		break;
	}
}
OutcomeTools.toOption = function(outcome) {
	switch(outcome._hx_index) {
	case 0:
		var data = outcome.data;
		return (haxe_ds_Option().default).Some(data);
	case 1:
		return (haxe_ds_Option().default).None;
	}
}
OutcomeTools.toOutcome = function(option,pos) {
	switch(option._hx_index) {
	case 0:
		var value = option.v;
		return (tink_core_Outcome().default).Success(value);
	case 1:
		return (tink_core_Outcome().default).Failure(new (tink_core_TypedError().default)(404,"Some value expected but none found in " + pos.fileName + "@line " + pos.lineNumber,{ fileName : "tink/core/Outcome.hx", lineNumber : 47, className : "tink.core.OutcomeTools", methodName : "toOutcome"}));
	}
}
OutcomeTools.orNull = function(outcome) {
	switch(outcome._hx_index) {
	case 0:
		var data = outcome.data;
		return data;
	case 1:
		return null;
	}
}
OutcomeTools.orUse = function(outcome,fallback) {
	switch(outcome._hx_index) {
	case 0:
		var data = outcome.data;
		return data;
	case 1:
		return fallback.get();
	}
}
OutcomeTools.orTry = function(outcome,fallback) {
	switch(outcome._hx_index) {
	case 0:
		return outcome;
	case 1:
		return fallback.get();
	}
}
OutcomeTools.equals = function(outcome,to) {
	switch(outcome._hx_index) {
	case 0:
		var data = outcome.data;
		return data == to;
	case 1:
		return false;
	}
}
OutcomeTools.map = function(outcome,transform) {
	switch(outcome._hx_index) {
	case 0:
		var a = outcome.data;
		return (tink_core_Outcome().default).Success(transform(a));
	case 1:
		var f = outcome.failure;
		return (tink_core_Outcome().default).Failure(f);
	}
}
OutcomeTools.isSuccess = function(outcome) {
	if(outcome._hx_index == 0) {
		return true;
	} else {
		return false;
	}
}
OutcomeTools.flatMap = function(o,mapper) {
	return (tink_core__$Outcome_OutcomeMapper_$Impl_$().default).apply(mapper,o);
}
OutcomeTools.swap = function(outcome,v) {
	switch(outcome._hx_index) {
	case 0:
		var a = outcome.data;
		return (tink_core_Outcome().default).Success(v);
	case 1:
		var f = outcome.failure;
		return (tink_core_Outcome().default).Failure(f);
	}
}
OutcomeTools.attempt = function(f,report) {
	try {
		return (tink_core_Outcome().default).Success(f());
	} catch( e ) {
		return (tink_core_Outcome().default).Failure(report(((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e));
	}
}
OutcomeTools.flatten = function(o) {
	switch(o._hx_index) {
	case 0:
		switch(o.data._hx_index) {
		case 0:
			var d = o.data.data;
			return (tink_core_Outcome().default).Success(d);
		case 1:
			var f = o.data.failure;
			return (tink_core_Outcome().default).Failure(f);
		}
		break;
	case 1:
		var f1 = o.failure;
		return (tink_core_Outcome().default).Failure(f1);
	}
}


// Export

exports.default = OutcomeTools;