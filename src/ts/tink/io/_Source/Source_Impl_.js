// Class: tink.io._Source.Source_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function tink_streams_Empty() {return require("./../../../tink/streams/Empty");}
function tink_io_nodejs_NodejsSource() {return require("./../../../tink/io/nodejs/NodejsSource");}
function js_node_stream_PassThrough() {return require("stream");}
function tink_streams__$Stream_Handler_$Impl_$() {return require("./../../../tink/streams/_Stream/Handler_Impl_");}
function js_node_buffer_Buffer() {return require("buffer");}
function tink_core__$Future_SyncFuture() {return require("./../../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}
function tink_streams_Handled() {return require("./../../../tink/streams/Handled");}
function tink_io_js_BlobSource() {return require("./../../../tink/io/js/BlobSource");}
function tink_io__$Worker_Worker_$Impl_$() {return require("./../../../tink/io/_Worker/Worker_Impl_");}
function tink_io_std_InputSource() {return require("./../../../tink/io/std/InputSource");}
function haxe_io_Bytes() {return require("./../../../haxe/io/Bytes");}
function tink_streams__$Stream_Stream_$Impl_$() {return require("./../../../tink/streams/_Stream/Stream_Impl_");}
function tink__$Chunk_Chunk_$Impl_$() {return require("./../../../tink/_Chunk/Chunk_Impl_");}
function tink_streams__$Stream_Reducer_$Impl_$() {return require("./../../../tink/streams/_Stream/Reducer_Impl_");}
function tink_streams_ReductionStep() {return require("./../../../tink/streams/ReductionStep");}
function tink_streams__$Stream_Regrouper_$Impl_$() {return require("./../../../tink/streams/_Stream/Regrouper_Impl_");}
function tink_streams_RegroupResult() {return require("./../../../tink/streams/RegroupResult");}
function haxe_ds_Option() {return require("./../../../haxe/ds/Option");}
function tink_streams_Single() {return require("./../../../tink/streams/Single");}
function tink_chunk_ByteChunk() {return require("./../../../tink/chunk/ByteChunk");}

// Constructor

var Source_Impl_ = function(){}

// Meta

Source_Impl_.__name__ = "tink.io._Source.Source_Impl_";
Source_Impl_.prototype = {
	
};
Source_Impl_.prototype.__class__ = Source_Impl_.prototype.constructor = $hxClasses["tink.io._Source.Source_Impl_"] = Source_Impl_;

// Init



// Statics

Source_Impl_.dirty = function(this1) {
	return this1;
}
Source_Impl_.get_depleted = function(this1) {
	return this1.get_depleted();
}
Source_Impl_.ofNodeStream = function(name,r,options) {
	if(options == null) {
		options = { };
	}
	return (tink_io_nodejs_NodejsSource().default).wrap(name,r,options.chunkSize,options.onEnd);
}
Source_Impl_.toNodeStream = function(this1) {
	var native = new (js_node_stream_PassThrough().PassThrough)();
	var source = Source_Impl_.chunked(this1);
	var write = null;
	write = function() {
		source.forEach((tink_streams__$Stream_Handler_$Impl_$().default).ofSafe(function(chunk) {
			var b = chunk.toBytes();
			var data = b.b;
			var ok = (js_node_buffer_Buffer().Buffer).from(data.buffer,data.byteOffset,b.length);
			var ok1 = native.write(ok);
			if(ok1) {
				return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_streams_Handled().default).Resume));
			} else {
				return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_streams_Handled().default).Finish));
			}
		})).handle(function(o) {
			switch(o._hx_index) {
			case 0:
				var rest = o.rest;
				source = rest;
				native.once("drain",write);
				break;
			case 2:
				var e = o.error;
				native.emit("error",new Error(e.message));
				break;
			case 3:
				native.end();
				break;
			}
		});
	};
	write();
	return native;
}
Source_Impl_.ofJsFile = function(name,file,options) {
	var chunkSize = options == null || options.chunkSize == null ? 4096 : options.chunkSize;
	return new (tink_io_js_BlobSource().default)(name,file,0,chunkSize);
}
Source_Impl_.ofJsBlob = function(name,blob,options) {
	var chunkSize = options == null || options.chunkSize == null ? 4096 : options.chunkSize;
	return new (tink_io_js_BlobSource().default)(name,blob,0,chunkSize);
}
Source_Impl_.ofInput = function(name,input,options) {
	if(options == null) {
		options = { };
	}
	var tmp = (tink_io__$Worker_Worker_$Impl_$().default).ensure(options.worker);
	var length;
	var _g = options.chunkSize;
	if(_g == null) {
		length = 65536;
	} else {
		var v = _g;
		length = v;
	}
	return new (tink_io_std_InputSource().default)(name,input,tmp,new (haxe_io_Bytes().default)(new ArrayBuffer(length)),0);
}
Source_Impl_.chunked = function(this1) {
	return this1;
}
Source_Impl_.ofError = function(e) {
	return (tink_streams__$Stream_Stream_$Impl_$().default).ofError(e);
}
Source_Impl_.ofFuture = function(f) {
	return (tink_streams__$Stream_Stream_$Impl_$().default).flatten(f);
}
Source_Impl_.ofPromised = function(p) {
	var ret = p.map(function(o) {
		switch(o._hx_index) {
		case 0:
			var s = o.data;
			return s;
		case 1:
			var e = o.failure;
			return Source_Impl_.ofError(e);
		}
	});
	return (tink_streams__$Stream_Stream_$Impl_$().default).flatten(ret.gather());
}
Source_Impl_.concatAll = function(s) {
	return s.reduce((tink__$Chunk_Chunk_$Impl_$().default).EMPTY,(tink_streams__$Stream_Reducer_$Impl_$().default).ofSafe(function(res,cur) {
		return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_streams_ReductionStep().default).Progress((tink__$Chunk_Chunk_$Impl_$().default).catChunk(res,cur))));
	}));
}
Source_Impl_.pipeTo = function(this1,target,options) {
	return target.consume(this1,options);
}
Source_Impl_.append = function(this1,that) {
	return this1.append(that);
}
Source_Impl_.prepend = function(this1,that) {
	return this1.prepend(that);
}
Source_Impl_.transform = function(this1,transformer) {
	return transformer.transform(this1);
}
Source_Impl_.skip = function(this1,len) {
	return this1.regroup((tink_streams__$Stream_Regrouper_$Impl_$().default).ofIgnoranceSync(function(chunks) {
		var chunk = chunks[0];
		if(len <= 0) {
			return (tink_streams_RegroupResult().default).Converted((tink_streams__$Stream_Stream_$Impl_$().default).single(chunk));
		}
		var length = chunk.getLength();
		var out = (tink_streams_RegroupResult().default).Converted(len < length ? (tink_streams__$Stream_Stream_$Impl_$().default).single(chunk.slice(len,length)) : (tink_streams_Empty().default).inst);
		len -= length;
		return out;
	}));
}
Source_Impl_.limit = function(this1,len) {
	if(len == 0) {
		return Source_Impl_.EMPTY;
	}
	return this1.regroup((tink_streams__$Stream_Regrouper_$Impl_$().default).ofIgnoranceSync(function(chunks) {
		if(len <= 0) {
			return (tink_streams_RegroupResult().default).Terminated((haxe_ds_Option().default).None);
		}
		var chunk = chunks[0];
		var length = chunk.getLength();
		var out = len == length ? (tink_streams_RegroupResult().default).Terminated((haxe_ds_Option().default).Some((tink_streams__$Stream_Stream_$Impl_$().default).single(chunk))) : (tink_streams_RegroupResult().default).Converted((tink_streams__$Stream_Stream_$Impl_$().default).single(len < length ? chunk.slice(0,len) : chunk));
		len -= length;
		return out;
	}));
}
Source_Impl_.ofChunk = function(chunk) {
	return new (tink_streams_Single().default)(new (tink_core__$Lazy_LazyConst().default)(chunk));
}
Source_Impl_.ofString = function(s) {
	return new (tink_streams_Single().default)(new (tink_core__$Lazy_LazyConst().default)((tink_chunk_ByteChunk().default).of((haxe_io_Bytes().default).ofString(s))));
}
Source_Impl_.ofBytes = function(b) {
	return new (tink_streams_Single().default)(new (tink_core__$Lazy_LazyConst().default)((tink_chunk_ByteChunk().default).of(b)));
}
Source_Impl_.EMPTY = (tink_streams_Empty().default).inst

// Export

exports.default = Source_Impl_;