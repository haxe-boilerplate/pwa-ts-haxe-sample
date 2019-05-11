// Class: tink.http.ChunkedEncoder

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function tink_io_Transformer() {return require("./../../tink/io/Transformer");}
function tink_io__$Source_Source_$Impl_$() {return require("./../../tink/io/_Source/Source_Impl_");}
function tink_streams__$Stream_Mapping_$Impl_$() {return require("./../../tink/streams/_Stream/Mapping_Impl_");}
function tink__$Chunk_Chunk_$Impl_$() {return require("./../../tink/_Chunk/Chunk_Impl_");}
function tink_chunk_ByteChunk() {return require("./../../tink/chunk/ByteChunk");}
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}
function StringTools() {return require("./../../StringTools");}
function tink_streams__$Stream_Stream_$Impl_$() {return require("./../../tink/streams/_Stream/Stream_Impl_");}
function HxOverrides() {return require("./../../HxOverrides");}

// Constructor

var ChunkedEncoder = function() {
}

// Meta

ChunkedEncoder.__name__ = "tink.http.ChunkedEncoder";
ChunkedEncoder.__interfaces__ = [(tink_io_Transformer().default)];
ChunkedEncoder.prototype = {
	transform: function(source) {
		return (tink_io__$Source_Source_$Impl_$().default).chunked(source).map((tink_streams__$Stream_Mapping_$Impl_$().default).ofPlain(function(chunk) {
			return (tink__$Chunk_Chunk_$Impl_$().default).catChunk((tink__$Chunk_Chunk_$Impl_$().default).catChunk((tink_chunk_ByteChunk().default).of((haxe_io_Bytes().default).ofString("" + (StringTools().default).hex(chunk.getLength()) + "\r\n")),chunk),(tink_chunk_ByteChunk().default).of((haxe_io_Bytes().default).ofString("\r\n")));
		})).append((tink_streams__$Stream_Stream_$Impl_$().default).ofIterator((HxOverrides().default).iter([(tink_chunk_ByteChunk().default).of((haxe_io_Bytes().default).ofString("0\r\n"))])));
	}
};
ChunkedEncoder.prototype.__class__ = ChunkedEncoder.prototype.constructor = $hxClasses["tink.http.ChunkedEncoder"] = ChunkedEncoder;

// Init



// Statics




// Export

exports.default = ChunkedEncoder;