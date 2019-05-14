// Class: tink.web.routing.Router0

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function tink_core__$Promise_Promise_$Impl_$() {return require("./../../../tink/core/_Promise/Promise_Impl_");}
function tink_core__$Future_SyncFuture() {return require("./../../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}
function tink_core_Outcome() {return require("./../../../tink/core/Outcome");}
function tink_core_TypedError() {return require("./../../../tink/core/TypedError");}
function tink__$Stringly_Stringly_$Impl_$() {return require("./../../../tink/_Stringly/Stringly_Impl_");}
function tink_core__$Promise_Next_$Impl_$() {return require("./../../../tink/core/_Promise/Next_Impl_");}
function tink_web_routing__$Response_Response_$Impl_$() {return require("./../../../tink/web/routing/_Response/Response_Impl_");}

// Constructor

var Router0 = function(target) {
	this.target = target;
}

// Meta

Router0.__name__ = "tink.web.routing.Router0";
Router0.prototype = {
	route: function(ctx) {
		var l = ctx.parts.length - ctx.depth;
		var _g = l > 2;
		var _g1 = l > 1;
		var _g3 = ctx.part(1);
		var _g4 = ctx.part(0);
		if(ctx.request.header.method == "GET") {
			switch(l > 0) {
			case false:
				return (tink_core__$Promise_Promise_$Impl_$().default).ofSpecific(this.hello(ctx,null));
			case true:
				if(_g4 == "doood") {
					if(_g1 == true) {
						if(_g == false) {
							var name = _g3;
							return (tink_core__$Promise_Promise_$Impl_$().default).ofSpecific(this.hello(ctx,name));
						} else {
							var this1 = ctx.request.header.url;
							return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Failure(new (tink_core_TypedError().default)(404,"Not Found: [" + ctx.request.header.method + "] " + (this1.query == null ? this1.path : this1.path + "?" + this1.query),{ fileName : "src/hx/server/TinkAPI.hx", lineNumber : 30, className : "tink.web.routing.Router0", methodName : "route"}))));
						}
					} else {
						var this2 = ctx.request.header.url;
						return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Failure(new (tink_core_TypedError().default)(404,"Not Found: [" + ctx.request.header.method + "] " + (this2.query == null ? this2.path : this2.path + "?" + this2.query),{ fileName : "src/hx/server/TinkAPI.hx", lineNumber : 30, className : "tink.web.routing.Router0", methodName : "route"}))));
					}
				} else {
					var this3 = ctx.request.header.url;
					return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Failure(new (tink_core_TypedError().default)(404,"Not Found: [" + ctx.request.header.method + "] " + (this3.query == null ? this3.path : this3.path + "?" + this3.query),{ fileName : "src/hx/server/TinkAPI.hx", lineNumber : 30, className : "tink.web.routing.Router0", methodName : "route"}))));
				}
				break;
			}
		} else {
			var this4 = ctx.request.header.url;
			return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Failure(new (tink_core_TypedError().default)(404,"Not Found: [" + ctx.request.header.method + "] " + (this4.query == null ? this4.path : this4.path + "?" + this4.query),{ fileName : "src/hx/server/TinkAPI.hx", lineNumber : 30, className : "tink.web.routing.Router0", methodName : "route"}))));
		}
	},
	hello: function(ctx,name) {
		var d = this.target;
		var d1;
		if(name == null) {
			d1 = null;
		} else {
			var _g = (tink__$Stringly_Stringly_$Impl_$().default).parse(name,function(s) {
				return s;
			});
			switch(_g._hx_index) {
			case 0:
				var v = _g.data;
				d1 = v;
				break;
			case 1:
				var e = _g.failure;
				return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Failure(e)));
			}
		}
		return (tink_core__$Promise_Promise_$Impl_$().default).next(new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Success(d.hello(d1)))),(tink_core__$Promise_Next_$Impl_$().default).ofSafeSync(function(v1) {
			return (tink_web_routing__$Response_Response_$Impl_$().default).ofString(v1);
		}));
	}
};
Router0.prototype.__class__ = Router0.prototype.constructor = $hxClasses["tink.web.routing.Router0"] = Router0;

// Init



// Statics




// Export

exports.default = Router0;