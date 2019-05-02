// Class: tink._Chunk.Chunk_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function tink__$Chunk_CompoundChunk() {return require("./../../tink/_Chunk/CompoundChunk");}
function tink_chunk_ChunkIterator() {return require("./../../tink/chunk/ChunkIterator");}
function tink_chunk_ByteChunk() {return require("./../../tink/chunk/ByteChunk");}
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}
function Std() {return require("./../../Std");}
function HxOverrides() {return require("./../../HxOverrides");}
function tink__$Chunk_EmptyChunk() {return require("./../../tink/_Chunk/EmptyChunk");}

// Constructor

var Chunk_Impl_ = function(){}

// Meta

Chunk_Impl_.__name__ = ["tink","_Chunk","Chunk_Impl_"];
Chunk_Impl_.prototype = {
	
};
Chunk_Impl_.prototype.__class__ = Chunk_Impl_.prototype.constructor = $hxClasses["tink._Chunk.Chunk_Impl_"] = Chunk_Impl_;

// Init



// Statics

Chunk_Impl_.get_length = function(this1) {
	return this1.getLength();
}
Chunk_Impl_.concat = function(this1,that) {
	var _g = that.getLength();
	if(this1.getLength() == 0) {
		if(_g == 0) {
			return Chunk_Impl_.EMPTY;
		} else {
			return that;
		}
	} else if(_g == 0) {
		return this1;
	} else {
		return new (tink__$Chunk_CompoundChunk().default)(this1,that);
	}
}
Chunk_Impl_.cursor = function(this1) {
	return this1.getCursor();
}
Chunk_Impl_.iterator = function(this1) {
	return new (tink_chunk_ChunkIterator().default)(this1.getCursor());
}
Chunk_Impl_.slice = function(this1,from,to) {
	return this1.slice(from,to);
}
Chunk_Impl_.blitTo = function(this1,target,offset) {
	this1.blitTo(target,offset);
	return;
}
Chunk_Impl_.toHex = function(this1) {
	return this1.toBytes().toHex();
}
Chunk_Impl_.toString = function(this1) {
	return this1.toString();
}
Chunk_Impl_.toBytes = function(this1) {
	return this1.toBytes();
}
Chunk_Impl_.join = function(chunks) {
	if(chunks == null) {
		return Chunk_Impl_.EMPTY;
	} else {
		switch(chunks.length) {
		case 0:
			return Chunk_Impl_.EMPTY;
		case 1:
			var v = chunks[0];
			return v;
		default:
			var v1 = chunks;
			var ret = Chunk_Impl_.catChunk(v1[0],v1[1]);
			var _g = 2;
			var _g1 = v1.length;
			while(_g < _g1) {
				var i = _g++;
				ret = Chunk_Impl_.catChunk(ret,v1[i]);
			}
			return ret;
		}
	}
}
Chunk_Impl_.ofBytes = function(b) {
	return (tink_chunk_ByteChunk().default).of(b);
}
Chunk_Impl_.ofString = function(s) {
	return (tink_chunk_ByteChunk().default).of((haxe_io_Bytes().default).ofString(s));
}
Chunk_Impl_.ofHex = function(s) {
	var length = s.length >> 1;
	var bytes = new (haxe_io_Bytes().default)(new ArrayBuffer(length));
	var _g = 0;
	var _g1 = length;
	while(_g < _g1) {
		var i = _g++;
		bytes.b[i] = (Std().default).parseInt("0x" + (HxOverrides().default).substr(s,i * 2,2));
	}
	return (tink_chunk_ByteChunk().default).of(bytes);
}
Chunk_Impl_.catChunk = function(a,b) {
	return Chunk_Impl_.concat(a,b);
}
Chunk_Impl_.rcatString = function(a,b) {
	return Chunk_Impl_.catChunk(a,(tink_chunk_ByteChunk().default).of((haxe_io_Bytes().default).ofString(b)));
}
Chunk_Impl_.lcatString = function(a,b) {
	return Chunk_Impl_.catChunk((tink_chunk_ByteChunk().default).of((haxe_io_Bytes().default).ofString(a)),b);
}
Chunk_Impl_.lcatBytes = function(a,b) {
	return Chunk_Impl_.catChunk((tink_chunk_ByteChunk().default).of(a),b);
}
Chunk_Impl_.rcatBytes = function(a,b) {
	return Chunk_Impl_.catChunk(a,(tink_chunk_ByteChunk().default).of(b));
}
Chunk_Impl_.EMPTY = new (tink__$Chunk_EmptyChunk().default)()

// Export

exports.default = Chunk_Impl_;