// Class: tink.http.clients.CurlClient

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function tink_http_ClientObject() {return require("./../../../tink/http/ClientObject");}
function HxOverrides() {return require("./../../../HxOverrides");}
function tink__$Url_Url_$Impl_$() {return require("./../../../tink/_Url/Url_Impl_");}
function tink_core__$Promise_Promise_$Impl_$() {return require("./../../../tink/core/_Promise/Promise_Impl_");}
function tink_io_RealSourceTools() {return require("./../../../tink/io/RealSourceTools");}
function tink_http_ResponseHeaderBase() {return require("./../../../tink/http/ResponseHeaderBase");}
function tink_core__$Future_SyncFuture() {return require("./../../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}
function tink_core_Outcome() {return require("./../../../tink/core/Outcome");}
function tink_http_IncomingResponse() {return require("./../../../tink/http/IncomingResponse");}
function js_node_ChildProcess() {return require("child_process");}
function tink_io_nodejs_NodejsSink() {return require("./../../../tink/io/nodejs/NodejsSink");}
function tink_io__$Source_Source_$Impl_$() {return require("./../../../tink/io/_Source/Source_Impl_");}
function tink_io_nodejs_NodejsSource() {return require("./../../../tink/io/nodejs/NodejsSource");}

// Constructor

var CurlClient = function(curl) {
	this.protocol = "http";
	if(curl != null) {
		this.curl = curl;
	}
}

// Meta

CurlClient.__name__ = "tink.http.clients.CurlClient";
CurlClient.__interfaces__ = [(tink_http_ClientObject().default)];
CurlClient.prototype = {
	request: function(req) {
		var args = [];
		args.push("-is");
		args.push("-X");
		args.push(req.header.method);
		switch(req.header.protocol) {
		case "HTTP/1.0":
			args.push("--http1.0");
			break;
		case "HTTP/1.1":
			args.push("--http1.1");
			break;
		case "HTTP/2":
			args.push("--http2");
			break;
		default:
		}
		var header = (HxOverrides().default).iter(req.header.fields);
		while(header.hasNext()) {
			var header1 = header.next();
			args.push("-H");
			args.push("" + header1.name + ": " + header1.value);
		}
		args.push((tink__$Url_Url_$Impl_$().default).toString(req.header.url));
		return (tink_core__$Promise_Promise_$Impl_$().default).next((tink_io_RealSourceTools().default).parse(this.curl(args,req.body),(tink_http_ResponseHeaderBase().default).parser()),function(p) {
			return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Success(new (tink_http_IncomingResponse().default)(p.a,p.b))));
		});
	},
	curl: function(args,body) {
		args.push("--data-binary");
		args.push("@-");
		var process = (js_node_ChildProcess()).spawn("curl",args);
		var sink = (tink_io_nodejs_NodejsSink().default).wrap("stdin",process.stdin);
		(tink_io__$Source_Source_$Impl_$().default).pipeTo(body,sink,{ end : true}).eager();
		var options = null;
		if(options == null) {
			options = { };
		}
		return (tink_io_nodejs_NodejsSource().default).wrap("stdout",process.stdout,options.chunkSize,options.onEnd);
	}
};
CurlClient.prototype.__class__ = CurlClient.prototype.constructor = $hxClasses["tink.http.clients.CurlClient"] = CurlClient;

// Init



// Statics




// Export

exports.default = CurlClient;