// Class: tink.io._Sink.SinkYielding_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function tink_io__$Sink_Blackhole() {return require("./../../../tink/io/_Sink/Blackhole");}
function tink_core__$Future_SyncFuture() {return require("./../../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}
function tink_core_Outcome() {return require("./../../../tink/core/Outcome");}
function tink_io__$Source_Source_$Impl_$() {return require("./../../../tink/io/_Source/Source_Impl_");}
function tink_io__$Sink_ErrorSink() {return require("./../../../tink/io/_Sink/ErrorSink");}
function tink_io__$Sink_FutureSink() {return require("./../../../tink/io/_Sink/FutureSink");}
function tink_io_nodejs_NodejsSink() {return require("./../../../tink/io/nodejs/NodejsSink");}
function tink_io__$Worker_Worker_$Impl_$() {return require("./../../../tink/io/_Worker/Worker_Impl_");}
function tink_io_std_OutputSink() {return require("./../../../tink/io/std/OutputSink");}

// Constructor

var SinkYielding_Impl_ = function(){}

// Meta

SinkYielding_Impl_.__name__ = "tink.io._Sink.SinkYielding_Impl_";
SinkYielding_Impl_.prototype = {
	
};
SinkYielding_Impl_.prototype.__class__ = SinkYielding_Impl_.prototype.constructor = $hxClasses["tink.io._Sink.SinkYielding_Impl_"] = SinkYielding_Impl_;

// Init



// Statics

SinkYielding_Impl_.end = function(this1) {
	if(this1.get_sealed()) {
		return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Success(false)));
	} else {
		var ret = this1.consume((tink_io__$Source_Source_$Impl_$().default).EMPTY,{ end : true}).map(function(r) {
			switch(r._hx_index) {
			case 0:case 1:
				return (tink_core_Outcome().default).Success(true);
			case 2:
				var e = r.e;
				return (tink_core_Outcome().default).Failure(e);
			}
		});
		return ret.gather();
	}
}
SinkYielding_Impl_.dirty = function(this1) {
	return this1;
}
SinkYielding_Impl_.ofError = function(e) {
	return new (tink_io__$Sink_ErrorSink().default)(e);
}
SinkYielding_Impl_.ofPromised = function(p) {
	var ret = p.map(function(o) {
		switch(o._hx_index) {
		case 0:
			var v = o.data;
			return v;
		case 1:
			var e = o.failure;
			return SinkYielding_Impl_.ofError(e);
		}
	});
	return new (tink_io__$Sink_FutureSink().default)(ret.gather());
}
SinkYielding_Impl_.ofNodeStream = function(name,r) {
	return (tink_io_nodejs_NodejsSink().default).wrap(name,r);
}
SinkYielding_Impl_.ofOutput = function(name,target,options) {
	var tmp;
	if(options == null) {
		tmp = (tink_io__$Worker_Worker_$Impl_$().default).get();
	} else if(options.worker == null) {
		tmp = (tink_io__$Worker_Worker_$Impl_$().default).get();
	} else {
		var w = options.worker;
		tmp = w;
	}
	return new (tink_io_std_OutputSink().default)(name,target,tmp);
}
SinkYielding_Impl_.BLACKHOLE = (tink_io__$Sink_Blackhole().default).inst

// Export

exports.default = SinkYielding_Impl_;