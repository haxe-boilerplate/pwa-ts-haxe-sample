// Class: tink.http.Chunked

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function tink_http_ChunkedEncoder() {return require("./../../tink/http/ChunkedEncoder");}
function tink_http_ChunkedDecoder() {return require("./../../tink/http/ChunkedDecoder");}

// Constructor

var Chunked = function(){}

// Meta

Chunked.__name__ = "tink.http.Chunked";
Chunked.prototype = {
	
};
Chunked.prototype.__class__ = Chunked.prototype.constructor = $hxClasses["tink.http.Chunked"] = Chunked;

// Init



// Statics

Chunked.encoder = function() {
	if(Chunked._encoder == null) {
		Chunked._encoder = new (tink_http_ChunkedEncoder().default)();
	}
	return Chunked._encoder;
}
Chunked.decoder = function() {
	if(Chunked._decoder == null) {
		Chunked._decoder = new (tink_http_ChunkedDecoder().default)();
	}
	return Chunked._decoder;
}
Chunked.encode = function(source) {
	return Chunked.encoder().transform(source);
}
Chunked.decode = function(source) {
	return Chunked.decoder().transform(source);
}


// Export

exports.default = Chunked;