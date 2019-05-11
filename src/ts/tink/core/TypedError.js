// Class: tink.core.TypedError

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function tink_core_Outcome() {return require("./../../tink/core/Outcome");}

// Constructor

var TypedError = function(code,message,pos) {
	if(code == null) {
		code = 500;
	}
	this.isTinkError = true;
	this.code = code;
	this.message = message;
	this.pos = pos;
	this.exceptionStack = [];
	this.callStack = [];
}

// Meta

TypedError.__name__ = "tink.core.TypedError";
TypedError.prototype = {
	printPos: function() {
		return this.pos.className + "." + this.pos.methodName + ":" + this.pos.lineNumber;
	},
	toString: function() {
		var ret = "Error#" + this.code + ": " + this.message;
		if(this.pos != null) {
			ret += " @ " + this.printPos();
		}
		return ret;
	},
	throwSelf: function() {
		var any = this;
		throw (js__$Boot_HaxeError().default).wrap(any);
	}
};
TypedError.prototype.__class__ = TypedError.prototype.constructor = $hxClasses["tink.core.TypedError"] = TypedError;

// Init



// Statics

TypedError.withData = function(code,message,data,pos) {
	return TypedError.typed(code,message,data,pos);
}
TypedError.typed = function(code,message,data,pos) {
	var ret = new TypedError(code,message,pos);
	ret.data = data;
	return ret;
}
TypedError.ofJsError = function(e,pos) {
	return TypedError.withData(500,e.message,e,pos);
}
TypedError.asError = function(v) {
	if(v != null && v.isTinkError) {
		return v;
	} else {
		return null;
	}
}
TypedError.catchExceptions = function(f,report,pos) {
	try {
		return (tink_core_Outcome().default).Success(f());
	} catch( e ) {
		var e1 = ((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e;
		var _g = TypedError.asError(e1);
		var tmp;
		if(_g == null) {
			tmp = report == null ? TypedError.withData(null,"Unexpected Error",e1,pos) : report(e1);
		} else {
			var e2 = _g;
			tmp = e2;
		}
		return (tink_core_Outcome().default).Failure(tmp);
	}
}
TypedError.reporter = function(code,message,pos) {
	return function(e) {
		return TypedError.withData(code,message,e,pos);
	};
}
TypedError.rethrow = function(any) {
	throw (js__$Boot_HaxeError().default).wrap(any);
}
TypedError.tryFinally = function(f,cleanup) {
	try { return f(); } finally { cleanup(); }
	return null;
}


// Export

exports.default = TypedError;