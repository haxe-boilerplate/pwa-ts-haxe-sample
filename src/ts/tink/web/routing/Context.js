// Class: tink.web.routing.Context

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
function tink_io__$Source_Source_$Impl_$() {return require("./../../../tink/io/_Source/Source_Impl_");}
function tink_core_TypedError() {return require("./../../../tink/core/TypedError");}
function tink_io_RealSourceTools() {return require("./../../../tink/io/RealSourceTools");}
function HxOverrides() {return require("./../../../HxOverrides");}
function tink_core_NamedWith() {return require("./../../../tink/core/NamedWith");}
function tink_querystring__$Pairs_Pairs_$Impl_$() {return require("./../../../tink/querystring/_Pairs/Pairs_Impl_");}
function tink_core__$Promise_Promise_$Impl_$() {return require("./../../../tink/core/_Promise/Promise_Impl_");}
function tink_core__$Promise_Next_$Impl_$() {return require("./../../../tink/core/_Promise/Next_Impl_");}
function tink_url__$Query_QueryStringParser() {return require("./../../../tink/url/_Query/QueryStringParser");}
function tink_http_BodyPart() {return require("./../../../tink/http/BodyPart");}
function tink_url__$Portion_Portion_$Impl_$() {return require("./../../../tink/url/_Portion/Portion_Impl_");}
function tink_core__$Future_SyncFuture() {return require("./../../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}
function tink_core_Outcome() {return require("./../../../tink/core/Outcome");}
function Std() {return require("./../../../Std");}
function tink_url__$Path_Path_$Impl_$() {return require("./../../../tink/url/_Path/Path_Impl_");}
function tink_url__$Query_Query_$Impl_$() {return require("./../../../tink/url/_Query/Query_Impl_");}
function tink_web_routing_AuthedContext() {return require("./../../../tink/web/routing/AuthedContext");}
function tink_core__$Lazy_LazyFunc() {return require("./../../../tink/core/_Lazy/LazyFunc");}
function haxe_ds_StringMap() {return require("./../../../haxe/ds/StringMap");}
function tink_http__$Header_HeaderValue_$Impl_$() {return require("./../../../tink/http/_Header/HeaderValue_Impl_");}

// Constructor

var Context = function(parent,accepts,request,depth,parts,params) {
	this.parent = parent;
	this.accepts = accepts;
	this.request = request;
	this.depth = depth;
	this.parts = parts;
	this.params = params;
}

// Meta

Context.__name__ = ["tink","web","routing","Context"];
Context.prototype = {
	get_header: function() {
		return this.request.header;
	},
	allRaw: function() {
		var _g = this.request.body;
		var tmp;
		if(_g._hx_index == 0) {
			var s = _g.source;
			tmp = s;
		} else {
			tmp = (tink_io__$Source_Source_$Impl_$().default).ofError(new (tink_core_TypedError().default)(501,"not implemented",{ fileName : "tink/web/routing/Context.hx", lineNumber : 47, className : "tink.web.routing.Context", methodName : "get_rawBody"}));
		}
		return (tink_io_RealSourceTools().default).all(tmp);
	},
	get_rawBody: function() {
		var _g = this.request.body;
		if(_g._hx_index == 0) {
			var s = _g.source;
			return s;
		} else {
			return (tink_io__$Source_Source_$Impl_$().default).ofError(new (tink_core_TypedError().default)(501,"not implemented",{ fileName : "tink/web/routing/Context.hx", lineNumber : 47, className : "tink.web.routing.Context", methodName : "get_rawBody"}));
		}
	},
	headers: function() {
		var _g = [];
		var f = (HxOverrides().default).iter(this.request.header.fields);
		while(f.hasNext()) {
			var f1 = f.next();
			_g.push(new (tink_core_NamedWith().default)(Context.toCamelCase(f1.name),f1.value));
		}
		return (tink_querystring__$Pairs_Pairs_$Impl_$().default).ofIterable(_g);
	},
	parse: function() {
		var _g = this.request.body;
		switch(_g._hx_index) {
		case 0:
			var src = _g.source;
			var parseForm = function() {
				return (tink_core__$Promise_Promise_$Impl_$().default).next((tink_io_RealSourceTools().default).all(src),(tink_core__$Promise_Next_$Impl_$().default).ofSafeSync(function(chunk) {
					var _g1 = [];
					var part = new (tink_url__$Query_QueryStringParser().default)(chunk.toString(),"&","=",0);
					while(part.hasNext()) {
						var part1 = part.next();
						_g1.push(new (tink_core_NamedWith().default)(part1.name,(tink_http_BodyPart().default).Value((tink_url__$Portion_Portion_$Impl_$().default).stringly(part1.value))));
					}
					return _g1;
				}));
			};
			return parseForm();
		case 1:
			var parts = _g.parts;
			return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Success(parts)));
		}
	},
	get_pathLength: function() {
		return this.parts.length - this.depth;
	},
	getPrefix: function() {
		return this.parts.slice(0,this.depth);
	},
	getPath: function() {
		return this.parts.slice(this.depth);
	},
	hasParam: function(name) {
		var _this = this.params;
		if(__map_reserved[name] != null) {
			return _this.existsReserved(name);
		} else {
			return _this.h.hasOwnProperty(name);
		}
	},
	part: function(index) {
		if(this.depth + index >= this.parts.length) {
			return "";
		} else {
			return (tink_url__$Portion_Portion_$Impl_$().default).stringly(this.parts[this.depth + index]);
		}
	},
	param: function(name) {
		var _this = this.params;
		return (tink_url__$Portion_Portion_$Impl_$().default).stringly(__map_reserved[name] != null ? _this.getReserved(name) : _this.h[name]);
	},
	sub: function(descend) {
		return new Context(this,this.accepts,this.request,this.depth + descend,this.parts,this.params);
	}
};
Context.prototype.__class__ = Context.prototype.constructor = $hxClasses["tink.web.routing.Context"] = Context;

