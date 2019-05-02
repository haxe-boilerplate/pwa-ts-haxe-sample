// Class: tink.core._Signal.Signal_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
var $bind = require("./../../../bind_stub").default;
function tink_core__$Signal_SimpleSignal() {return require("./../../../tink/core/_Signal/SimpleSignal");}
function tink_core__$Callback_Callback_$Impl_$() {return require("./../../../tink/core/_Callback/Callback_Impl_");}
function tink_core__$Callback_LinkPair() {return require("./../../../tink/core/_Callback/LinkPair");}
function tink_core_FutureTrigger() {return require("./../../../tink/core/FutureTrigger");}
function tink_core__$Signal_Suspendable() {return require("./../../../tink/core/_Signal/Suspendable");}
function tink_core__$Callback_CallbackLink_$Impl_$() {return require("./../../../tink/core/_Callback/CallbackLink_Impl_");}
function tink_core_Noise() {return require("./../../../tink/core/Noise");}
function tink_core__$Callback_CallbackList_$Impl_$() {return require("./../../../tink/core/_Callback/CallbackList_Impl_");}
function tink_core_SignalTrigger() {return require("./../../../tink/core/SignalTrigger");}
function tink_core__$Callback_SimpleLink() {return require("./../../../tink/core/_Callback/SimpleLink");}

// Constructor

var Signal_Impl_ = function(){}

// Meta

Signal_Impl_.__name__ = ["tink","core","_Signal","Signal_Impl_"];
Signal_Impl_.prototype = {
	
};
Signal_Impl_.prototype.__class__ = Signal_Impl_.prototype.constructor = $hxClasses["tink.core._Signal.Signal_Impl_"] = Signal_Impl_;

// Init



// Statics

Signal_Impl_._new = function(f) {
	var this1 = new (tink_core__$Signal_SimpleSignal().default)(f);
	return this1;
}
Signal_Impl_.map = function(this1,f,gather) {
	if(gather == null) {
		gather = true;
	}
	var this2 = new (tink_core__$Signal_SimpleSignal().default)(function(cb) {
		return this1.handle(function(result) {
			var this3 = f(result);
			(tink_core__$Callback_Callback_$Impl_$().default).invoke(cb,this3);
		});
	});
	var ret = this2;
	if(gather) {
		return Signal_Impl_.gather(ret);
	} else {
		return ret;
	}
}
Signal_Impl_.flatMap = function(this1,f,gather) {
	if(gather == null) {
		gather = true;
	}
	var this2 = new (tink_core__$Signal_SimpleSignal().default)(function(cb) {
		return this1.handle(function(result) {
			f(result).handle(cb);
		});
	});
	var ret = this2;
	if(gather) {
		return Signal_Impl_.gather(ret);
	} else {
		return ret;
	}
}
Signal_Impl_.filter = function(this1,f,gather) {
	if(gather == null) {
		gather = true;
	}
	var this2 = new (tink_core__$Signal_SimpleSignal().default)(function(cb) {
		return this1.handle(function(result) {
			if(f(result)) {
				(tink_core__$Callback_Callback_$Impl_$().default).invoke(cb,result);
			}
		});
	});
	var ret = this2;
	if(gather) {
		return Signal_Impl_.gather(ret);
	} else {
		return ret;
	}
}
Signal_Impl_.select = function(this1,selector,gather) {
	if(gather == null) {
		gather = true;
	}
	var this2 = new (tink_core__$Signal_SimpleSignal().default)(function(cb) {
		return this1.handle(function(result) {
			var _g = selector(result);
			switch(_g._hx_index) {
			case 0:
				var v = _g.v;
				(tink_core__$Callback_Callback_$Impl_$().default).invoke(cb,v);
				break;
			case 1:
				break;
			}
		});
	});
	var ret = this2;
	if(gather) {
		return Signal_Impl_.gather(ret);
	} else {
		return ret;
	}
}
Signal_Impl_.join = function(this1,other,gather) {
	if(gather == null) {
		gather = true;
	}
	var this2 = new (tink_core__$Signal_SimpleSignal().default)(function(cb) {
		return new (tink_core__$Callback_LinkPair().default)(this1.handle(cb),other.handle(cb));
	});
	var ret = this2;
	if(gather) {
		return Signal_Impl_.gather(ret);
	} else {
		return ret;
	}
}
Signal_Impl_.nextTime = function(this1,condition) {
	var ret = new (tink_core_FutureTrigger().default)();
	var link = null;
	var immediate = false;
	link = this1.handle(function(v) {
		if(condition == null || condition(v)) {
			ret.trigger(v);
			if(link == null) {
				immediate = true;
			} else if(link != null) {
				link.cancel();
			}
		}
	});
	if(immediate) {
		if(link != null) {
			link.cancel();
		}
	}
	return ret;
}
Signal_Impl_.until = function(this1,end) {
	var ret = new (tink_core__$Signal_Suspendable().default)(function(yield) {
		var this2 = this1.handle(yield);
		if(this2 == null) {
			return (tink_core__$Callback_CallbackLink_$Impl_$().default).noop;
		} else {
			return ($_=this2,$bind($_,$_.cancel));
		}
	});
	end.handle((tink_core__$Callback_Callback_$Impl_$().default).fromNiladic($bind(ret,ret.kill)));
	return ret;
}
Signal_Impl_.next = function(this1,condition) {
	return Signal_Impl_.nextTime(this1,condition);
}
Signal_Impl_.noise = function(this1) {
	return Signal_Impl_.map(this1,function(_) {
		return (tink_core_Noise().default).Noise;
	});
}
Signal_Impl_.gather = function(this1) {
	var ret = Signal_Impl_.trigger();
	this1.handle(function(x) {
		(tink_core__$Callback_CallbackList_$Impl_$().default).invoke(ret.handlers,x);
	});
	return ret;
}
Signal_Impl_.generate = function(generator) {
	var ret = Signal_Impl_.trigger();
	generator($bind(ret,ret.trigger));
	return ret;
}
Signal_Impl_.trigger = function() {
	return new (tink_core_SignalTrigger().default)();
}
Signal_Impl_.create = function(create) {
	return new (tink_core__$Signal_Suspendable().default)(create);
}
Signal_Impl_.ofClassical = function(add,remove,gather) {
	if(gather == null) {
		gather = true;
	}
	var this1 = new (tink_core__$Signal_SimpleSignal().default)(function(cb) {
		var f = function(a) {
			(tink_core__$Callback_Callback_$Impl_$().default).invoke(cb,a);
		};
		add(f);
		var f1 = remove;
		var a1 = f;
		var this2 = new (tink_core__$Callback_SimpleLink().default)(function() {
			f1(a1);
		});
		return this2;
	});
	var ret = this1;
	if(gather) {
		return Signal_Impl_.gather(ret);
	} else {
		return ret;
	}
}


// Export

exports.default = Signal_Impl_;