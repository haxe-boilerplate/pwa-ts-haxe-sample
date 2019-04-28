// Class: tink.http.Header

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function tink_core_Outcome() {return require("./../../tink/core/Outcome");}
function tink_core_TypedError() {return require("./../../tink/core/TypedError");}
function tink_core_OutcomeTools() {return require("./../../tink/core/OutcomeTools");}
function tink_http_ContentType() {return require("./../../tink/http/ContentType");}
function HxOverrides() {return require("./../../HxOverrides");}
function Std() {return require("./../../Std");}
function tink_http__$Header_HeaderValue_$Impl_$() {return require("./../../tink/http/_Header/HeaderValue_Impl_");}

// Constructor

var Header = function(fields) {
	var tmp;
	if(fields == null) {
		tmp = [];
	} else {
		var v = fields;
		tmp = v;
	}
	this.fields = tmp;
}

// Meta

Header.__name__ = ["tink","http","Header"];
Header.prototype = {
	get: function(name) {
		var _g = [];
		var _g1 = 0;
		var _g2 = this.fields;
		while(_g1 < _g2.length) {
			var f = _g2[_g1];
			++_g1;
			if(f.name == name) {
				_g.push(f.value);
			}
		}
		return _g;
	},
	byName: function(name) {
		var _g = this.get(name);
		switch(_g.length) {
		case 0:
			return (tink_core_Outcome().default).Failure(new (tink_core_TypedError().default)(422,"No " + name + " header found",{ fileName : "tink/http/Header.hx", lineNumber : 91, className : "tink.http.Header", methodName : "byName"}));
		case 1:
			var v = _g[0];
			return (tink_core_Outcome().default).Success(v);
		default:
			var v1 = _g;
			return (tink_core_Outcome().default).Failure(new (tink_core_TypedError().default)(422,"Multiple entries for " + name + " header",{ fileName : "tink/http/Header.hx", lineNumber : 95, className : "tink.http.Header", methodName : "byName"}));
		}
	},
	contentType: function() {
		return (tink_core_OutcomeTools().default).map(this.byName("content-type"),(tink_http_ContentType().default).ofString);
	},
	iterator: function() {
		return (HxOverrides().default).iter(this.fields);
	},
	concat: function(fields) {
		return new Header(this.fields.concat(fields));
	},
	getContentLength: function() {
		var _g = this.byName("content-length");
		switch(_g._hx_index) {
		case 0:
			var _hx_tmp = (Std().default).parseInt(_g.data);
			if(_hx_tmp == null) {
				return (tink_core_Outcome().default).Failure(new (tink_core_TypedError().default)(422,"Invalid Content-Length Header",{ fileName : "tink/http/Header.hx", lineNumber : 120, className : "tink.http.Header", methodName : "getContentLength"}));
			} else {
				var v = _hx_tmp;
				return (tink_core_Outcome().default).Success(v);
			}
			break;
		case 1:
			var e = _g.failure;
			return (tink_core_Outcome().default).Failure(e);
		}
	},
	accepts: function(type) {
		var prefix = type.split("/")[0];
		return (tink_core_OutcomeTools().default).map(this.byName("accept"),function(v) {
			var _g = 0;
			var _g1 = (tink_http__$Header_HeaderValue_$Impl_$().default).parse(v);
			while(_g < _g1.length) {
				var entry = _g1[_g];
				++_g;
				if(entry.value == "*/*" || entry.value == type) {
					return true;
				}
				var _g2 = entry.value.split("/");
				if(_g2.length == 2 && _g2[1] == "*") {
					var p = _g2[0];
					if(prefix == p) {
						return true;
					}
				}
			}
			return false;
		});
	},
	get_LINEBREAK: function() {
		return "\r\n";
	},
	toString: function() {
		var _g = [];
		var _g1 = 0;
		var _g2 = this.fields;
		while(_g1 < _g2.length) {
			var f = _g2[_g1];
			++_g1;
			_g.push(f.toString());
		}
		return _g.join("\r\n") + "\r\n" + "\r\n";
	},
	headerNotFound: function(name) {
		return "No " + name + " header found";
	}
};
Header.prototype.__class__ = Header.prototype.constructor = $hxClasses["tink.http.Header"] = Header;

// Init



// Statics




// Export

exports.default = Header;