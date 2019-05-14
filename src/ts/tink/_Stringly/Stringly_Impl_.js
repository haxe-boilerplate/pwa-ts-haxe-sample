// Class: tink._Stringly.Stringly_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function StringTools() {return require("./../../StringTools");}
function tink_core_Outcome() {return require("./../../tink/core/Outcome");}
function tink_core_TypedError() {return require("./../../tink/core/TypedError");}
function tink_core_OutcomeTools() {return require("./../../tink/core/OutcomeTools");}
function Std() {return require("./../../Std");}
function EReg() {return require("./../../EReg");}

// Constructor

var Stringly_Impl_ = function(){}

// Meta

Stringly_Impl_.__name__ = "tink._Stringly.Stringly_Impl_";
Stringly_Impl_.prototype = {
	
};
Stringly_Impl_.prototype.__class__ = Stringly_Impl_.prototype.constructor = $hxClasses["tink._Stringly.Stringly_Impl_"] = Stringly_Impl_;

// Init



// Statics

Stringly_Impl_.isNumber = function(s,allowFloat) {
	if(s.length == 0) {
		return false;
	}
	var pos = 0;
	var max = s.length;
	if(pos < max && s.charCodeAt(pos) == 45) {
		++pos;
	}
	if(!allowFloat) {
		if(pos < max && s.charCodeAt(pos) == 48 && pos++ > -1) {
			if(pos < max && s.charCodeAt(pos) == 120) {
				++pos;
			}
		}
	}
	while(pos < max && (s.charCodeAt(pos) ^ 48) < 10) ++pos;
	if(allowFloat && pos < max) {
		if(pos < max && s.charCodeAt(pos) == 46 && pos++ > -1) {
			while(pos < max && (s.charCodeAt(pos) ^ 48) < 10) ++pos;
		}
		if(pos < max && s.charCodeAt(pos) == 101 && pos++ > -1 || pos < max && s.charCodeAt(pos) == 69 && pos++ > -1) {
			if(!(pos < max && s.charCodeAt(pos) == 43 && pos++ > -1)) {
				if(pos < max && s.charCodeAt(pos) == 45) {
					++pos;
				}
			}
			while(pos < max && (s.charCodeAt(pos) ^ 48) < 10) ++pos;
		}
	}
	return pos == max;
}
Stringly_Impl_.toBool = function(this1) {
	if(this1 != null) {
		switch((StringTools().default).trim(this1).toLowerCase()) {
		case "0":case "false":case "no":
			return false;
		default:
			return true;
		}
	} else {
		return false;
	}
}
Stringly_Impl_.parseFloat = function(this1) {
	var _g = (StringTools().default).trim(this1);
	var v = _g;
	if(Stringly_Impl_.isNumber(v,true)) {
		return (tink_core_Outcome().default).Success(parseFloat(v));
	} else {
		var v1 = _g;
		return (tink_core_Outcome().default).Failure(new (tink_core_TypedError().default)(422,"" + v1 + " (encoded as " + this1 + ") is not a valid float",{ fileName : "tink/Stringly.hx", lineNumber : 60, className : "tink._Stringly.Stringly_Impl_", methodName : "parseFloat"}));
	}
}
Stringly_Impl_.toFloat = function(this1) {
	return (tink_core_OutcomeTools().default).sure(Stringly_Impl_.parseFloat(this1));
}
Stringly_Impl_.parseInt = function(this1) {
	var _g = (StringTools().default).trim(this1);
	var v = _g;
	if(Stringly_Impl_.isNumber(v,false)) {
		return (tink_core_Outcome().default).Success((Std().default).parseInt(v));
	} else {
		var v1 = _g;
		return (tink_core_Outcome().default).Failure(new (tink_core_TypedError().default)(422,"" + v1 + " (encoded as " + this1 + ") is not a valid integer",{ fileName : "tink/Stringly.hx", lineNumber : 71, className : "tink._Stringly.Stringly_Impl_", methodName : "parseInt"}));
	}
}
Stringly_Impl_.toInt = function(this1) {
	return (tink_core_OutcomeTools().default).sure(Stringly_Impl_.parseInt(this1));
}
Stringly_Impl_.parseDate = function(this1) {
	var _g = Stringly_Impl_.parseFloat(this1);
	switch(_g._hx_index) {
	case 0:
		var f = _g.data;
		return (tink_core_Outcome().default).Success(new Date(f));
	case 1:
		var _g2 = _g.failure;
		if(!Stringly_Impl_.SUPPORTED_DATE_REGEX.match(this1)) {
			return (tink_core_Outcome().default).Failure(new (tink_core_TypedError().default)(422,"" + this1 + " is not a valid date",{ fileName : "tink/Stringly.hx", lineNumber : 92, className : "tink._Stringly.Stringly_Impl_", methodName : "parseDate"}));
		}
		var date = new Date(this1);
		if(isNaN(date.getTime())) {
			return (tink_core_Outcome().default).Failure(new (tink_core_TypedError().default)(422,"" + this1 + " is not a valid date",{ fileName : "tink/Stringly.hx", lineNumber : 95, className : "tink._Stringly.Stringly_Impl_", methodName : "parseDate"}));
		} else {
			return (tink_core_Outcome().default).Success(date);
		}
		break;
	}
}
Stringly_Impl_.toDate = function(this1) {
	return (tink_core_OutcomeTools().default).sure(Stringly_Impl_.parseDate(this1));
}
Stringly_Impl_.parse = function(this1,f) {
	var f1 = f;
	var a1 = this1;
	return (tink_core_TypedError().default).catchExceptions(function() {
		return f1(a1);
	},null,{ fileName : "tink/Stringly.hx", lineNumber : 155, className : "tink._Stringly.Stringly_Impl_", methodName : "parse"});
}
Stringly_Impl_.ofBool = function(b) {
	if(b) {
		return "true";
	} else {
		return "false";
	}
}
Stringly_Impl_.ofInt = function(i) {
	if(i == null) {
		return "null";
	} else {
		return "" + i;
	}
}
Stringly_Impl_.ofFloat = function(f) {
	if(f == null) {
		return "null";
	} else {
		return "" + f;
	}
}
Stringly_Impl_.ofDate = function(d) {
	var f = d.getTime();
	if(f == null) {
		return "null";
	} else {
		return "" + f;
	}
}
Stringly_Impl_.SUPPORTED_DATE_REGEX = new (EReg().default)("^(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2})(\\.\\d{3})?(Z|[\\+-]\\d{2}:\\d{2})$","")

// Export

exports.default = Stringly_Impl_;