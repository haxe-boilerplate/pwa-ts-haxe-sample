// Class: tink._Url.Url_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function Reflect() {return require("./../../Reflect");}
function tink_url__$Path_Path_$Impl_$() {return require("./../../tink/url/_Path/Path_Impl_");}
function StringTools() {return require("./../../StringTools");}
function HxOverrides() {return require("./../../HxOverrides");}
function EReg() {return require("./../../EReg");}
function Std() {return require("./../../Std");}
function tink_url__$Host_Host_$Impl_$() {return require("./../../tink/url/_Host/Host_Impl_");}
function tink_json__$Representation_Representation_$Impl_$() {return require("./../../tink/json/_Representation/Representation_Impl_");}

// Constructor

var Url_Impl_ = function(){}

// Meta

Url_Impl_.__name__ = ["tink","_Url","Url_Impl_"];
Url_Impl_.prototype = {
	
};
Url_Impl_.prototype.__class__ = Url_Impl_.prototype.constructor = $hxClasses["tink._Url.Url_Impl_"] = Url_Impl_;

// Init



// Statics

Url_Impl_.get_pathWithQuery = function(this1) {
	if(this1.query == null) {
		return this1.path;
	} else {
		return this1.path + "?" + this1.query;
	}
}
Url_Impl_._new = function(parts) {
	var this1 = parts;
	return this1;
}
Url_Impl_.resolve = function(this1,that) {
	if(that.scheme != null) {
		return that;
	} else if(that.host != null) {
		if(that.scheme != null) {
			return that;
		} else {
			var copy = (Reflect().default).copy(that);
			copy.scheme = this1.scheme;
			return copy;
		}
	} else {
		var parts = { path : (tink_url__$Path_Path_$Impl_$().default).join(this1.path,that.path), payload : "", scheme : this1.scheme, query : that.query, auth : this1.auth, host : this1.host, hash : that.hash};
		Url_Impl_.makePayload(parts);
		var this2 = parts;
		return this2;
	}
}
Url_Impl_.makePayload = function(parts) {
	var payload = "";
	if(parts.auth == null) {
		if(parts.host != null) {
			var host = parts.host;
			payload += "//" + host;
		}
	} else if(parts.host == null) {
		var auth = parts.auth;
		payload += "//" + (auth == null ? "" : "" + auth + "@");
	} else {
		var auth1 = parts.auth;
		var host1 = parts.host;
		payload += "//" + (auth1 == null ? "" : "" + auth1 + "@") + host1;
	}
	payload += parts.path;
	var _g = parts.query;
	if(_g != null) {
		var v = _g;
		payload += "?" + v;
	}
	var _g1 = parts.hash;
	if(_g1 != null) {
		var v1 = _g1;
		payload += "#" + v1;
	}
	parts.payload = payload.toString();
}
Url_Impl_.toString = function(this1) {
	if(this1.scheme == null) {
		return this1.payload;
	} else {
		return "" + this1.scheme + ":" + this1.payload;
	}
}
Url_Impl_.fromString = function(s) {
	return Url_Impl_.parse(s);
}
Url_Impl_.noop = function(_) {
}
Url_Impl_.parse = function(s,onError) {
	if(s == null) {
		return Url_Impl_.parse("");
	}
	if(onError == null) {
		onError = Url_Impl_.noop;
	}
	s = (StringTools().default).trim(s);
	if((StringTools().default).startsWith(s,"data:")) {
		var this1 = { scheme : "data", payload : (HxOverrides().default).substr(s,5,null)};
		return this1;
	}
	var FORMAT = new (EReg().default)("^(([a-zA-Z][a-zA-Z0-9\\-+.]*):)?((//(([^@/]+)@)?([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?)$","");
	var HOST = new (EReg().default)("^(\\[(.*)\\]|([^:]*))(:(.*))?$","");
	FORMAT.match(s);
	var hosts;
	var _g = FORMAT.matched(7);
	if(_g == null) {
		hosts = [];
	} else {
		var v = _g;
		var _g1 = [];
		var _g11 = 0;
		var _g2 = v.split(",");
		while(_g11 < _g2.length) {
			var host = _g2[_g11];
			++_g11;
			HOST.match(host);
			var host1;
			var _g12 = HOST.matched(2);
			var _g21 = HOST.matched(3);
			if(_g12 == null) {
				var ipv4 = _g21;
				host1 = ipv4;
			} else if(_g21 == null) {
				var ipv6 = _g12;
				host1 = "[" + ipv6 + "]";
			} else {
				onError("invalid host " + host);
				host1 = null;
			}
			var port;
			var _g3 = HOST.matched(5);
			if(_g3 == null) {
				port = null;
			} else {
				var v1 = _g3;
				var _g31 = (Std().default).parseInt(v1);
				if(_g31 == null) {
					onError("invalid port " + v1);
					port = null;
				} else {
					var p = _g31;
					port = p;
				}
			}
			_g1.push((tink_url__$Host_Host_$Impl_$().default)._new(host1,port));
		}
		hosts = _g1;
	}
	var path = FORMAT.matched(8);
	if(hosts.length > 0 && path.charAt(0) != "/") {
		path = "/" + path;
	}
	var this2 = { scheme : FORMAT.matched(2), payload : FORMAT.matched(3), host : hosts[0], hosts : hosts, auth : FORMAT.matched(6), path : (tink_url__$Path_Path_$Impl_$().default).ofString(path), query : FORMAT.matched(10), hash : FORMAT.matched(12)};
	return this2;
}
Url_Impl_.make = function(parts) {
	var parts1 = { payload : "", path : parts.path, query : parts.query, host : parts.host, hosts : parts.hosts, auth : parts.auth, scheme : parts.scheme, hash : parts.hash};
	Url_Impl_.makePayload(parts1);
	var this1 = parts1;
	return this1;
}
Url_Impl_.fromRepresentation = function(v) {
	return Url_Impl_.parse((tink_json__$Representation_Representation_$Impl_$().default).get(v));
}
Url_Impl_.toRepresentation = function(this1) {
	var this2 = Url_Impl_.toString(this1);
	return this2;
}
Url_Impl_.SCHEME = 2
Url_Impl_.PAYLOAD = 3
Url_Impl_.AUTH = 6
Url_Impl_.HOSTNAMES = 7
Url_Impl_.PATH = 8
Url_Impl_.QUERY = 10
Url_Impl_.HASH = 12

// Export

exports.default = Url_Impl_;