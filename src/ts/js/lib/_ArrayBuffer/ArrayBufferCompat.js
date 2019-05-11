// Class: js.lib._ArrayBuffer.ArrayBufferCompat

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;

// Constructor

var ArrayBufferCompat = function(){}

// Meta

ArrayBufferCompat.__name__ = "js.lib._ArrayBuffer.ArrayBufferCompat";
ArrayBufferCompat.prototype = {
	
};
ArrayBufferCompat.prototype.__class__ = ArrayBufferCompat.prototype.constructor = $hxClasses["js.lib._ArrayBuffer.ArrayBufferCompat"] = ArrayBufferCompat;

// Init

if(ArrayBuffer.prototype.slice == null) {
	ArrayBuffer.prototype.slice = ArrayBufferCompat.sliceImpl;
};

// Statics

ArrayBufferCompat.sliceImpl = function(begin,end) {
	var u = new Uint8Array(this,begin,end == null ? null : end - begin);
	var resultArray = new Uint8Array(u.byteLength);
	resultArray.set(u);
	return resultArray.buffer;
}


// Export

exports.default = ArrayBufferCompat;