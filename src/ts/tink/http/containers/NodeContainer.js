// Class: tink.http.containers.NodeContainer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
function tink_http_Container() {return require("./../../../tink/http/Container");}
function tink_core__$Future_Future_$Impl_$() {return require("./../../../tink/core/_Future/Future_Impl_");}
function tink_core__$Signal_Signal_$Impl_$() {return require("./../../../tink/core/_Signal/Signal_Impl_");}
function js_node_http_Server() {return require("http");}
function tink_url__$Host_Host_$Impl_$() {return require("./../../../tink/url/_Host/Host_Impl_");}
function tink_core_TypedError() {return require("./../../../tink/core/TypedError");}
function tink_http_ContainerResult() {return require("./../../../tink/http/ContainerResult");}
function tink_core_Outcome() {return require("./../../../tink/core/Outcome");}
function tink_http_IncomingRequestHeader() {return require("./../../../tink/http/IncomingRequestHeader");}
function tink_http_IncomingRequestBody() {return require("./../../../tink/http/IncomingRequestBody");}
function tink_io_nodejs_NodejsSource() {return require("./../../../tink/io/nodejs/NodejsSource");}
function tink_http_IncomingRequest() {return require("./../../../tink/http/IncomingRequest");}
function HxOverrides() {return require("./../../../HxOverrides");}
function tink_io__$Source_Source_$Impl_$() {return require("./../../../tink/io/_Source/Source_Impl_");}
function tink_io_nodejs_NodejsSink() {return require("./../../../tink/io/nodejs/NodejsSink");}
function tink_streams_Single() {return require("./../../../tink/streams/Single");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}
function tink_chunk_ByteChunk() {return require("./../../../tink/chunk/ByteChunk");}
function haxe_io_Bytes() {return require("./../../../haxe/io/Bytes");}

// Constructor

var NodeContainer = function(kind,opt) {
	this.kind = kind;
	this.upgradable = opt != null && opt.upgradable;
}

// Meta

NodeContainer.__name__ = ["tink","http","containers","NodeContainer"];
NodeContainer.__interfaces__ = [(tink_http_Container().default)];
NodeContainer.prototype = {
	run: function(handler) {
		var _gthis = this;
		return (tink_core__$Future_Future_$Impl_$().default).async(function(cb) {
			var failures = (tink_core__$Signal_Signal_$Impl_$().default).trigger();
			var server;
			var _g = _gthis.kind;
			switch(_g._hx_index) {
			case 0:
				var server1 = _g.server;
				server = server1;
				break;
			case 1:
				var port = _g.port;
				var server2 = new (js_node_http_Server().Server)();
				server2.listen(port);
				server = server2;
				break;
			case 2:
				var host = _g.host;
				var server3 = new (js_node_http_Server().Server)();
				server3.listen((tink_url__$Host_Host_$Impl_$().default).get_port(host),(tink_url__$Host_Host_$Impl_$().default).get_name(host));
				server = server3;
				break;
			case 3:
				var path = _g.path;
				var server4 = new (js_node_http_Server().Server)();
				server4.listen(path);
				server = server4;
				break;
			case 4:
				var fd = _g.fd;
				var server5 = new (js_node_http_Server().Server)();
				server5.listen(fd);
				server = server5;
				break;
			}
			var tinkify = function(e) {
				return (tink_core_TypedError().default).withData(null,e.message,e,{ fileName : "tink/http/containers/NodeContainer.hx", lineNumber : 82, className : "tink.http.containers.NodeContainer", methodName : "run"});
			};
			server.on("error",function(e1) {
				cb((tink_http_ContainerResult().default).Failed(e1));
			});
			if(_gthis.upgradable) {
				var tmp = NodeContainer.toUpgradeHandler(handler);
				server.on("upgrade",tmp);
			}
			var onListen = function() {
				var onListen1 = (tink_http_ContainerResult().default).Running({ shutdown : function(hard) {
					if(hard) {
						console.log("tink/http/containers/NodeContainer.hx:95:","Warning: hard shutdown not implemented");
					}
					var ret = (tink_core__$Future_Future_$Impl_$().default).async(function(cb1) {
						server.close(function() {
							cb1(true);
						});
					}).map((tink_core_Outcome().default).Success);
					return ret.gather();
				}, failures : failures});
				cb(onListen1);
			};
			if(server.listening) {
				onListen();
			} else {
				server.on("listening",onListen);
			}
			var tmp1 = NodeContainer.toNodeHandler(handler);
			server.on("request",tmp1);
			server.on("error",function(e2) {
				cb((tink_http_ContainerResult().default).Failed(e2));
			});
		});
	}
};
NodeContainer.prototype.__class__ = NodeContainer.prototype.constructor = $hxClasses["tink.http.containers.NodeContainer"] = NodeContainer;

// Init



// Statics

NodeContainer.toNodeHandler = function(handler) {
	return function(req,res) {
		var req1 = req.socket.remoteAddress;
		var tmp = (tink_http_IncomingRequestHeader().default).fromIncomingMessage(req);
		var options = null;
		if(options == null) {
			options = { };
		}
		var tmp1 = (tink_http_IncomingRequestBody().default).Plain((tink_io_nodejs_NodejsSource().default).wrap("Incoming HTTP message from " + req.socket.remoteAddress,req,options.chunkSize,options.onEnd));
		handler.process(new (tink_http_IncomingRequest().default)(req1,tmp,tmp1)).handle(function(out) {
			var out1 = out.header.statusCode;
			var out2 = out.header.reason;
			var _g = [];
			var h = (HxOverrides().default).iter(out.header.fields);
			while(h.hasNext()) {
				var h1 = h.next();
				_g.push([h1.name,h1.value]);
			}
			res.writeHead(out1,out2,_g);
			(tink_io__$Source_Source_$Impl_$().default).pipeTo(out.body,(tink_io_nodejs_NodejsSink().default).wrap("Outgoing HTTP response to " + req.socket.remoteAddress,res)).handle(function(x) {
				res.end();
			});
		});
	};
}
NodeContainer.toUpgradeHandler = function(handler) {
	return function(req,socket,head) {
		var req1 = req.socket.remoteAddress;
		var tmp = (tink_http_IncomingRequestHeader().default).fromIncomingMessage(req);
		var options = null;
		if(options == null) {
			options = { };
		}
		var tmp1 = (tink_http_IncomingRequestBody().default).Plain((tink_io_nodejs_NodejsSource().default).wrap("Incoming HTTP message from " + req.socket.remoteAddress,socket,options.chunkSize,options.onEnd));
		handler.process(new (tink_http_IncomingRequest().default)(req1,tmp,tmp1)).handle(function(out) {
			(tink_io__$Source_Source_$Impl_$().default).pipeTo(out.body.prepend(new (tink_streams_Single().default)(new (tink_core__$Lazy_LazyConst().default)((tink_chunk_ByteChunk().default).of((haxe_io_Bytes().default).ofString(out.header.toString()))))),(tink_io_nodejs_NodejsSink().default).wrap("Outgoing HTTP response to " + req.socket.remoteAddress,socket)).handle(function(_) {
				socket.end();
			});
		});
	};
}


// Export

exports.default = NodeContainer;