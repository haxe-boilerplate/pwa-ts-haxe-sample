// Class: tink.http.ChunkedDecoder

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function tink_io_Transformer() {return require("./../../tink/io/Transformer");}
function tink_io_RealSourceTools() {return require("./../../tink/io/RealSourceTools");}
function tink_http_ChunkedParser() {return require("./../../tink/http/ChunkedParser");}
function tink_streams__$Stream_Mapping_$Impl_$() {return require("./../../tink/streams/_Stream/Mapping_Impl_");}
function tink__$Chunk_Chunk_$Impl_$() {return require("./../../tink/_Chunk/Chunk_Impl_");}

// Constructor

var ChunkedDecoder = function() {
}

// Meta

ChunkedDecoder.__name__ = ["tink","http","ChunkedDecoder"];
ChunkedDecoder.__interfaces__ = [(tink_io_Transformer().default)];
ChunkedDecoder.prototype = {
	transform: function(source) {
		return (tink_io_RealSourceTools().default).parseStream(source,new (tink_http_ChunkedParser().default)()).map((tink_streams__$Stream_Mapping_$Impl_$().default).ofPlain(function(v) {
			if(v == null) {
				return (tink__$Chunk_Chunk_$Impl_$().default).EMPTY;
			} else {
				return v;
			}
		}));
	}
};
ChunkedDecoder.prototype.__class__ = ChunkedDecoder.prototype.constructor = $hxClasses["tink.http.ChunkedDecoder"] = ChunkedDecoder;

// Init



// Statics




// Export

exports.default = ChunkedDecoder;