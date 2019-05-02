// Class: haxe.io.Output

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function haxe_io_Error() {return require("./../../haxe/io/Error");}

// Constructor

var Output = function(){}

// Meta

Output.__name__ = ["haxe","io","Output"];
Output.prototype = {
	writeByte: function(c) {
		throw new (js__$Boot_HaxeError().default)("Not implemented");
	},
	writeBytes: function(s,pos,len) {
		if(pos < 0 || len < 0 || pos + len > s.length) {
			throw new (js__$Boot_HaxeError().default)((haxe_io_Error().default).OutsideBounds);
		}
		var b = s.b;
		var k = len;
		while(k > 0) {
			this.writeByte(b[pos]);
			++pos;
			--k;
		}
		return len;
	},
	close: function() {
	}
};
Output.prototype.__class__ = Output.prototype.constructor = $hxClasses["haxe.io.Output"] = Output;

// Init



// Statics




// Export

exports.default = Output;