// Class: haxe.http.HttpNodeJs

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function haxe_http_HttpBase() {return require("./../../haxe/http/HttpBase");}
function js_node_Url() {return require("url");}
function Std() {return require("./../../Std");}
function Reflect() {return require("./../../Reflect");}
function js_node_Https() {return require("https");}
function js_node_Http() {return require("http");}

// Constructor

var HttpNodeJs = function(url) {
	(haxe_http_HttpBase().default).call(this,url);
}

// Meta

HttpNodeJs.__name__ = "haxe.http.HttpNodeJs";
HttpNodeJs.__super__ = (haxe_http_HttpBase().default);
HttpNodeJs.prototype = $extend((haxe_http_HttpBase().default).prototype, {
	request: function(post) {
		var _gthis = this;
		this.responseData = null;
		var parsedUrl = (js_node_Url()).parse(this.url);
		var secure = parsedUrl.protocol == "https:";
		var host = parsedUrl.hostname;
		var path = parsedUrl.path;
		var port = parsedUrl.port != null ? (Std().default).parseInt(parsedUrl.port) : secure ? 443 : 80;
		var h = { };
		var _g = 0;
		var _g1 = this.headers;
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			var arr = (Reflect().default).field(h,i.name);
			if(arr == null) {
				arr = [];
				h[i.name] = arr;
			}
			arr.push(i.value);
		}
		if(this.postData != null) {
			post = true;
		}
		var uri = null;
		var _g2 = 0;
		var _g3 = this.params;
		while(_g2 < _g3.length) {
			var p = _g3[_g2];
			++_g2;
			if(uri == null) {
				uri = "";
			} else {
				uri += "&";
			}
			var s = p.name;
			var uri1 = encodeURIComponent(s) + "=";
			var s1 = p.value;
			uri += uri1 + encodeURIComponent(s1);
		}
		var question = path.split("?").length <= 1;
		if(uri != null) {
			path += (question ? "?" : "&") + uri;
		}
		var opts = { protocol : parsedUrl.protocol, hostname : host, port : port, method : post ? "POST" : "GET", path : path, headers : h};
		var httpResponse = function(res) {
			var s2 = res.statusCode;
			if(s2 != null) {
				_gthis.onStatus(s2);
			}
			var body = "";
			res.on("data",function(d) {
				body += d;
			});
			res.on("end",function(_) {
				_gthis.responseData = body;
				_gthis.req = null;
				if(s2 != null && s2 >= 200 && s2 < 400) {
					_gthis.onData(body);
				} else {
					_gthis.onError("Http Error #" + s2);
				}
			});
		};
		this.req = secure ? (js_node_Https()).request(opts,httpResponse) : (js_node_Http()).request(opts,httpResponse);
		if(post) {
			this.req.write(this.postData);
		}
		this.req.end();
	}
});
HttpNodeJs.prototype.__class__ = HttpNodeJs.prototype.constructor = $hxClasses["haxe.http.HttpNodeJs"] = HttpNodeJs;

// Init



// Statics




// Export

exports.default = HttpNodeJs;