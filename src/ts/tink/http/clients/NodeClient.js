// Class: tink.http.clients.NodeClient

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function tink_http_ClientObject() {return require("./../../../tink/http/ClientObject");}
function tink_url__$Host_Host_$Impl_$() {return require("./../../../tink/url/_Host/Host_Impl_");}
function HxOverrides() {return require("./../../../HxOverrides");}
function js_node_Http() {return require("http");}
function tink_core__$Future_Future_$Impl_$() {return require("./../../../tink/core/_Future/Future_Impl_");}
function tink_http_HeaderField() {return require("./../../../tink/http/HeaderField");}
function tink_http_ResponseHeaderBase() {return require("./../../../tink/http/ResponseHeaderBase");}
function tink__$Url_Url_$Impl_$() {return require("./../../../tink/_Url/Url_Impl_");}
function tink_core_Outcome() {return require("./../../../tink/core/Outcome");}
function tink_http_IncomingResponse() {return require("./../../../tink/http/IncomingResponse");}
function tink_io_nodejs_NodejsSource() {return require("./../../../tink/io/nodejs/NodejsSource");}
function tink_core_TypedError() {return require("./../../../tink/core/TypedError");}
function tink_io__$Source_Source_$Impl_$() {return require("./../../../tink/io/_Source/Source_Impl_");}
function tink_io_nodejs_NodejsSink() {return require("./../../../tink/io/nodejs/NodejsSink");}

// Constructor

var NodeClient = function() {
}

// Meta

NodeClient.__name__ = "tink.http.clients.NodeClient";
NodeClient.__interfaces__ = [(tink_http_ClientObject().default)];
NodeClient.prototype = {
	request: function(req) {
		var req1 = req.header.method;
		var this1 = req.header.url;
		var options = this1.query == null ? this1.path : this1.path + "?" + this1.query;
		var options1 = (tink_url__$Host_Host_$Impl_$().default).get_name(req.header.url.host);
		var options2 = (tink_url__$Host_Host_$Impl_$().default).get_port(req.header.url.host);
		var this2 = { };
		var map = this2;
		var h = (HxOverrides().default).iter(req.header.fields);
		while(h.hasNext()) {
			var h1 = h.next();
			map[h1.name] = h1.value;
		}
		var options3 = { method : req1, path : options, host : options1, port : options2, headers : map, agent : false};
		return this.nodeRequest((js_node_Http()),options3,req);
	},
	nodeRequest: function(agent,options,req) {
		return (tink_core__$Future_Future_$Impl_$().default).async(function(cb) {
			var fwd = agent.request(options,function(msg) {
				var statusCode = msg.statusCode;
				var reason = msg.statusMessage;
				var _g = [];
				var _g1 = 0;
				var _g2 = msg.rawHeaders.length >> 1;
				while(_g1 < _g2) {
					var i = _g1++;
					var this1 = msg.rawHeaders[2 * i].toLowerCase();
					_g.push(new (tink_http_HeaderField().default)(this1,msg.rawHeaders[2 * i + 1]));
				}
				var this2 = new (tink_http_ResponseHeaderBase().default)(statusCode,reason,_g,"HTTP/1.1");
				var name = "Response from " + (tink__$Url_Url_$Impl_$().default).toString(req.header.url);
				var options1 = null;
				if(options1 == null) {
					options1 = { };
				}
				var fwd1 = (tink_core_Outcome().default).Success(new (tink_http_IncomingResponse().default)(this2,(tink_io_nodejs_NodejsSource().default).wrap(name,msg,options1.chunkSize,options1.onEnd)));
				cb(fwd1);
			});
			var fail = function(e) {
				cb((tink_core_Outcome().default).Failure(e));
			};
			fwd.on("error",function(e1) {
				var tmp = (tink_core_TypedError().default).withData(null,e1.message,e1,{ fileName : "tink/http/clients/NodeClient.hx", lineNumber : 58, className : "tink.http.clients.NodeClient", methodName : "nodeRequest"});
				fail(tmp);
			});
			(tink_io__$Source_Source_$Impl_$().default).pipeTo(req.body,(tink_io_nodejs_NodejsSink().default).wrap("Request to " + (tink__$Url_Url_$Impl_$().default).toString(req.header.url),fwd)).handle(function(res) {
				fwd.end();
				switch(res._hx_index) {
				case 0:
					break;
				case 1:
					var _g3 = res.rest;
					var _g21 = res.result;
					fail(new (tink_core_TypedError().default)(502,"Gateway Error",{ fileName : "tink/http/clients/NodeClient.hx", lineNumber : 67, className : "tink.http.clients.NodeClient", methodName : "nodeRequest"}));
					break;
				case 2:
					var _g11 = res.rest;
					var e2 = res.e;
					fail(e2);
					break;
				}
			});
		});
	}
};
NodeClient.prototype.__class__ = NodeClient.prototype.constructor = $hxClasses["tink.http.clients.NodeClient"] = NodeClient;

// Init



// Statics




// Export

exports.default = NodeClient;