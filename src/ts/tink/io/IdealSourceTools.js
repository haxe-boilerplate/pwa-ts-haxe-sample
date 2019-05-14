// Class: tink.io.IdealSourceTools

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function tink_io__$Source_Source_$Impl_$() {return require("./../../tink/io/_Source/Source_Impl_");}
function tink_io__$StreamParser_StreamParser_$Impl_$() {return require("./../../tink/io/_StreamParser/StreamParser_Impl_");}
function tink_core_MPair() {return require("./../../tink/core/MPair");}
function tink_core_Outcome() {return require("./../../tink/core/Outcome");}
function tink_io_RealSourceTools() {return require("./../../tink/io/RealSourceTools");}

// Constructor

var IdealSourceTools = function(){}

// Meta

IdealSourceTools.__name__ = "tink.io.IdealSourceTools";
IdealSourceTools.prototype = {
	
};
IdealSourceTools.prototype.__class__ = IdealSourceTools.prototype.constructor = $hxClasses["tink.io.IdealSourceTools"] = IdealSourceTools;

// Init



// Statics

IdealSourceTools.all = function(s) {
	var ret = (tink_io__$Source_Source_$Impl_$().default).concatAll(s).map(function(o) {
		var c = o.result;
		return c;
	});
	return ret.gather();
}
IdealSourceTools.parse = function(s,p) {
	var ret = (tink_io__$StreamParser_StreamParser_$Impl_$().default).parse(s,p).map(function(r) {
		switch(r._hx_index) {
		case 0:
			var rest = r.rest;
			var data = r.data;
			var this1 = new (tink_core_MPair().default)(data,rest);
			return (tink_core_Outcome().default).Success(this1);
		case 1:
			var _g3 = r.rest;
			var e = r.e;
			return (tink_core_Outcome().default).Failure(e);
		}
	});
	return ret.gather();
}
IdealSourceTools.parseStream = function(s,p) {
	return (tink_io__$StreamParser_StreamParser_$Impl_$().default).parseStream(s,p);
}
IdealSourceTools.split = function(s,delim) {
	var s1 = (tink_io_RealSourceTools().default).split(s,delim);
	return { before : (tink_io_RealSourceTools().default).idealize(s1.before,function(e) {
		return (tink_io__$Source_Source_$Impl_$().default).EMPTY;
	}), delimiter : s1.delimiter, after : (tink_io_RealSourceTools().default).idealize(s1.after,function(e1) {
		return (tink_io__$Source_Source_$Impl_$().default).EMPTY;
	})};
}


// Export

exports.default = IdealSourceTools;