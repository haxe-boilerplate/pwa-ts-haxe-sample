// Class: tink.io.std.InputSource

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
var $extend = require("./../../../extend_stub").default;
function tink_streams_Generator() {return require("./../../../tink/streams/Generator");}
function tink_core__$Future_Future_$Impl_$() {return require("./../../../tink/core/_Future/Future_Impl_");}
function tink_io__$Worker_Worker_$Impl_$() {return require("./../../../tink/io/_Worker/Worker_Impl_");}
function tink_core__$Lazy_LazyFunc() {return require("./../../../tink/core/_Lazy/LazyFunc");}
function tink_streams_Step() {return require("./../../../tink/streams/Step");}
function tink__$Chunk_Chunk_$Impl_$() {return require("./../../../tink/_Chunk/Chunk_Impl_");}
function haxe_io_Bytes() {return require("./../../../haxe/io/Bytes");}
function tink_chunk_ByteChunk() {return require("./../../../tink/chunk/ByteChunk");}
function js__$Boot_HaxeError() {return require("./../../../js/_Boot/HaxeError");}
function haxe_io_Eof() {return require("./../../../haxe/io/Eof");}
function js_Boot() {return require("./../../../js/Boot");}
function haxe_io_Error() {return require("./../../../haxe/io/Error");}
function tink_core_TypedError() {return require("./../../../tink/core/TypedError");}

// Constructor

var InputSource = function(name,target,worker,buf,offset) {
	var next = function(buf1,offset1) {
		return new InputSource(name,target,worker,buf1,offset1);
	};
	var free = buf.length - offset;
	(tink_streams_Generator().default).call(this,(tink_core__$Future_Future_$Impl_$().default).async(function(cb) {
		(tink_io__$Worker_Worker_$Impl_$().default).work(worker,new (tink_core__$Lazy_LazyFunc().default)(function() {
			try {
				var read = target.readBytes(buf,offset,free);
				if(read == 0) {
					return (tink_streams_Step().default).Link((tink__$Chunk_Chunk_$Impl_$().default).EMPTY,next(buf,offset));
				} else {
					var nextOffset = free - read < 1024 ? 0 : offset + read;
					var nextBuf = nextOffset == 0 ? new (haxe_io_Bytes().default)(new ArrayBuffer(buf.length)) : buf;
					return (tink_streams_Step().default).Link((tink_chunk_ByteChunk().default).of(buf).slice(offset,offset + read),next(nextBuf,nextOffset));
				}
			} catch( e ) {
				var e1 = ((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e;
				if(((e1) instanceof (haxe_io_Eof().default))) {
					var e2 = e1;
					return (tink_streams_Step().default).End;
				} else if((js_Boot().default).__instanceof(e1,(haxe_io_Error().default))) {
					var e3 = e1;
					if(e3._hx_index == 0) {
						return (tink_streams_Step().default).Link((tink__$Chunk_Chunk_$Impl_$().default).EMPTY,next(buf,offset));
					} else {
						return (tink_streams_Step().default).Fail((tink_core_TypedError().default).withData(null,"Failed to read from " + name,e3,{ fileName : "tink/io/std/InputSource.hx", lineNumber : 50, className : "tink.io.std.InputSource", methodName : "new"}));
					}
				} else {
					throw e;
				}
			}
		})).handle(function(step) {
			switch(step._hx_index) {
			case 1:case 2:
				try {
					target.close();
				} catch( e4 ) {
					var e5 = ((e4) instanceof (js__$Boot_HaxeError().default)) ? e4.val : e4;
				}
				break;
			default:
			}
			cb(step);
		});
	},true));
}

// Meta

InputSource.__name__ = ["tink","io","std","InputSource"];
InputSource.__super__ = (tink_streams_Generator().default);
InputSource.prototype = $extend((tink_streams_Generator().default).prototype, {
	
});
InputSource.prototype.__class__ = InputSource.prototype.constructor = $hxClasses["tink.io.std.InputSource"] = InputSource;

// Init



// Statics




// Export

exports.default = InputSource;