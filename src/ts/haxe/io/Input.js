// Class: haxe.io.Input

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function haxe_io_Error() {return require("./../../haxe/io/Error");}
function haxe_io_Eof() {return require("./../../haxe/io/Eof");}

// Constructor

var Input = function(){}

// Meta

Input.__name__ = "haxe.io.Input";
Input.prototype = {
	readByte: function() {
		throw new (js__$Boot_HaxeError().default)("Not implemented");
	},
	readBytes: function(s,pos,len) {
		var k = len;
		var b = s.b;
		if(pos < 0 || len < 0 || pos + len > s.length) {
			throw new (js__$Boot_HaxeError().default)((haxe_io_Error().default).OutsideBounds);
		}
		try {
			while(k > 0) {
				b[pos] = this.readByte();
				++pos;
				--k;
			}
		} catch( eof ) {
			var eof1 = ((eof) instanceof (js__$Boot_HaxeError().default)) ? eof.val : eof;
			if(((eof1) instanceof (haxe_io_Eof().default))) {
				var eof2 = eof1;
			} else {
				throw eof;
			}
		}
		return len - k;
	},
	close: function() {
	}
};
Input.prototype.__class__ = Input.prototype.constructor = $hxClasses["haxe.io.Input"] = Input;

// Init



// Statics




// Export

exports.default = Input;