// Init



// Statics

Context.toCamelCase = function(header) {
	var header1 = header;
	var ret_b = "";
	var pos = 0;
	var max = header1.length;
	while(pos < max) {
		var _g = header1.charCodeAt(pos++);
		if(_g == 45) {
			if(pos < max) {
				ret_b += (Std().default).string(header1.charAt(pos++).toLowerCase());
			}
		} else {
			var v = _g;
			ret_b += String.fromCodePoint(v);
		}
	}
	return ret_b;
}
Context.ofRequest = function(request) {
	return new Context(null,Context.parseAcceptHeader(request.header),request,0,(tink_url__$Path_Path_$Impl_$().default).parts(request.header.url.path),(tink_url__$Query_Query_$Impl_$().default).toMap(request.header.url.query));
}
Context.authed = function(request,getSession) {
	var tmp = Context.parseAcceptHeader(request.header);
	var tmp1 = (tink_url__$Path_Path_$Impl_$().default).parts(request.header.url.path);
	var tmp2 = (tink_url__$Query_Query_$Impl_$().default).toMap(request.header.url.query);
	var f = getSession;
	var a1 = request.header;
	return new (tink_web_routing_AuthedContext().default)(null,tmp,request,0,tmp1,tmp2,new (tink_core__$Lazy_LazyFunc().default)(function() {
		return f(a1);
	}));
}
Context.parseAcceptHeader = function(h) {
	var _g = h.get("accept");
	if(_g.length == 0) {
		return Context.acceptsAll;
	} else {
		var values = _g;
		var _g1 = new (haxe_ds_StringMap().default)();
		var _g11 = 0;
		while(_g11 < values.length) {
			var v = values[_g11];
			++_g11;
			var _g12 = 0;
			var _g2 = (tink_http__$Header_HeaderValue_$Impl_$().default).parse(v);
			while(_g12 < _g2.length) {
				var part = _g2[_g12];
				++_g12;
				var key = part.value;
				if(__map_reserved[key] != null) {
					_g1.setReserved(key,true);
				} else {
					_g1.h[key] = true;
				}
			}
		}
		var accepted = _g1;
		if(__map_reserved["*/*"] != null ? accepted.getReserved("*/*") : accepted.h["*/*"]) {
			return Context.acceptsAll;
		} else {
			return function(t) {
				if(__map_reserved[t] != null) {
					return accepted.existsReserved(t);
				} else {
					return accepted.h.hasOwnProperty(t);
				}
			};
		}
	}
}
Context.acceptsAll = function(s) {
	return true;
}


// Export

exports.default = Context;