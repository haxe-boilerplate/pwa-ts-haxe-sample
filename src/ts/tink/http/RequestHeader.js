// Class: tink.http.RequestHeader

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function tink_http_Header() {return require("./../../tink/http/Header");}

// Constructor

var RequestHeader = function(method,url,protocol,fields) {
	if(protocol == null) {
		protocol = "HTTP/1.1";
	}
	this.method = method;
	this.url = url;
	this.protocol = protocol;
	(tink_http_Header().default).call(this,fields);
}

// Meta

RequestHeader.__name__ = ["tink","http","RequestHeader"];
RequestHeader.__super__ = (tink_http_Header().default);
RequestHeader.prototype = $extend((tink_http_Header().default).prototype, {
	concat: function(fields) {
		return new RequestHeader(this.method,this.url,this.protocol,this.fields.concat(fields));
	},
	toString: function() {
		var this1 = this.url;
		return "" + this.method + " " + (this1.query == null ? this1.path : this1.path + "?" + this1.query) + " " + this.protocol + "\r\n" + (tink_http_Header().default).prototype.toString.call(this);
	}
});
RequestHeader.prototype.__class__ = RequestHeader.prototype.constructor = $hxClasses["tink.http.RequestHeader"] = RequestHeader;

// Init



// Statics




// Export

exports.default = RequestHeader;