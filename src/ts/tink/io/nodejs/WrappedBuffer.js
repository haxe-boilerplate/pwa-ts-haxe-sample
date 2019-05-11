// Class: tink.io.nodejs.WrappedBuffer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function tink_chunk_ChunkObject() {return require("./../../../tink/chunk/ChunkObject");}
function tink_chunk_ByteChunk() {return require("./../../../tink/chunk/ByteChunk");}
function js_node_buffer__$Buffer_Helper() {return require("./../../../js/node/buffer/_Buffer/Helper");}
function js_node_buffer_Buffer() {return require("buffer");}

// Constructor

var WrappedBuffer = function(buffer) {
	this.buffer = buffer;
}

// Meta

WrappedBuffer.__name__ = "tink.io.nodejs.WrappedBuffer";
WrappedBuffer.__interfaces__ = [(tink_chunk_ChunkObject().default)];
WrappedBuffer.prototype = {
	getCursor: function() {
		return (tink_chunk_ByteChunk().default).of(this.toBytes()).getCursor();
	},
	flatten: function(into) {
		(tink_chunk_ByteChunk().default).of(this.toBytes()).flatten(into);
	},
	getLength: function() {
		return this.buffer.length;
	},
	slice: function(from,to) {
		return new WrappedBuffer(this.buffer.slice(from,to));
	},
	toString: function() {
		return this.buffer.toString();
	},
	toBytes: function() {
		var copy = WrappedBuffer.alloc(this.buffer.length);
		this.buffer.copy(copy);
		return (js_node_buffer__$Buffer_Helper().default).bytesOfBuffer(copy);
	},
	blitTo: function(target,offset) {
		var data = target.b;
		this.buffer.copy((js_node_buffer_Buffer().Buffer).from(data.buffer,data.byteOffset,target.length),offset);
		return;
	}
};
WrappedBuffer.prototype.__class__ = WrappedBuffer.prototype.constructor = $hxClasses["tink.io.nodejs.WrappedBuffer"] = WrappedBuffer;

// Init



// Statics


WrappedBuffer.alloc = "allocUnsafe" in Buffer ? (js_node_buffer_Buffer().Buffer).allocUnsafe : function(size) {
	return new (js_node_buffer_Buffer().Buffer)(size);
}

// Export

exports.default = WrappedBuffer;