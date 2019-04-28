// Class: tink.http.ResponseHeaderBase

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function tink_http_Header() {return require("./../../tink/http/Header");}
function tink_http_HeaderParser() {return require("./../../tink/http/HeaderParser");}
function Std() {return require("./../../Std");}
function tink_core_Outcome() {return require("./../../tink/core/Outcome");}
function tink_core_TypedError() {return require("./../../tink/core/TypedError");}
function httpstatus__$HttpStatusMessage_HttpStatusMessage_$Impl_$() {return require("./../../httpstatus/_HttpStatusMessage/HttpStatusMessage_Impl_");}

// Constructor

var ResponseHeaderBase = function(statusCode,reason,fields,protocol) {
	if(protocol == null) {
		protocol = "HTTP/1.1";
	}
	this.statusCode = statusCode;
	var tmp;
	if(reason == null) {
		var this1 = (httpstatus__$HttpStatusMessage_HttpStatusMessage_$Impl_$().default).fromCode(statusCode);
		tmp = this1;
	} else {
		tmp = reason;
	}
	this.reason = tmp;
	this.protocol = protocol;
	(tink_http_Header().default).call(this,fields);
}

// Meta

ResponseHeaderBase.__name__ = ["tink","http","ResponseHeaderBase"];
ResponseHeaderBase.__super__ = (tink_http_Header().default);
ResponseHeaderBase.prototype = $extend((tink_http_Header().default).prototype, {
	concat: function(fields) {
		var this1 = new ResponseHeaderBase(this.statusCode,this.reason,this.fields.concat(fields),this.protocol);
		return this1;
	},
	toString: function() {
		return "" + this.protocol + " " + this.statusCode + " " + this.reason + "\r\n" + (tink_http_Header().default).prototype.toString.call(this);
	}
});
ResponseHeaderBase.prototype.__class__ = ResponseHeaderBase.prototype.constructor = $hxClasses["tink.http.ResponseHeaderBase"] = ResponseHeaderBase;

// Init



// Statics

ResponseHeaderBase.parser = function() {
	return new (tink_http_HeaderParser().default)(function(line,headers) {
		var v = line.split(" ");
		if(v.length >= 3) {
			var this1 = new ResponseHeaderBase((Std().default).parseInt(v[1]),v.slice(2).join(" "),headers,v[0]);
			return (tink_core_Outcome().default).Success(this1);
		} else {
			return (tink_core_Outcome().default).Failure(new (tink_core_TypedError().default)(422,"Invalid HTTP response header",{ fileName : "tink/http/Response.hx", lineNumber : 56, className : "tink.http.ResponseHeaderBase", methodName : "parser"}));
		}
	});
}


// Export

exports.default = ResponseHeaderBase;