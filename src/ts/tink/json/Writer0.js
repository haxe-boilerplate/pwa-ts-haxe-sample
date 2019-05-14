// Class: tink.json.Writer0

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function tink_json_BasicWriter() {return require("./../../tink/json/BasicWriter");}

// Constructor

var Writer0 = function() {
	(tink_json_BasicWriter().default).call(this);
}

// Meta

Writer0.__name__ = "tink.json.Writer0";
Writer0.__super__ = (tink_json_BasicWriter().default);
Writer0.prototype = $extend((tink_json_BasicWriter().default).prototype, {
	parse0: function(value) {
		var __first = true;
		this.buf += String.fromCodePoint(123);
		var value1 = value.slideshow;
		if(__first) {
			__first = false;
		} else {
			this.buf += String.fromCodePoint(44);
		}
		this.buf += "\"slideshow\":";
		this.parse1(value1);
		this.buf += String.fromCodePoint(125);
	},
	parse1: function(value) {
		var __first = true;
		this.buf += String.fromCodePoint(123);
		var value1 = value.author;
		if(__first) {
			__first = false;
		} else {
			this.buf += String.fromCodePoint(44);
		}
		this.buf += "\"author\":";
		var s = JSON.stringify(value1);
		this.buf += s;
		var value2 = value.date;
		if(__first) {
			__first = false;
		} else {
			this.buf += String.fromCodePoint(44);
		}
		this.buf += "\"date\":";
		var s1 = JSON.stringify(value2);
		this.buf += s1;
		var value3 = value.slides;
		if(__first) {
			__first = false;
		} else {
			this.buf += String.fromCodePoint(44);
		}
		this.buf += "\"slides\":";
		this.buf += String.fromCodePoint(91);
		var first = true;
		var _g = 0;
		while(_g < value3.length) {
			var value4 = value3[_g];
			++_g;
			if(first) {
				first = false;
			} else {
				this.buf += String.fromCodePoint(44);
			}
			this.parse2(value4);
		}
		this.buf += String.fromCodePoint(93);
		var value5 = value.title;
		if(__first) {
			__first = false;
		} else {
			this.buf += String.fromCodePoint(44);
		}
		this.buf += "\"title\":";
		var s2 = JSON.stringify(value5);
		this.buf += s2;
		this.buf += String.fromCodePoint(125);
	},
	parse2: function(value) {
		var __first = true;
		this.buf += String.fromCodePoint(123);
		var value1 = value.title;
		if(__first) {
			__first = false;
		} else {
			this.buf += String.fromCodePoint(44);
		}
		this.buf += "\"title\":";
		var s = JSON.stringify(value1);
		this.buf += s;
		var value2 = value.type;
		if(__first) {
			__first = false;
		} else {
			this.buf += String.fromCodePoint(44);
		}
		this.buf += "\"type\":";
		var s1 = JSON.stringify(value2);
		this.buf += s1;
		var _g = value.items;
		if(_g != null) {
			var value3 = _g;
			if(__first) {
				__first = false;
			} else {
				this.buf += String.fromCodePoint(44);
			}
			this.buf += "\"items\":";
			if(value3 == null) {
				this.buf += "null";
			} else {
				this.buf += String.fromCodePoint(91);
				var first = true;
				var _g1 = 0;
				while(_g1 < value3.length) {
					var value4 = value3[_g1];
					++_g1;
					if(first) {
						first = false;
					} else {
						this.buf += String.fromCodePoint(44);
					}
					var s2 = JSON.stringify(value4);
					this.buf += s2;
				}
				this.buf += String.fromCodePoint(93);
			}
		}
		this.buf += String.fromCodePoint(125);
	},
	write: function(value) {
		this.init();
		this.parse0(value);
		return this.buf.toString();
	}
});
Writer0.prototype.__class__ = Writer0.prototype.constructor = $hxClasses["tink.json.Writer0"] = Writer0;

// Init



// Statics




// Export

exports.default = Writer0;