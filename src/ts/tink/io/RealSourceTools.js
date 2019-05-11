// Class: tink.io.RealSourceTools

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function tink_io__$Source_Source_$Impl_$() {return require("./../../tink/io/_Source/Source_Impl_");}
function tink_core_Outcome() {return require("./../../tink/core/Outcome");}
function tink_io__$StreamParser_StreamParser_$Impl_$() {return require("./../../tink/io/_StreamParser/StreamParser_Impl_");}
function tink_core_MPair() {return require("./../../tink/core/MPair");}
function tink_io_Splitter() {return require("./../../tink/io/Splitter");}
function tink_streams__$Stream_Stream_$Impl_$() {return require("./../../tink/streams/_Stream/Stream_Impl_");}
function tink_core__$Promise_Promise_$Impl_$() {return require("./../../tink/core/_Promise/Promise_Impl_");}
function tink_core__$Promise_Next_$Impl_$() {return require("./../../tink/core/_Promise/Next_Impl_");}
function tink_streams_Single() {return require("./../../tink/streams/Single");}
function tink_core__$Lazy_LazyConst() {return require("./../../tink/core/_Lazy/LazyConst");}
function tink_core__$Future_SyncFuture() {return require("./../../tink/core/_Future/SyncFuture");}
function tink_core_TypedError() {return require("./../../tink/core/TypedError");}

// Constructor

var RealSourceTools = function(){}

// Meta

RealSourceTools.__name__ = "tink.io.RealSourceTools";
RealSourceTools.prototype = {
	
};
RealSourceTools.prototype.__class__ = RealSourceTools.prototype.constructor = $hxClasses["tink.io.RealSourceTools"] = RealSourceTools;

// Init



// Statics

RealSourceTools.all = function(s) {
	var ret = (tink_io__$Source_Source_$Impl_$().default).concatAll(s).map(function(o) {
		switch(o._hx_index) {
		case 1:
			var e = o.error;
			return (tink_core_Outcome().default).Failure(e);
		case 2:
			var c = o.result;
			return (tink_core_Outcome().default).Success(c);
		}
	});
	return ret.gather();
}
RealSourceTools.parse = function(s,p) {
	var ret = (tink_io__$StreamParser_StreamParser_$Impl_$().default).parse(s,p).map(function(r) {
		switch(r._hx_index) {
		case 0:
			var rest = r.rest;
			var data = r.data;
			var this1 = new (tink_core_MPair().default)(data,rest);
			return (tink_core_Outcome().default).Success(this1);
		case 1:
			var e = r.e;
			return (tink_core_Outcome().default).Failure(e);
		case 2:
			var e1 = r.e;
			return (tink_core_Outcome().default).Failure(e1);
		}
	});
	return ret.gather();
}
RealSourceTools.split = function(src,delim) {
	var s = RealSourceTools.parse(src,new (tink_io_Splitter().default)(delim));
	return { before : (tink_streams__$Stream_Stream_$Impl_$().default).promise((tink_core__$Promise_Promise_$Impl_$().default).ofSpecific((tink_core__$Promise_Promise_$Impl_$().default).next(s,(tink_core__$Promise_Next_$Impl_$().default).ofSafeSync(function(p) {
		var _g = p.a;
		switch(_g._hx_index) {
		case 0:
			var chunk = _g.v;
			return new (tink_streams_Single().default)(new (tink_core__$Lazy_LazyConst().default)(chunk));
		case 1:
			return src;
		}
	})))), delimiter : (tink_core__$Promise_Promise_$Impl_$().default).next(s,function(p1) {
		switch(p1.a._hx_index) {
		case 0:
			return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Success(delim)));
		case 1:
			return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Failure(new (tink_core_TypedError().default)(404,"Delimiter not found",{ fileName : "tink/io/Source.hx", lineNumber : 177, className : "tink.io.RealSourceTools", methodName : "split"}))));
		}
	}), after : (tink_streams__$Stream_Stream_$Impl_$().default).promise((tink_core__$Promise_Promise_$Impl_$().default).ofSpecific((tink_core__$Promise_Promise_$Impl_$().default).next(s,(tink_core__$Promise_Next_$Impl_$().default).ofSafeSync(function(p2) {
		return p2.b;
	}))))};
}
RealSourceTools.parseStream = function(s,p) {
	return (tink_io__$StreamParser_StreamParser_$Impl_$().default).parseStream(s,p);
}
RealSourceTools.idealize = function(s,rescue) {
	return (tink_io__$Source_Source_$Impl_$().default).chunked(s).idealize(rescue);
}


// Export

exports.default = RealSourceTools;