// Class: tink.core.FutureTrigger

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $bind = require("./../../bind_stub").default;
function tink_core__$Future_FutureObject() {return require("./../../tink/core/_Future/FutureObject");}
function tink_core__$Callback_Callback_$Impl_$() {return require("./../../tink/core/_Callback/Callback_Impl_");}
function tink_core__$Callback_CallbackList_$Impl_$() {return require("./../../tink/core/_Callback/CallbackList_Impl_");}
function tink_core__$Future_SyncFuture() {return require("./../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../tink/core/_Lazy/LazyConst");}
function tink_core__$Future_SimpleFuture() {return require("./../../tink/core/_Future/SimpleFuture");}

// Constructor

var FutureTrigger = function() {
	var this1 = [];
	this.list = this1;
}

// Meta

FutureTrigger.__name__ = "tink.core.FutureTrigger";
FutureTrigger.__interfaces__ = [(tink_core__$Future_FutureObject().default)];
FutureTrigger.prototype = {
	handle: function(callback) {
		var _g = this.list;
		if(_g == null) {
			(tink_core__$Callback_Callback_$Impl_$().default).invoke(callback,this.result);
			return null;
		} else {
			var v = _g;
			return (tink_core__$Callback_CallbackList_$Impl_$().default).add(v,callback);
		}
	},
	map: function(f) {
		var _g = this.list;
		if(_g == null) {
			return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)(f(this.result)));
		} else {
			var v = _g;
			var ret = new FutureTrigger();
			(tink_core__$Callback_CallbackList_$Impl_$().default).add(this.list,function(v1) {
				var tmp = f(v1);
				ret.trigger(tmp);
			});
			return ret;
		}
	},
	flatMap: function(f) {
		var _g = this.list;
		if(_g == null) {
			return f(this.result);
		} else {
			var v = _g;
			var ret = new FutureTrigger();
			(tink_core__$Callback_CallbackList_$Impl_$().default).add(this.list,function(v1) {
				f(v1).handle($bind(ret,ret.trigger));
			});
			return ret;
		}
	},
	gather: function() {
		return this;
	},
	eager: function() {
		return this;
	},
	asFuture: function() {
		return this;
	},
	trigger: function(result) {
		if(this.list == null) {
			return false;
		} else {
			var list = this.list;
			this.list = null;
			this.result = result;
			(tink_core__$Callback_CallbackList_$Impl_$().default).invoke(list,result);
			(tink_core__$Callback_CallbackList_$Impl_$().default).clear(list);
			return true;
		}
	}
};
FutureTrigger.prototype.__class__ = FutureTrigger.prototype.constructor = $hxClasses["tink.core.FutureTrigger"] = FutureTrigger;

// Init



// Statics

FutureTrigger.gatherFuture = function(f) {
	var op = null;
	var this1 = new (tink_core__$Future_SimpleFuture().default)(function(cb) {
		if(op == null) {
			op = new FutureTrigger();
			f.handle($bind(op,op.trigger));
			f = null;
		}
		return op.handle(cb);
	});
	return this1;
}


// Export

exports.default = FutureTrigger;