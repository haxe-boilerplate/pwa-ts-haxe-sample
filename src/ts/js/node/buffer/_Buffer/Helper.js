// Class: js.node.buffer._Buffer.Helper

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function haxe_io_Bytes() {return require("./../../../../haxe/io/Bytes");}

// Constructor

var Helper = function(){}

// Meta

Helper.__name__ = "js.node.buffer._Buffer.Helper";
Helper.prototype = {
	
};
Helper.prototype.__class__ = Helper.prototype.constructor = $hxClasses["js.node.buffer._Buffer.Helper"] = Helper;

// Init



// Statics

Helper.bytesOfBuffer = function(b) {
	var o = Object.create((haxe_io_Bytes().default).prototype);
	o.length = b.byteLength;
	o.b = b;
	b.bufferValue = b;
	b.hxBytes = o;
	b.bytes = b;
	return o;
}


// Export

exports.default = Helper;