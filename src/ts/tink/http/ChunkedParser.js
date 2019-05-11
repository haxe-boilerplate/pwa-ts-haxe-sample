// Class: tink.http.ChunkedParser

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function tink_io_StreamParserObject() {return require("./../../tink/io/StreamParserObject");}
function Std() {return require("./../../Std");}
function tink_io_ParseStep() {return require("./../../tink/io/ParseStep");}
function tink_core_TypedError() {return require("./../../tink/core/TypedError");}
function tink_core_Outcome() {return require("./../../tink/core/Outcome");}
function tink__$Chunk_Chunk_$Impl_$() {return require("./../../tink/_Chunk/Chunk_Impl_");}
function tink_chunk__$Seekable_Seekable_$Impl_$() {return require("./../../tink/chunk/_Seekable/Seekable_Impl_");}
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}

// Constructor

var ChunkedParser = function() {
	this.reset();
}

// Meta

ChunkedParser.__name__ = "tink.http.ChunkedParser";
ChunkedParser.__interfaces__ = [(tink_io_StreamParserObject().default)];
ChunkedParser.prototype = {
	reset: function() {
		this.chunkSize = -1;
	},
	progress: function(cursor) {
		if(this.chunkSize < 0) {
			var _g = cursor.seek(ChunkedParser.LINEBREAK);
			switch(_g._hx_index) {
			case 0:
				var v = _g.v;
				this.chunkSize = (Std().default).parseInt("0x" + v.toString());
				break;
			case 1:
				break;
			}
			return (tink_io_ParseStep().default).Progressed;
		} else if(this.chunkSize == 0) {
			return (tink_io_ParseStep().default).Progressed;
		} else if(cursor.length >= this.chunkSize + 2) {
			var _g1 = cursor.seek(ChunkedParser.LINEBREAK);
			switch(_g1._hx_index) {
			case 0:
				var v1 = _g1.v;
				this.reset();
				return (tink_io_ParseStep().default).Done(v1);
			case 1:
				return (tink_io_ParseStep().default).Failed(new (tink_core_TypedError().default)(null,"Invalid encoding",{ fileName : "tink/http/Chunked.hx", lineNumber : 82, className : "tink.http.ChunkedParser", methodName : "progress"}));
			}
		} else {
			return (tink_io_ParseStep().default).Progressed;
		}
	},
	eof: function(rest) {
		if(this.chunkSize == 0) {
			return (tink_core_Outcome().default).Success((tink__$Chunk_Chunk_$Impl_$().default).EMPTY);
		} else {
			return (tink_core_Outcome().default).Failure(new (tink_core_TypedError().default)(null,"Unexpected end of input",{ fileName : "tink/http/Chunked.hx", lineNumber : 89, className : "tink.http.ChunkedParser", methodName : "eof"}));
		}
	}
};
ChunkedParser.prototype.__class__ = ChunkedParser.prototype.constructor = $hxClasses["tink.http.ChunkedParser"] = ChunkedParser;

// Init



// Statics


ChunkedParser.LINEBREAK = (tink_chunk__$Seekable_Seekable_$Impl_$().default).ofBytes((haxe_io_Bytes().default).ofString("\r\n"))

// Export

exports.default = ChunkedParser;