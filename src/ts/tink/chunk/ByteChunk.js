// Class: tink.chunk.ByteChunk

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
function tink__$Chunk_Chunk_$Impl_$() {return require("./../../tink/_Chunk/Chunk_Impl_");}

// Constructor

var ByteChunk = function(data,from,to) {
	this.data = data;
	this.from = from;
	this.to = to;
}

// Meta

ByteChunk.__name__ = "tink.chunk.ByteChunk";
ByteChunk.__interfaces__ = [(tink_chunk_ChunkObject().default)];
ByteChunk.__super__ = (tink_chunk_ChunkBase().default);
ByteChunk.prototype = $extend((tink_chunk_ChunkBase().default).prototype, {
	get_wrapped: function() {
		if(this.wrapped == null) {
			this.wrapped = (haxe_io_Bytes().default).ofData(this.data);
		}
		return this.wrapped;
	},
	getByte: function(index) {
		return this.data.bytes[this.from + index];
	},
	flatten: function(into) {
		into.push(this);
	},
	getLength: function() {
		return this.to - this.from;
	},
	getSlice: function(from,to) {
		if(to > this.to - this.from) {
			to = this.to - this.from;
		}
		if(from < 0) {
			from = 0;
		}
		if(to <= from) {
			return null;
		} else if(to == this.to - this.from && from == 0) {
			return this;
		} else {
			return new ByteChunk(this.data,this.from + from,to + this.from);
		}
	},
	slice: function(from,to) {
		var _g = this.getSlice(from,to);
		if(_g == null) {
			return (tink__$Chunk_Chunk_$Impl_$().default).EMPTY;
		} else {
			var v = _g;
			return v;
		}
	},
	blitTo: function(target,offset) {
		if(this.wrapped == null) {
			this.wrapped = (haxe_io_Bytes().default).ofData(this.data);
		}
		target.blit(offset,this.wrapped,this.from,this.to - this.from);
	},
	toBytes: function() {
		if(this.wrapped == null) {
			this.wrapped = (haxe_io_Bytes().default).ofData(this.data);
		}
		return this.wrapped.sub(this.from,this.to - this.from);
	},
	toString: function() {
		if(this.wrapped == null) {
			this.wrapped = (haxe_io_Bytes().default).ofData(this.data);
		}
		return this.wrapped.getString(this.from,this.to - this.from);
	}
});
ByteChunk.prototype.__class__ = ByteChunk.prototype.constructor = $hxClasses["tink.chunk.ByteChunk"] = ByteChunk;

// Init



// Statics

ByteChunk.of = function(b) {
	if(b.length == 0) {
		return (tink__$Chunk_Chunk_$Impl_$().default).EMPTY;
	}
	var ret = new ByteChunk(b.b.bufferValue,0,b.length);
	ret.wrapped = b;
	return ret;
}


// Export

exports.default = ByteChunk;