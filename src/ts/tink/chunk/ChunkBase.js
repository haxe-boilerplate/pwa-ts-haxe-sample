// Class: tink.chunk.ChunkBase

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function tink_chunk_ChunkCursor() {return require("./../../tink/chunk/ChunkCursor");}

// Constructor

var ChunkBase = function(){}

// Meta

ChunkBase.__name__ = "tink.chunk.ChunkBase";
ChunkBase.prototype = {
	getCursor: function() {
		if(this.flattened == null) {
			this.flatten(this.flattened = []);
		}
		return (tink_chunk_ChunkCursor().default).create(this.flattened.slice());
	},
	flatten: function(into) {
	}
};
ChunkBase.prototype.__class__ = ChunkBase.prototype.constructor = $hxClasses["tink.chunk.ChunkBase"] = ChunkBase;

// Init



// Statics




// Export

exports.default = ChunkBase;