// Class: tink._Chunk.EmptyChunk

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function tink_chunk_ChunkObject() {return require("./../../tink/chunk/ChunkObject");}
function tink_chunk_ChunkBase() {return require("./../../tink/chunk/ChunkBase");}
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}

// Constructor

var EmptyChunk = function() {
}

// Meta

EmptyChunk.__name__ = "tink._Chunk.EmptyChunk";
EmptyChunk.__interfaces__ = [(tink_chunk_ChunkObject().default)];
EmptyChunk.__super__ = (tink_chunk_ChunkBase().default);
EmptyChunk.prototype = $extend((tink_chunk_ChunkBase().default).prototype, {
	getLength: function() {
		return 0;
	},
	slice: function(from,to) {
		return this;
	},
	blitTo: function(target,offset) {
	},
	toString: function() {
		return "";
	},
	toBytes: function() {
		return EmptyChunk.EMPTY;
	}
});
EmptyChunk.prototype.__class__ = EmptyChunk.prototype.constructor = $hxClasses["tink._Chunk.EmptyChunk"] = EmptyChunk;

// Init



// Statics


EmptyChunk.EMPTY = new (haxe_io_Bytes().default)(new ArrayBuffer(0))

// Export

exports.default = EmptyChunk;