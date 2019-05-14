// Class: tink.web.proxy._Remote.RemoteEndpoint_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function tink_url__$Path_Path_$Impl_$() {return require("./../../../../tink/url/_Path/Path_Impl_");}
function tink_web_proxy__$Remote_QueryParams_$Impl_$() {return require("./../../../../tink/web/proxy/_Remote/QueryParams_Impl_");}
function tink_core__$Promise_Promise_$Impl_$() {return require("./../../../../tink/core/_Promise/Promise_Impl_");}
function tink_http_OutgoingRequest() {return require("./../../../../tink/http/OutgoingRequest");}
function tink_http_OutgoingRequestHeader() {return require("./../../../../tink/http/OutgoingRequestHeader");}
function tink__$Url_Url_$Impl_$() {return require("./../../../../tink/_Url/Url_Impl_");}
function tink_web_proxy__$Remote_ResponseReader_$Impl_$() {return require("./../../../../tink/web/proxy/_Remote/ResponseReader_Impl_");}

// Constructor

var RemoteEndpoint_Impl_ = function(){}

// Meta

RemoteEndpoint_Impl_.__name__ = "tink.web.proxy._Remote.RemoteEndpoint_Impl_";
RemoteEndpoint_Impl_.prototype = {
	
};
RemoteEndpoint_Impl_.prototype.__class__ = RemoteEndpoint_Impl_.prototype.constructor = $hxClasses["tink.web.proxy._Remote.RemoteEndpoint_Impl_"] = RemoteEndpoint_Impl_;

// Init



// Statics

RemoteEndpoint_Impl_._new = function(host) {
	var this1 = { host : host};
	return this1;
}
RemoteEndpoint_Impl_.concat = function(a,b) {
	if(a == null) {
		var r = b;
		return r;
	} else if(b == null) {
		var r1 = a;
		return r1;
	} else {
		return a.concat(b);
	}
}
RemoteEndpoint_Impl_.sub = function(this1,options) {
	return { host : this1.host, headers : RemoteEndpoint_Impl_.concat(this1.headers,options.headers), query : RemoteEndpoint_Impl_.concat(this1.query,options.query), path : RemoteEndpoint_Impl_.concat(this1.path,options.path)};
}
RemoteEndpoint_Impl_.uri = function(this1) {
	var _g = this1.path;
	var tmp;
	if(_g == null) {
		tmp = "";
	} else {
		var v = _g;
		tmp = (tink_url__$Path_Path_$Impl_$().default).normalize(v.join("/"));
	}
	return "/" + tmp + (tink_web_proxy__$Remote_QueryParams_$Impl_$().default).toString(this1.query);
}
RemoteEndpoint_Impl_.request = function(this1,client,method,body,reader) {
	return (tink_core__$Promise_Promise_$Impl_$().default).next(client.request(new (tink_http_OutgoingRequest().default)(new (tink_http_OutgoingRequestHeader().default)(method,(tink__$Url_Url_$Impl_$().default).fromString("//" + this1.host + RemoteEndpoint_Impl_.uri(this1)),null,this1.headers),body)),function(response) {
		return ((tink_web_proxy__$Remote_ResponseReader_$Impl_$().default).withHeader(reader,response.header))(response.body);
	});
}
RemoteEndpoint_Impl_.fromHost = function(host) {
	return RemoteEndpoint_Impl_._new(host);
}


// Export

exports.default = RemoteEndpoint_Impl_;