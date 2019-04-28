// Class: tink.http.OutgoingRequestHeader

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function tink_http_RequestHeader() {return require("./../../tink/http/RequestHeader");}

// Constructor

var OutgoingRequestHeader = function(method,url,protocol,fields) {
	(tink_http_RequestHeader().default).call(this,method,url,protocol,fields);
}

// Meta

OutgoingRequestHeader.__name__ = ["tink","http","OutgoingRequestHeader"];
OutgoingRequestHeader.__super__ = (tink_http_RequestHeader().default);
OutgoingRequestHeader.prototype = $extend((tink_http_RequestHeader().default).prototype, {
	concat: function(fields) {
		return new OutgoingRequestHeader(this.method,this.url,this.protocol,this.fields.concat(fields));
	}
});
OutgoingRequestHeader.prototype.__class__ = OutgoingRequestHeader.prototype.constructor = $hxClasses["tink.http.OutgoingRequestHeader"] = OutgoingRequestHeader;

// Init



// Statics




// Export

exports.default = OutgoingRequestHeader;