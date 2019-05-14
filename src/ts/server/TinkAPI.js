// Class: server.TinkAPI

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
var $hxEnums = require("./../hxEnums_stub").default;
var $import = require("./../import_stub").default;
function tink_http_containers_NodeContainer() {return require("./../tink/http/containers/NodeContainer");}
function tink_http_containers__$NodeContainer_ServerKindBase() {return require("./../tink/http/containers/_NodeContainer/ServerKindBase");}
function tink_http_IncomingRequestHeader() {return require("./../tink/http/IncomingRequestHeader");}
function tink_http_IncomingRequest() {return require("./../tink/http/IncomingRequest");}
function tink_http_IncomingRequestBody() {return require("./../tink/http/IncomingRequestBody");}
function tink_io_nodejs_NodejsSource() {return require("./../tink/io/nodejs/NodejsSource");}
function tink_web_routing_Router0() {return require("./../tink/web/routing/Router0");}
function server_Root() {return require("./../server/Root");}
function tink_web_routing_Context() {return require("./../tink/web/routing/Context");}
function HxOverrides() {return require("./../HxOverrides");}
function tink_io__$Source_Source_$Impl_$() {return require("./../tink/io/_Source/Source_Impl_");}
function tink_io_nodejs_NodejsSink() {return require("./../tink/io/nodejs/NodejsSink");}

// Constructor

var TinkAPI = function(){}

// Meta

TinkAPI.__name__ = "server.TinkAPI";
TinkAPI.prototype = {
	
};
TinkAPI.prototype.__class__ = TinkAPI.prototype.constructor = $hxClasses["server.TinkAPI"] = TinkAPI;

// Init



// Statics

TinkAPI.main = function(req,res,next) {
	var container = new (tink_http_containers_NodeContainer().default)((tink_http_containers__$NodeContainer_ServerKindBase().default).Port(8080));
	var req1 = req.socket.remoteAddress;
	var request = (tink_http_IncomingRequestHeader().default).fromIncomingMessage(req);
	var options = null;
	if(options == null) {
		options = { };
	}
	var request1 = new (tink_http_IncomingRequest().default)(req1,request,(tink_http_IncomingRequestBody().default).Plain((tink_io_nodejs_NodejsSource().default).wrap("Incoming HTTP message from " + req.socket.remoteAddress,req,options.chunkSize,options.onEnd)));
	var router = new (tink_web_routing_Router0().default)(new (server_Root().default)());
	return router.route((tink_web_routing_Context().default).ofRequest(request1)).handle(function(out) {
		switch(out._hx_index) {
		case 0:
			var data = out.data;
			var data1 = data.header.statusCode;
			var data2 = data.header.reason;
			var _g = [];
			var h = (HxOverrides().default).iter(data.header.fields);
			while(h.hasNext()) {
				var h1 = h.next();
				_g.push([h1.name,h1.value]);
			}
			res.writeHead(data1,data2,_g);
			(tink_io__$Source_Source_$Impl_$().default).pipeTo(data.body,(tink_io_nodejs_NodejsSink().default).wrap("Outgoing HTTP response to " + req.socket.remoteAddress,res)).handle(function(x) {
				res.end();
			});
			break;
		case 1:
			var data3 = out.failure;
			break;
		}
	});
}


// Export

exports.default = TinkAPI;