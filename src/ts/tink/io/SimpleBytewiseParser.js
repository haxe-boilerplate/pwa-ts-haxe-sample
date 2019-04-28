// Class: tink.io.SimpleBytewiseParser

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $extend = require("./../../extend_stub").default;
function tink_io_BytewiseParser() {return require("./../../tink/io/BytewiseParser");}

// Constructor

var SimpleBytewiseParser = function(f) {
	this._read = f;
}

// Meta

SimpleBytewiseParser.__name__ = ["tink","io","SimpleBytewiseParser"];
SimpleBytewiseParser.__super__ = (tink_io_BytewiseParser().default);
SimpleBytewiseParser.prototype = $extend((tink_io_BytewiseParser().default).prototype, {
	read: function(char) {
		return this._read(char);
	}
});
SimpleBytewiseParser.prototype.__class__ = SimpleBytewiseParser.prototype.constructor = $hxClasses["tink.io.SimpleBytewiseParser"] = SimpleBytewiseParser;

// Init



// Statics




// Export

exports.default = SimpleBytewiseParser;