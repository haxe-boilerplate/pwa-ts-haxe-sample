// Class: tink.http.SimpleHandler

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
function tink_http_HandlerObject() {return require("./../../tink/http/HandlerObject");}

// Constructor

var SimpleHandler = function(f) {
	this.f = f;
}

// Meta

SimpleHandler.__name__ = ["tink","http","SimpleHandler"];
SimpleHandler.__interfaces__ = [(tink_http_HandlerObject().default)];
SimpleHandler.prototype = {
	process: function(req) {
		return this.f(req);
	}
};
SimpleHandler.prototype.__class__ = SimpleHandler.prototype.constructor = $hxClasses["tink.http.SimpleHandler"] = SimpleHandler;

// Init



// Statics




// Export

exports.default = SimpleHandler;