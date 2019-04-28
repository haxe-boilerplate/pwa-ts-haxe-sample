// Class: tink.chunk._Seekable.Seekable_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
function haxe_io_Bytes() {return require("./../../../haxe/io/Bytes");}

// Constructor

var Seekable_Impl_ = function(){}

// Meta

Seekable_Impl_.__name__ = ["tink","chunk","_Seekable","Seekable_Impl_"];
Seekable_Impl_.prototype = {
	
};
Seekable_Impl_.prototype.__class__ = Seekable_Impl_.prototype.constructor = $hxClasses["tink.chunk._Seekable.Seekable_Impl_"] = Seekable_Impl_;

// Init



// Statics

Seekable_Impl_._new = function(a) {
	var this1 = a;
	return this1;
}
Seekable_Impl_.get_length = function(this1) {
	return this1.length;
}
Seekable_Impl_.get = function(this1,index) {
	return this1[index];
}
Seekable_Impl_.ofChunk = function(c) {
	return Seekable_Impl_.ofBytes(c.toBytes());
}
Seekable_Impl_.ofBytes = function(b) {
	var _g = [];
	var _g1 = 0;
	var _g2 = b.length;
	while(_g1 < _g2) {
		var i = _g1++;
		_g.push(b.b[i]);
	}
	var this1 = _g;
	return this1;
}
Seekable_Impl_.ofString = function(s) {
	return Seekable_Impl_.ofBytes((haxe_io_Bytes().default).ofString(s));
}


// Export

exports.default = Seekable_Impl_;