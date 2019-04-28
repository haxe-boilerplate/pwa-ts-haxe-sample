// Class: tink.io.std.OutputSink

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
var $extend = require("./../../../extend_stub").default;
function tink_io_SinkBase() {return require("./../../../tink/io/SinkBase");}
function tink__$Chunk_Chunk_$Impl_$() {return require("./../../../tink/_Chunk/Chunk_Impl_");}
function tink_streams__$Stream_Handler_$Impl_$() {return require("./../../../tink/streams/_Stream/Handler_Impl_");}
function tink_core__$Future_Future_$Impl_$() {return require("./../../../tink/core/_Future/Future_Impl_");}
function tink_streams_Handled() {return require("./../../../tink/streams/Handled");}
function tink_io__$Worker_Worker_$Impl_$() {return require("./../../../tink/io/_Worker/Worker_Impl_");}
function tink_core__$Lazy_LazyFunc() {return require("./../../../tink/core/_Lazy/LazyFunc");}
function tink_core_Outcome() {return require("./../../../tink/core/Outcome");}
function js__$Boot_HaxeError() {return require("./../../../js/_Boot/HaxeError");}
function haxe_io_Eof() {return require("./../../../haxe/io/Eof");}
function js_Boot() {return require("./../../../js/Boot");}
function haxe_io_Error() {return require("./../../../haxe/io/Error");}
function tink_core_TypedError() {return require("./../../../tink/core/TypedError");}
function tink_chunk_ByteChunk() {return require("./../../../tink/chunk/ByteChunk");}
function tink_io_PipeResultTools() {return require("./../../../tink/io/PipeResultTools");}
function tink_core_Noise() {return require("./../../../tink/core/Noise");}

// Constructor

var OutputSink = function(name,target,worker) {
	this.name = name;
	this.target = target;
	this.worker = worker;
}

// Meta

OutputSink.__name__ = ["tink","io","std","OutputSink"];
OutputSink.__super__ = (tink_io_SinkBase().default);
OutputSink.prototype = $extend((tink_io_SinkBase().default).prototype, {
	consume: function(source,options) {
		var _gthis = this;
		var rest = (tink__$Chunk_Chunk_$Impl_$().default).EMPTY;
		var ret = source.forEach((tink_streams__$Stream_Handler_$Impl_$().default).ofUnknown(function(c) {
			return (tink_core__$Future_Future_$Impl_$().default).async(function(cb) {
				var pos = 0;
				var bytes = c.toBytes();
				var write = null;
				write = function() {
					if(pos == bytes.length) {
						cb((tink_streams_Handled().default).Resume);
					} else {
						(tink_io__$Worker_Worker_$Impl_$().default).work(_gthis.worker,new (tink_core__$Lazy_LazyFunc().default)(function() {
							try {
								return (tink_core_Outcome().default).Success(_gthis.target.writeBytes(bytes,pos,bytes.length - pos));
							} catch( e ) {
								var e1 = ((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e;
								if(((e1) instanceof (haxe_io_Eof().default))) {
									var e2 = e1;
									return (tink_core_Outcome().default).Success(-1);
								} else if((js_Boot().default).__instanceof(e1,(haxe_io_Error().default))) {
									var e3 = e1;
									if(e3._hx_index == 0) {
										return (tink_core_Outcome().default).Success(0);
									} else {
										return (tink_core_Outcome().default).Failure((tink_core_TypedError().default).withData(null,"Error writing to " + _gthis.name,e3,{ fileName : "tink/io/std/OutputSink.hx", lineNumber : 40, className : "tink.io.std.OutputSink", methodName : "consume"}));
									}
								} else if(((e1) instanceof (tink_core_TypedError().default))) {
									return (tink_core_Outcome().default).Failure(e1);
								} else {
									return (tink_core_Outcome().default).Failure((tink_core_TypedError().default).withData(null,"Error writing to " + _gthis.name,e1,{ fileName : "tink/io/std/OutputSink.hx", lineNumber : 46, className : "tink.io.std.OutputSink", methodName : "consume"}));
								}
							}
						})).handle(function(o) {
							switch(o._hx_index) {
							case 0:
								if(o.data == -1) {
									rest = (tink_chunk_ByteChunk().default).of(bytes).slice(pos,bytes.length);
									cb((tink_streams_Handled().default).Finish);
								} else {
									var v = o.data;
									pos += v;
									if(pos == bytes.length) {
										cb((tink_streams_Handled().default).Resume);
									} else {
										write();
									}
								}
								break;
							case 1:
								var e4 = o.failure;
								cb((tink_streams_Handled().default).Clog(e4));
								break;
							}
						});
					}
				};
				write();
			});
		}));
		if(options != null && options.end) {
			ret.handle(function(end) {
				try {
					_gthis.target.close();
				} catch( e5 ) {
					var e6 = ((e5) instanceof (js__$Boot_HaxeError().default)) ? e5.val : e5;
				}
			});
		}
		var ret1 = ret.map(function(c1) {
			return (tink_io_PipeResultTools().default).toResult(c1,(tink_core_Noise().default).Noise,rest);
		});
		return ret1.gather();
	}
});
OutputSink.prototype.__class__ = OutputSink.prototype.constructor = $hxClasses["tink.io.std.OutputSink"] = OutputSink;

// Init



// Statics




// Export

exports.default = OutputSink;