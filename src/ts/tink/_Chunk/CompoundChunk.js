// Class: tink._Chunk.CompoundChunk

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
function tink__$Chunk_Chunk_$Impl_$() {return require("./../../tink/_Chunk/Chunk_Impl_");}
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}

// Constructor

var CompoundChunk = function(left,right) {
	this.left = left;
	this.right = right;
	this.split = left.getLength();
	this.length = this.split + right.getLength();
}

// Meta

CompoundChunk.__name__ = "tink._Chunk.CompoundChunk";
CompoundChunk.__interfaces__ = [(tink_chunk_ChunkObject().default)];
CompoundChunk.__super__ = (tink_chunk_ChunkBase().default);
CompoundChunk.prototype = $extend((tink_chunk_ChunkBase().default).prototype, {
	getLength: function() {
		return this.length;
	},
	flatten: function(into) {
		this.left.flatten(into);
		this.right.flatten(into);
	},
	slice: function(from,to) {
		return (tink__$Chunk_Chunk_$Impl_$().default).concat(this.left.slice(from,to),this.right.slice(from - this.split,to - this.split));
	},
	blitTo: function(target,offset) {
		this.left.blitTo(target,offset);
		this.right.blitTo(target,offset + this.split);
	},
	toString: function() {
		return this.toBytes().toString();
	},
	toBytes: function() {
		var ret = new (haxe_io_Bytes().default)(new ArrayBuffer(this.length));
		this.blitTo(ret,0);
		return ret;
	}
});
CompoundChunk.prototype.__class__ = CompoundChunk.prototype.constructor = $hxClasses["tink._Chunk.CompoundChunk"] = CompoundChunk;

// Init



// Statics




// Export

exports.default = CompoundChunk;