// Class: tink.json.BasicWriter

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function tink_core_Annex() {return require("./../../tink/core/Annex");}

// Constructor

var BasicWriter = function() {
	this.plugins = new (tink_core_Annex().default)(this);
}

// Meta

BasicWriter.__name__ = "tink.json.BasicWriter";
BasicWriter.prototype = {
	init: function() {
		var this1 = "";
		this.buf = this1;
	},
	output: function(s) {
		this.buf += s;
	},
	char: function(c) {
		this.buf += String.fromCodePoint(c);
	},
	writeInt: function(v) {
		this.buf += v == null ? "null" : "" + v;
	},
	writeFloat: function(v) {
		this.buf += v == null ? "null" : "" + v;
	},
	writeBool: function(b) {
		this.buf += b ? "true" : "false";
	},
	writeString: function(s) {
		var s1 = JSON.stringify(s);
		this.buf += s1;
	},
	writeDynamic: function(value) {
		var s = JSON.stringify(value);
		this.buf += s;
	},
	writeValue: function(value) {
		var _gthis = this;
		switch(value._hx_index) {
		case 0:
			var f = value.f;
			this.buf += f == null ? "null" : "" + f;
			break;
		case 1:
			var s = value.s;
			var s1 = JSON.stringify(s);
			this.buf += s1;
			break;
		case 2:
			this.buf += "null";
			break;
		case 3:
			var b = value.b;
			this.buf += b ? "true" : "false";
			break;
		case 4:
			var _g3 = value.a;
			if(_g3.length == 0) {
				this.buf += "[]";
			} else {
				var a = _g3;
				this.buf += String.fromCodePoint(91);
				this.writeValue(a[0]);
				var _g = 1;
				var _g1 = a.length;
				while(_g < _g1) {
					var i = _g++;
					this.buf += String.fromCodePoint(44);
					this.writeValue(a[i]);
				}
				this.buf += String.fromCodePoint(93);
			}
			break;
		case 5:
			var _g2 = value.a;
			if(_g2.length == 0) {
				this.buf += "{}";
			} else {
				var a1 = _g2;
				this.buf += String.fromCodePoint(123);
				var p = a1[0];
				var s2 = JSON.stringify(p.name);
				_gthis.buf += s2;
				_gthis.buf += String.fromCodePoint(58);
				_gthis.writeValue(p.value);
				var _g4 = 1;
				var _g11 = a1.length;
				while(_g4 < _g11) {
					var i1 = _g4++;
					this.buf += String.fromCodePoint(44);
					var p1 = a1[i1];
					var s3 = JSON.stringify(p1.name);
					_gthis.buf += s3;
					_gthis.buf += String.fromCodePoint(58);
					_gthis.writeValue(p1.value);
				}
				this.buf += String.fromCodePoint(125);
			}
			break;
		}
	}
};
BasicWriter.prototype.__class__ = BasicWriter.prototype.constructor = $hxClasses["tink.json.BasicWriter"] = BasicWriter;

// Init



// Statics




// Export

exports.default = BasicWriter;