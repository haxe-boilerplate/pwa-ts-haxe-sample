// Class: haxe.http.HttpBase

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Constructor

var HttpBase = function(url) {
	this.url = url;
	this.headers = [];
	this.params = [];
}

// Meta

HttpBase.__name__ = "haxe.http.HttpBase";
HttpBase.prototype = {
	setHeader: function(name,value) {
		var _g = 0;
		var _g1 = this.headers.length;
		while(_g < _g1) {
			var i = _g++;
			if(this.headers[i].name == name) {
				this.headers[i] = { name : name, value : value};
				return;
			}
		}
		this.headers.push({ name : name, value : value});
	},
	setPostData: function(data) {
		this.postData = data;
	},
	onData: function(data) {
	},
	onError: function(msg) {
	},
	onStatus: function(status) {
	}
};
HttpBase.prototype.__class__ = HttpBase.prototype.constructor = $hxClasses["haxe.http.HttpBase"] = HttpBase;

// Init



// Statics




// Export

exports.default = HttpBase;