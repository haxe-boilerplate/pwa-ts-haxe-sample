// Class: tink.io.PipeResultTools

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function tink_core_Outcome() {return require("./../../tink/core/Outcome");}
function tink_streams_Single() {return require("./../../tink/streams/Single");}
function tink_core__$Lazy_LazyConst() {return require("./../../tink/core/_Lazy/LazyConst");}
function tink_io_PipeResult() {return require("./../../tink/io/PipeResult");}

// Constructor

var PipeResultTools = function(){}

// Meta

PipeResultTools.__name__ = "tink.io.PipeResultTools";
PipeResultTools.prototype = {
	
};
PipeResultTools.prototype.__class__ = PipeResultTools.prototype.constructor = $hxClasses["tink.io.PipeResultTools"] = PipeResultTools;

// Init



// Statics

PipeResultTools.toOutcome = function(result) {
	switch(result._hx_index) {
	case 0:
		return (tink_core_Outcome().default).Success(true);
	case 1:
		return (tink_core_Outcome().default).Success(false);
	case 2:
		var e = result.e;
		return (tink_core_Outcome().default).Failure(e);
	case 3:
		var e1 = result.e;
		return (tink_core_Outcome().default).Failure(e1);
	}
}
PipeResultTools.toResult = function(c,result,buffered) {
	var mk = function(s) {
		if(buffered == null) {
			return s;
		} else {
			var v = buffered;
			return s.prepend(new (tink_streams_Single().default)(new (tink_core__$Lazy_LazyConst().default)(v)));
		}
	};
	switch(c._hx_index) {
	case 0:
		var rest = c.rest;
		return (tink_io_PipeResult().default).SinkEnded(result,mk(rest));
	case 1:
		var rest1 = c.at;
		var e = c.error;
		return (tink_io_PipeResult().default).SinkFailed(e,mk(rest1));
	case 2:
		var e1 = c.error;
		return (tink_io_PipeResult().default).SourceFailed(e1);
	case 3:
		return (tink_io_PipeResult().default).AllWritten;
	}
}


// Export

exports.default = PipeResultTools;