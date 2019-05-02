// Class: tink.io.BytewiseParser

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function tink_io_StreamParserObject() {return require("./../../tink/io/StreamParserObject");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function tink_io_ParseStep() {return require("./../../tink/io/ParseStep");}
function tink_core_Outcome() {return require("./../../tink/core/Outcome");}
function tink_core_TypedError() {return require("./../../tink/core/TypedError");}

// Constructor

var BytewiseParser = function(){}

// Meta

BytewiseParser.__name__ = ["tink","io","BytewiseParser"];
BytewiseParser.__interfaces__ = [(tink_io_StreamParserObject().default)];
BytewiseParser.prototype = {
	read: function(char) {
		throw new (js__$Boot_HaxeError().default)("abstract");
	},
	progress: function(cursor) {
		while(true) {
			var _g = this.read(cursor.currentByte);
			switch(_g._hx_index) {
			case 0:
				break;
			case 1:
				var r = _g.r;
				cursor.next();
				return (tink_io_ParseStep().default).Done(r);
			case 2:
				var e = _g.e;
				return (tink_io_ParseStep().default).Failed(e);
			}
			if(!cursor.next()) {
				break;
			}
		}
		return (tink_io_ParseStep().default).Progressed;
	},
	eof: function(rest) {
		var _g = this.read(-1);
		switch(_g._hx_index) {
		case 0:
			return (tink_core_Outcome().default).Failure(new (tink_core_TypedError().default)(422,"Unexpected end of input",{ fileName : "tink/io/StreamParser.hx", lineNumber : 180, className : "tink.io.BytewiseParser", methodName : "eof"}));
		case 1:
			var r = _g.r;
			return (tink_core_Outcome().default).Success(r);
		case 2:
			var e = _g.e;
			return (tink_core_Outcome().default).Failure(e);
		}
	}
};
BytewiseParser.prototype.__class__ = BytewiseParser.prototype.constructor = $hxClasses["tink.io.BytewiseParser"] = BytewiseParser;

// Init



// Statics




// Export

exports.default = BytewiseParser;