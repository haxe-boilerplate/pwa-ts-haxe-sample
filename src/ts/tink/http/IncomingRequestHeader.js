// Class: tink.http.IncomingRequestHeader

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function tink_http_RequestHeader() {return require("./../../tink/http/RequestHeader");}
function haxe_ds_StringMap() {return require("./../../haxe/ds/StringMap");}
function tink_url__$Query_QueryStringParser() {return require("./../../tink/url/_Query/QueryStringParser");}
function tink_url__$Portion_Portion_$Impl_$() {return require("./../../tink/url/_Portion/Portion_Impl_");}
function haxe_crypto_Base64() {return require("./../../haxe/crypto/Base64");}
function tink_core_Outcome() {return require("./../../tink/core/Outcome");}
function tink_core_TypedError() {return require("./../../tink/core/TypedError");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function tink_http_Authorization() {return require("./../../tink/http/Authorization");}
function HxOverrides() {return require("./../../HxOverrides");}
function tink_core_OutcomeTools() {return require("./../../tink/core/OutcomeTools");}
function tink_core__$Outcome_OutcomeMapper_$Impl_$() {return require("./../../tink/core/_Outcome/OutcomeMapper_Impl_");}
function tink_http_HeaderParser() {return require("./../../tink/http/HeaderParser");}
function tink__$Url_Url_$Impl_$() {return require("./../../tink/_Url/Url_Impl_");}
function tink_http_HeaderField() {return require("./../../tink/http/HeaderField");}

// Constructor

var IncomingRequestHeader = function(method,url,protocol,fields) {
	(tink_http_RequestHeader().default).call(this,method,url,protocol,fields);
}

// Meta

IncomingRequestHeader.__name__ = "tink.http.IncomingRequestHeader";
IncomingRequestHeader.__super__ = (tink_http_RequestHeader().default);
IncomingRequestHeader.prototype = $extend((tink_http_RequestHeader().default).prototype, {
	getCookies: function() {
		if(this.cookies == null) {
			var _g = new (haxe_ds_StringMap().default)();
			var _g1 = 0;
			var this1 = "cookie".toLowerCase();
			var _g2 = this.get(this1);
			while(_g1 < _g2.length) {
				var header = _g2[_g1];
				++_g1;
				var entry = new (tink_url__$Query_QueryStringParser().default)(header,";","=",0);
				while(entry.hasNext()) {
					var entry1 = entry.next();
					var key = entry1.name;
					var value = (tink_url__$Portion_Portion_$Impl_$().default).toString(entry1.value);
					if(__map_reserved[key] != null) {
						_g.setReserved(key,value);
					} else {
						_g.h[key] = value;
					}
				}
			}
			this.cookies = _g;
		}
		return this.cookies;
	},
	concat: function(fields) {
		return new IncomingRequestHeader(this.method,this.url,this.protocol,this.fields.concat(fields));
	},
	cookieNames: function() {
		return this.cookies.keys();
	},
	getCookie: function(name) {
		var _this = this.getCookies();
		if(__map_reserved[name] != null) {
			return _this.getReserved(name);
		} else {
			return _this.h[name];
		}
	},
	getAuth: function() {
		return this.getAuthWith(function(s,p) {
			switch(s) {
			case "Basic":
				var decoded;
				try {
					decoded = (haxe_crypto_Base64().default).decode(p).toString();
				} catch( e ) {
					return (tink_core_Outcome().default).Failure((tink_core_TypedError().default).withData(null,"Error in decoding basic auth",((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e,{ fileName : "tink/http/Request.hx", lineNumber : 67, className : "tink.http.IncomingRequestHeader", methodName : "getAuth"}));
				}
				var _g = decoded.indexOf(":");
				if(_g == -1) {
					return (tink_core_Outcome().default).Failure(new (tink_core_TypedError().default)(null,"Cannot parse username and password because \":\" is missing",{ fileName : "tink/http/Request.hx", lineNumber : 69, className : "tink.http.IncomingRequestHeader", methodName : "getAuth"}));
				} else {
					var i = _g;
					return (tink_core_Outcome().default).Success((tink_http_Authorization().default).Basic((HxOverrides().default).substr(decoded,0,i),(HxOverrides().default).substr(decoded,i + 1,null)));
				}
				break;
			case "Bearer":
				return (tink_core_Outcome().default).Success((tink_http_Authorization().default).Bearer(p));
			default:
				var s1 = s;
				return (tink_core_Outcome().default).Success((tink_http_Authorization().default).Others(s1,p));
			}
		});
	},
	getAuthWith: function(parser) {
		return (tink_core_OutcomeTools().default).flatMap(this.byName("authorization"),(tink_core__$Outcome_OutcomeMapper_$Impl_$().default).withSameError(function(v) {
			var _g = v.indexOf(" ");
			if(_g == -1) {
				return (tink_core_Outcome().default).Failure(new (tink_core_TypedError().default)(422,"Invalid Authorization Header",{ fileName : "tink/http/Request.hx", lineNumber : 81, className : "tink.http.IncomingRequestHeader", methodName : "getAuthWith"}));
			} else {
				var i = _g;
				return parser((HxOverrides().default).substr(v,0,i),(HxOverrides().default).substr(v,i + 1,null));
			}
		}));
	}
});
IncomingRequestHeader.prototype.__class__ = IncomingRequestHeader.prototype.constructor = $hxClasses["tink.http.IncomingRequestHeader"] = IncomingRequestHeader;

// Init



// Statics

IncomingRequestHeader.parser = function() {
	return new (tink_http_HeaderParser().default)(function(line,headers) {
		var _g = line.split(" ");
		if(_g.length == 3) {
			var protocol = _g[2];
			var url = _g[1];
			var method = _g[0];
			return (tink_core_Outcome().default).Success(new IncomingRequestHeader(method,(tink__$Url_Url_$Impl_$().default).fromString(url),protocol,headers));
		} else {
			return (tink_core_Outcome().default).Failure(new (tink_core_TypedError().default)(422,"Invalid HTTP header",{ fileName : "tink/http/Request.hx", lineNumber : 95, className : "tink.http.IncomingRequestHeader", methodName : "parser"}));
		}
	});
}
IncomingRequestHeader.fromIncomingMessage = function(req) {
	var req1 = req.method;
	var tmp = (tink__$Url_Url_$Impl_$().default).fromString(req.url);
	var tmp1 = "HTTP/" + req.httpVersion;
	var _g = [];
	var _g1 = 0;
	var _g2 = req.rawHeaders.length / 2 | 0;
	while(_g1 < _g2) {
		var i = _g1++;
		var this1 = req.rawHeaders[2 * i].toLowerCase();
		_g.push(new (tink_http_HeaderField().default)(this1,req.rawHeaders[2 * i + 1]));
	}
	return new IncomingRequestHeader(req1,tmp,tmp1,_g);
}


// Export

exports.default = IncomingRequestHeader;