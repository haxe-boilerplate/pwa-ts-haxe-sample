// Class: tink.core._Promise.Promise_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
var $getIterator = require("./../../../getIterator_stub").default;
function tink_core__$Future_SyncFuture() {return require("./../../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}
function tink_core_Outcome() {return require("./../../../tink/core/Outcome");}
function tink_core_Noise() {return require("./../../../tink/core/Noise");}
function tink_core__$Future_Future_$Impl_$() {return require("./../../../tink/core/_Future/Future_Impl_");}
function tink_core_OutcomeTools() {return require("./../../../tink/core/OutcomeTools");}
function tink_core_MPair() {return require("./../../../tink/core/MPair");}
function HxOverrides() {return require("./../../../HxOverrides");}
function tink_core__$Callback_CallbackLink_$Impl_$() {return require("./../../../tink/core/_Callback/CallbackLink_Impl_");}
function tink_core_FutureTrigger() {return require("./../../../tink/core/FutureTrigger");}

// Constructor

var Promise_Impl_ = function(){}

// Meta

Promise_Impl_.__name__ = ["tink","core","_Promise","Promise_Impl_"];
Promise_Impl_.prototype = {
	
};
Promise_Impl_.prototype.__class__ = Promise_Impl_.prototype.constructor = $hxClasses["tink.core._Promise.Promise_Impl_"] = Promise_Impl_;

// Init



// Statics

Promise_Impl_._new = function(f,lazy) {
	if(lazy == null) {
		lazy = false;
	}
	var this1 = (tink_core__$Future_Future_$Impl_$().default).async(function(cb) {
		f(function(v) {
			cb((tink_core_Outcome().default).Success(v));
		},function(e) {
			cb((tink_core_Outcome().default).Failure(e));
		});
	},lazy);
	return this1;
}
Promise_Impl_.eager = function(this1) {
	return this1.eager();
}
Promise_Impl_.map = function(this1,f) {
	var ret = this1.map(f);
	return ret.gather();
}
Promise_Impl_.flatMap = function(this1,f) {
	var ret = this1.flatMap(f);
	return ret.gather();
}
Promise_Impl_.tryRecover = function(this1,f) {
	var ret = this1.flatMap(function(o) {
		switch(o._hx_index) {
		case 0:
			var d = o.data;
			return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)(o));
		case 1:
			var e = o.failure;
			return f(e);
		}
	});
	return ret.gather();
}
Promise_Impl_.recover = function(this1,f) {
	var ret = this1.flatMap(function(o) {
		switch(o._hx_index) {
		case 0:
			var d = o.data;
			return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)(d));
		case 1:
			var e = o.failure;
			return f(e);
		}
	});
	return ret.gather();
}
Promise_Impl_.mapError = function(this1,f) {
	var ret = this1.map(function(o) {
		switch(o._hx_index) {
		case 0:
			return o;
		case 1:
			var e = o.failure;
			return (tink_core_Outcome().default).Failure(f(e));
		}
	});
	return ret.gather();
}
Promise_Impl_.handle = function(this1,cb) {
	return this1.handle(cb);
}
Promise_Impl_.noise = function(this1) {
	return Promise_Impl_.next(this1,function(v) {
		return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Success((tink_core_Noise().default).Noise)));
	});
}
Promise_Impl_.isSuccess = function(this1) {
	var ret = this1.map(function(o) {
		return (tink_core_OutcomeTools().default).isSuccess(o);
	});
	return ret.gather();
}
Promise_Impl_.next = function(this1,f,gather) {
	if(gather == null) {
		gather = true;
	}
	var ret = this1.flatMap(function(o) {
		switch(o._hx_index) {
		case 0:
			var d = o.data;
			return f(d);
		case 1:
			var f1 = o.failure;
			return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Failure(f1)));
		}
	});
	if(gather) {
		return ret.gather();
	} else {
		return ret;
	}
}
Promise_Impl_.swap = function(this1,v) {
	return (tink_core__$Future_Future_$Impl_$().default)._tryMap(this1,function(_) {
		return v;
	});
}
Promise_Impl_.swapError = function(this1,e) {
	return Promise_Impl_.mapError(this1,function(_) {
		return e;
	});
}
Promise_Impl_.merge = function(this1,other,merger,gather) {
	if(gather == null) {
		gather = true;
	}
	return Promise_Impl_.next(this1,function(t) {
		return Promise_Impl_.next(other,function(a) {
			return merger(t,a);
		},false);
	},gather);
}
Promise_Impl_.and = function(a,b) {
	return Promise_Impl_.merge(a,b,function(a1,b1) {
		var this1 = new (tink_core_MPair().default)(a1,b1);
		return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Success(this1)));
	});
}
Promise_Impl_.iterate = function(promises,yield,finally,lazy) {
	return (tink_core__$Future_Future_$Impl_$().default).async(function(cb) {
		var iter = $getIterator(promises);
		var next = null;
		next = function() {
			if(iter.hasNext()) {
				iter.next().handle(function(o) {
					switch(o._hx_index) {
					case 0:
						var v = o.data;
						yield(v).handle(function(o1) {
							switch(o1._hx_index) {
							case 0:
								switch(o1.data._hx_index) {
								case 0:
									var ret = o1.data.v;
									cb((tink_core_Outcome().default).Success(ret));
									break;
								case 1:
									next();
									break;
								}
								break;
							case 1:
								var e = o1.failure;
								cb((tink_core_Outcome().default).Failure(e));
								break;
							}
						});
						break;
					case 1:
						var e1 = o.failure;
						cb((tink_core_Outcome().default).Failure(e1));
						break;
					}
				});
			} else {
				finally.handle(cb);
			}
		};
		next();
	},lazy);
}
Promise_Impl_.retry = function(gen,next) {
	var stamp = function() {
		return Date.now() / 1000 * 1000;
	};
	var start = stamp();
	var attempt = null;
	attempt = function(count) {
		var f = function(error) {
			var f1 = stamp() - start;
			return Promise_Impl_.next(next({ attempt : count, error : error, elapsed : f1}),function(_) {
				return attempt(count + 1);
			});
		};
		var ret = gen().flatMap(function(o) {
			switch(o._hx_index) {
			case 0:
				var d = o.data;
				return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)(o));
			case 1:
				var e = o.failure;
				return f(e);
			}
		});
		return ret.gather();
	};
	return attempt(1);
}
Promise_Impl_.ofJsPromise = function(promise) {
	return (tink_core__$Future_Future_$Impl_$().default).ofJsPromise(promise);
}
Promise_Impl_.ofSpecific = function(s) {
	return s;
}
Promise_Impl_.ofFuture = function(f) {
	var ret = f.map((tink_core_Outcome().default).Success);
	return ret.gather();
}
Promise_Impl_.ofOutcome = function(o) {
	return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)(o));
}
Promise_Impl_.ofError = function(e) {
	return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Failure(e)));
}
Promise_Impl_.ofData = function(d) {
	return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Success(d)));
}
Promise_Impl_.lazy = function(p) {
	return (tink_core__$Future_Future_$Impl_$().default).async(function(cb) {
		p.get().handle(cb);
	},true);
}
Promise_Impl_.inParallel = function(a,concurrency,lazy) {
	if(a.length == 0) {
		return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Success([])));
	} else {
		return (tink_core__$Future_Future_$Impl_$().default).async(function(cb) {
			var result = [];
			var pending = a.length;
			var links = null;
			var linkArray = [];
			var sync = false;
			var i = 0;
			var iter = (HxOverrides().default).iter(a);
			var next = null;
			var done = function(o) {
				if(links == null) {
					sync = true;
				} else if(links != null) {
					links.cancel();
				}
				cb(o);
			};
			var fail = function(e) {
				pending = 0;
				done((tink_core_Outcome().default).Failure(e));
			};
			var set = function(index,value) {
				result[index] = value;
				if((pending -= 1) == 0) {
					done((tink_core_Outcome().default).Success(result));
				} else if(iter.hasNext() && pending > 0) {
					next();
				}
			};
			next = function() {
				i += 1;
				var index1 = i - 1;
				var next1 = iter.next().handle(function(o1) {
					switch(o1._hx_index) {
					case 0:
						var v = o1.data;
						set(index1,v);
						break;
					case 1:
						var e1 = o1.failure;
						fail(e1);
						break;
					}
				});
				linkArray.push(next1);
			};
			while(true) {
				var tmp;
				if(iter.hasNext() && pending > 0) {
					if(concurrency != null) {
						concurrency -= 1;
						tmp = concurrency + 1 > 0;
					} else {
						tmp = true;
					}
				} else {
					tmp = false;
				}
				if(!tmp) {
					break;
				}
				next();
			}
			links = (tink_core__$Callback_CallbackLink_$Impl_$().default).fromMany(linkArray);
			if(sync) {
				if(links != null) {
					links.cancel();
				}
			}
		},lazy);
	}
}
Promise_Impl_.inSequence = function(a) {
	var loop = null;
	loop = function(index) {
		if(index == a.length) {
			return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Success([])));
		} else {
			return Promise_Impl_.next(a[index],function(head) {
				return Promise_Impl_.next(loop(index + 1),function(tail) {
					return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Success([head].concat(tail))));
				});
			});
		}
	};
	return loop(0);
}
Promise_Impl_.cache = function(gen) {
	var p = null;
	return function() {
		var ret = p;
		if(ret == null) {
			var sync = false;
			ret = Promise_Impl_.next(gen(),function(o) {
				o.b.handle(function(_) {
					sync = true;
					p = null;
				});
				return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Success(o.a)));
			});
			if(!sync) {
				p = ret;
			}
		}
		var ret1 = ret.map(function(o1) {
			if(!(tink_core_OutcomeTools().default).isSuccess(o1)) {
				p = null;
			}
			return o1;
		});
		return ret1.gather();
	};
}
Promise_Impl_.lift = function(p) {
	return p;
}
Promise_Impl_.trigger = function() {
	var this1 = new (tink_core_FutureTrigger().default)();
	return this1;
}
Promise_Impl_.NULL = new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Success(null)))
Promise_Impl_.NOISE = new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Success((tink_core_Noise().default).Noise)))
Promise_Impl_.NEVER = (function($this) {
	var $r;
	var ret = (tink_core__$Future_Future_$Impl_$().default).NEVER.map((tink_core_Outcome().default).Success);
	$r = ret.gather();
	return $r;
}(this))

// Export

exports.default = Promise_Impl_;