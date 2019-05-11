// Class: tink.core._Future.Future_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
var $bind = require("./../../../bind_stub").default;
function tink_core__$Future_SyncFuture() {return require("./../../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}
function tink_core_Noise() {return require("./../../../tink/core/Noise");}
function tink_core__$Future_NeverFuture() {return require("./../../../tink/core/_Future/NeverFuture");}
function tink_core__$Future_SimpleFuture() {return require("./../../../tink/core/_Future/SimpleFuture");}
function tink_core_FutureTrigger() {return require("./../../../tink/core/FutureTrigger");}
function tink_core__$Future_NestedFuture() {return require("./../../../tink/core/_Future/NestedFuture");}
function tink_core_Outcome() {return require("./../../../tink/core/Outcome");}
function tink_core_TypedError() {return require("./../../../tink/core/TypedError");}
function tink_core__$Future_LazyTrigger() {return require("./../../../tink/core/_Future/LazyTrigger");}
function tink_core__$Callback_Callback_$Impl_$() {return require("./../../../tink/core/_Callback/Callback_Impl_");}
function haxe_ds_Either() {return require("./../../../haxe/ds/Either");}
function tink_core_MPair() {return require("./../../../tink/core/MPair");}
function tink_core_OutcomeTools() {return require("./../../../tink/core/OutcomeTools");}
function tink_core__$Outcome_OutcomeMapper_$Impl_$() {return require("./../../../tink/core/_Outcome/OutcomeMapper_Impl_");}
function haxe_Timer() {return require("./../../../haxe/Timer");}

// Constructor

var Future_Impl_ = function(){}

// Meta

Future_Impl_.__name__ = "tink.core._Future.Future_Impl_";
Future_Impl_.prototype = {
	
};
Future_Impl_.prototype.__class__ = Future_Impl_.prototype.constructor = $hxClasses["tink.core._Future.Future_Impl_"] = Future_Impl_;

// Init



// Statics

Future_Impl_._new = function(f) {
	var this1 = new (tink_core__$Future_SimpleFuture().default)(f);
	return this1;
}
Future_Impl_.first = function(this1,other) {
	var ret = new (tink_core_FutureTrigger().default)();
	var l1 = this1.handle($bind(ret,ret.trigger));
	var l2 = other.handle($bind(ret,ret.trigger));
	var ret1 = ret;
	if(l1 != null) {
		var this2 = l1;
		ret1.handle(function(_) {
			this2.cancel();
		});
	}
	if(l2 != null) {
		var this3 = l2;
		ret1.handle(function(_1) {
			this3.cancel();
		});
	}
	return ret1;
}
Future_Impl_.map = function(this1,f,gather) {
	if(gather == null) {
		gather = true;
	}
	var ret = this1.map(f);
	if(gather) {
		return ret.gather();
	} else {
		return ret;
	}
}
Future_Impl_.flatMap = function(this1,next,gather) {
	if(gather == null) {
		gather = true;
	}
	var ret = this1.flatMap(next);
	if(gather) {
		return ret.gather();
	} else {
		return ret;
	}
}
Future_Impl_.next = function(this1,n) {
	return this1.flatMap(function(v) {
		return n(v);
	});
}
Future_Impl_.merge = function(this1,other,merger,gather) {
	if(gather == null) {
		gather = true;
	}
	var ret = this1.flatMap(function(t) {
		var ret1 = other.map(function(a) {
			return merger(t,a);
		});
		return ret1;
	});
	if(gather) {
		return ret.gather();
	} else {
		return ret;
	}
}
Future_Impl_.flatten = function(f) {
	return new (tink_core__$Future_NestedFuture().default)(f);
}
Future_Impl_.ofJsPromise = function(promise) {
	return Future_Impl_.async(function(cb) {
		promise.then(function(a) {
			cb((tink_core_Outcome().default).Success(a));
		}).catch(function(e) {
			var tmp = (tink_core_Outcome().default).Failure((tink_core_TypedError().default).withData(null,e.message,e,{ fileName : "tink/core/Future.hx", lineNumber : 78, className : "tink.core._Future.Future_Impl_", methodName : "ofJsPromise"}));
			cb(tmp);
		});
	});
}
Future_Impl_.ofAny = function(v) {
	return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)(v));
}
Future_Impl_.asPromise = function(s) {
	return s;
}
Future_Impl_.ofMany = function(futures,gather) {
	if(gather == null) {
		gather = true;
	}
	var ret = new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)([]));
	var _g = 0;
	while(_g < futures.length) {
		var f = [futures[_g]];
		++_g;
		var ret1 = ret.flatMap((function(f1) {
			return function(results) {
				var ret2 = (function() {
					return function(result) {
						return results.concat([result]);
					};
				})();
				var ret3 = f1[0].map(ret2);
				return ret3;
			};
		})(f));
		ret = ret1;
	}
	if(gather) {
		return ret.gather();
	} else {
		return ret;
	}
}
Future_Impl_.fromMany = function(futures) {
	return Future_Impl_.ofMany(futures);
}
Future_Impl_.lazy = function(l) {
	return new (tink_core__$Future_SyncFuture().default)(l);
}
Future_Impl_.sync = function(v) {
	return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)(v));
}
Future_Impl_.async = function(f,lazy) {
	if(lazy == null) {
		lazy = false;
	}
	if(lazy) {
		return new (tink_core__$Future_LazyTrigger().default)(f);
	} else {
		var op = new (tink_core_FutureTrigger().default)();
		var wrapped = f;
		(tink_core__$Callback_Callback_$Impl_$().default).invoke(wrapped,$bind(op,op.trigger));
		return op;
	}
}
Future_Impl_.or = function(a,b) {
	return Future_Impl_.first(a,b);
}
Future_Impl_.either = function(a,b) {
	var ret = a.map((haxe_ds_Either().default).Left);
	var ret1 = b.map((haxe_ds_Either().default).Right);
	return Future_Impl_.first(ret,ret1);
}
Future_Impl_.and = function(a,b) {
	return Future_Impl_.merge(a,b,function(a1,b1) {
		var this1 = new (tink_core_MPair().default)(a1,b1);
		return this1;
	});
}
Future_Impl_._tryFailingFlatMap = function(f,map) {
	var ret = f.flatMap(function(o) {
		switch(o._hx_index) {
		case 0:
			var d = o.data;
			return map(d);
		case 1:
			var f1 = o.failure;
			return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Failure(f1)));
		}
	});
	return ret.gather();
}
Future_Impl_._tryFlatMap = function(f,map) {
	var ret = f.flatMap(function(o) {
		switch(o._hx_index) {
		case 0:
			var d = o.data;
			var ret1 = map(d).map((tink_core_Outcome().default).Success);
			return ret1.gather();
		case 1:
			var f1 = o.failure;
			return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Failure(f1)));
		}
	});
	return ret.gather();
}
Future_Impl_._tryFailingMap = function(f,map) {
	var ret = f.map(function(o) {
		return (tink_core_OutcomeTools().default).flatMap(o,(tink_core__$Outcome_OutcomeMapper_$Impl_$().default).withSameError(map));
	});
	return ret.gather();
}
Future_Impl_._tryMap = function(f,map) {
	var ret = f.map(function(o) {
		return (tink_core_OutcomeTools().default).map(o,map);
	});
	return ret.gather();
}
Future_Impl_._flatMap = function(f,map) {
	var ret = f.flatMap(map);
	return ret.gather();
}
Future_Impl_._map = function(f,map) {
	var ret = f.map(map);
	return ret.gather();
}
Future_Impl_.trigger = function() {
	return new (tink_core_FutureTrigger().default)();
}
Future_Impl_.delay = function(ms,value) {
	return Future_Impl_.async(function(cb) {
		(haxe_Timer().default).delay(function() {
			cb(value.get());
		},ms);
	});
}
Future_Impl_.NULL = new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)(null))
Future_Impl_.NOISE = new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Noise().default).Noise))
Future_Impl_.NEVER = new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core__$Future_NeverFuture().default).inst))

// Export

exports.default = Future_Impl_;