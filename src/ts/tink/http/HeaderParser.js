// Class: tink.http.HeaderParser

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function tink_io_BytewiseParser() {return require("./../../tink/io/BytewiseParser");}
function tink_io_ParseStep() {return require("./../../tink/io/ParseStep");}
function StringBuf() {return require("./../../StringBuf");}
function tink_http_HeaderField() {return require("./../../tink/http/HeaderField");}
function tink_core_TypedError() {return require("./../../tink/core/TypedError");}

// Constructor

var HeaderParser = function(makeHeader) {
	this.last = -1;
	this.buf = new (StringBuf().default)();
	this.makeHeader = makeHeader;
}

// Meta

HeaderParser.__name__ = ["tink","http","HeaderParser"];
HeaderParser.__super__ = (tink_io_BytewiseParser().default);
HeaderParser.prototype = $extend((tink_io_BytewiseParser().default).prototype, {
	read: function(c) {
		var _g = this.last;
		switch(c) {
		case -1:
			return this.nextLine();
		case 10:
			if(_g == 13) {
				return this.nextLine();
			} else {
				var other = c;
				this.last = other;
				this.buf.b += String.fromCodePoint(other);
				return (tink_io_ParseStep().default).Progressed;
			}
			break;
		case 13:
			if(_g == 13) {
				var c1 = this.last;
				this.buf.b += String.fromCodePoint(c1);
				return (tink_io_ParseStep().default).Progressed;
			} else {
				this.last = 13;
				return (tink_io_ParseStep().default).Progressed;
			}
			break;
		default:
			if(_g == 13) {
				var other1 = c;
				var c2 = this.last;
				this.buf.b += String.fromCodePoint(c2);
				this.buf.b += String.fromCodePoint(other1);
				this.last = -1;
				return (tink_io_ParseStep().default).Progressed;
			} else {
				var other2 = c;
				this.last = other2;
				this.buf.b += String.fromCodePoint(other2);
				return (tink_io_ParseStep().default).Progressed;
			}
		}
	},
	nextLine: function() {
		var line = this.buf.b;
		this.buf = new (StringBuf().default)();
		this.last = -1;
		if(line == "") {
			if(this.header == null) {
				return (tink_io_ParseStep().default).Progressed;
			} else {
				return (tink_io_ParseStep().default).Done(this.header);
			}
		} else if(this.header == null) {
			var _g = this.makeHeader(line,this.fields = []);
			switch(_g._hx_index) {
			case 0:
				if(_g.data == null) {
					return (tink_io_ParseStep().default).Done(this.header = null);
				} else {
					var v = _g.data;
					this.header = v;
					return (tink_io_ParseStep().default).Progressed;
				}
				break;
			case 1:
				var e = _g.failure;
				return (tink_io_ParseStep().default).Failed(e);
			}
		} else {
			this.fields.push((tink_http_HeaderField().default).ofString(line));
			return (tink_io_ParseStep().default).Progressed;
		}
	}
});
HeaderParser.prototype.__class__ = HeaderParser.prototype.constructor = $hxClasses["tink.http.HeaderParser"] = HeaderParser;

// Init



// Statics


HeaderParser.INVALID = (tink_io_ParseStep().default).Failed(new (tink_core_TypedError().default)(422,"Invalid HTTP header",{ fileName : "tink/http/Header.hx", lineNumber : 307, className : "tink.http.HeaderParser", methodName : "INVALID"}))

// Export

exports.default = HeaderParser;