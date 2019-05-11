// Class: tink.io.Splitter

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function tink_io_BytewiseParser() {return require("./../../tink/io/BytewiseParser");}
function tink_io_ParseStep() {return require("./../../tink/io/ParseStep");}
function haxe_ds_Option() {return require("./../../haxe/ds/Option");}
function tink__$Chunk_Chunk_$Impl_$() {return require("./../../tink/_Chunk/Chunk_Impl_");}
function tink_chunk_ByteChunk() {return require("./../../tink/chunk/ByteChunk");}
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}

// Constructor

var Splitter = function(delim) {
	this.buf = (tink__$Chunk_Chunk_$Impl_$().default).EMPTY;
	this.delim = delim;
}

// Meta

Splitter.__name__ = "tink.io.Splitter";
Splitter.__super__ = (tink_io_BytewiseParser().default);
Splitter.prototype = $extend((tink_io_BytewiseParser().default).prototype, {
	read: function(char) {
		if(char == -1) {
			return (tink_io_ParseStep().default).Done((haxe_ds_Option().default).None);
		}
		this.buf = (tink__$Chunk_Chunk_$Impl_$().default).catChunk(this.buf,(tink_chunk_ByteChunk().default).of((haxe_io_Bytes().default).ofString(String.fromCodePoint(char))));
		if(this.buf.getLength() >= this.delim.getLength()) {
			var bcursor = this.buf.getCursor();
			var delta = this.buf.getLength() - this.delim.getLength();
			bcursor.moveTo(bcursor.currentPos + delta);
			var dcursor = this.delim.getCursor();
			var _g = 0;
			var _g1 = this.delim.getLength();
			while(_g < _g1) {
				var i = _g++;
				if(bcursor.currentByte != dcursor.currentByte) {
					return (tink_io_ParseStep().default).Progressed;
				} else {
					bcursor.next();
					dcursor.next();
				}
			}
			var out = (tink_io_ParseStep().default).Done((haxe_ds_Option().default).Some(this.buf.slice(0,bcursor.currentPos - this.delim.getLength())));
			this.buf = (tink__$Chunk_Chunk_$Impl_$().default).EMPTY;
			return out;
		} else {
			return (tink_io_ParseStep().default).Progressed;
		}
	}
});
Splitter.prototype.__class__ = Splitter.prototype.constructor = $hxClasses["tink.io.Splitter"] = Splitter;

// Init



// Statics




// Export

exports.default = Splitter;