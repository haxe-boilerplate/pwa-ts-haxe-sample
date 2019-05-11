// Class: tink.chunk.ChunkIterator

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Constructor

var ChunkIterator = function(target) {
	this.target = target;
	this._hasNext = target.length > target.currentPos;
}

// Meta

ChunkIterator.__name__ = "tink.chunk.ChunkIterator";
ChunkIterator.prototype = {
	hasNext: function() {
		return this._hasNext;
	},
	next: function() {
		var ret = this.target.currentByte;
		this._hasNext = this.target.next();
		return ret;
	}
};
ChunkIterator.prototype.__class__ = ChunkIterator.prototype.constructor = $hxClasses["tink.chunk.ChunkIterator"] = ChunkIterator;

// Init



// Statics




// Export

exports.default = ChunkIterator;