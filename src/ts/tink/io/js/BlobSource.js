// Class: tink.io.js.BlobSource

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
var $extend = require("./../../../extend_stub").default;
function tink_streams_Generator() {return require("./../../../tink/streams/Generator");}
function tink_core__$Future_Future_$Impl_$() {return require("./../../../tink/core/_Future/Future_Impl_");}
function tink_streams_Step() {return require("./../../../tink/streams/Step");}
function tink_chunk_ByteChunk() {return require("./../../../tink/chunk/ByteChunk");}
function haxe_io_Bytes() {return require("./../../../haxe/io/Bytes");}
function tink_core_TypedError() {return require("./../../../tink/core/TypedError");}

// Constructor

var BlobSource = function(name,blob,pos,chunkSize) {
	this.name = name;
	(tink_streams_Generator().default).call(this,(tink_core__$Future_Future_$Impl_$().default).async(function(cb) {
		if(pos >= blob.size) {
			cb((tink_streams_Step().default).End);
		} else {
			var end = pos + chunkSize;
			if(end > blob.size) {
				end = blob.size;
			}
			var reader = new FileReader();
			reader.onload = function() {
				var chunk = (tink_chunk_ByteChunk().default).of((haxe_io_Bytes().default).ofData(reader.result));
				var tmp = (tink_streams_Step().default).Link(chunk,new BlobSource(name,blob,end,chunkSize));
				cb(tmp);
			};
			reader.onerror = function(e) {
				var tmp1 = (tink_streams_Step().default).Fail((tink_core_TypedError().default).withData(500,e.message,e,{ fileName : "tink/io/js/BlobSource.hx", lineNumber : 27, className : "tink.io.js.BlobSource", methodName : "new"}));
				cb(tmp1);
			};
			var tmp2 = blob.slice(pos,end);
			reader.readAsArrayBuffer(tmp2);
		}
	},true));
}

// Meta

BlobSource.__name__ = ["tink","io","js","BlobSource"];
BlobSource.__super__ = (tink_streams_Generator().default);
BlobSource.prototype = $extend((tink_streams_Generator().default).prototype, {
	
});
BlobSource.prototype.__class__ = BlobSource.prototype.constructor = $hxClasses["tink.io.js.BlobSource"] = BlobSource;

// Init



// Statics

BlobSource.wrap = function(name,blob,chunkSize) {
	return new BlobSource(name,blob,0,chunkSize);
}


// Export

exports.default = BlobSource;