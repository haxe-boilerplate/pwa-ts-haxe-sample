// Class: tink.streams._Stream.Filter_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
function tink_core__$Promise_Promise_$Impl_$() {return require("./../../../tink/core/_Promise/Promise_Impl_");}
function tink_core__$Future_SyncFuture() {return require("./../../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}
function tink_core_Outcome() {return require("./../../../tink/core/Outcome");}
function tink_streams_RegroupResult() {return require("./../../../tink/streams/RegroupResult");}
function tink_streams__$Stream_Stream_$Impl_$() {return require("./../../../tink/streams/_Stream/Stream_Impl_");}
function tink_streams_Empty() {return require("./../../../tink/streams/Empty");}
function tink_core__$Promise_Recover_$Impl_$() {return require("./../../../tink/core/_Promise/Recover_Impl_");}

// Constructor

var Filter_Impl_ = function(){}

// Meta

Filter_Impl_.__name__ = ["tink","streams","_Stream","Filter_Impl_"];
Filter_Impl_.prototype = {
	
};
Filter_Impl_.prototype.__class__ = Filter_Impl_.prototype.constructor = $hxClasses["tink.streams._Stream.Filter_Impl_"] = Filter_Impl_;

// Init



// Statics

Filter_Impl_._new = function(o) {
	var this1 = o;
	return this1;
}
Filter_Impl_.ofNext = function(n) {
	var this1 = { apply : function(i,_) {
		var this2 = (tink_core__$Promise_Promise_$Impl_$().default).next(n(i[0]),function(matched) {
			return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_core_Outcome().default).Success((tink_streams_RegroupResult().default).Converted(matched ? (tink_streams__$Stream_Stream_$Impl_$().default).single(i[0]) : (tink_streams_Empty().default).inst))));
		});
		var f = (tink_core__$Promise_Recover_$Impl_$().default).ofSync((tink_streams_RegroupResult().default).Errored);
		var ret = this2.flatMap(function(o) {
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
	}};
	return this1;
}
Filter_Impl_.ofAsync = function(f) {
	var this1 = { apply : function(i,_) {
		var ret = f(i[0]).map(function(matched) {
			return (tink_streams_RegroupResult().default).Converted(matched ? (tink_streams__$Stream_Stream_$Impl_$().default).single(i[0]) : (tink_streams_Empty().default).inst);
		});
		return ret.gather();
	}};
	return this1;
}
Filter_Impl_.ofSync = function(f) {
	var this1 = { apply : function(i,_) {
		var v;
		var _g = f(i[0]);
		switch(_g._hx_index) {
		case 0:
			var v1 = _g.data;
			v = (tink_streams_RegroupResult().default).Converted(v1 ? (tink_streams__$Stream_Stream_$Impl_$().default).single(i[0]) : (tink_streams_Empty().default).inst);
			break;
		case 1:
			var e = _g.failure;
			v = (tink_streams_RegroupResult().default).Errored(e);
			break;
		}
		return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)(v));
	}};
	return this1;
}
Filter_Impl_.ofPlain = function(f) {
	var this1 = { apply : function(i,_) {
		return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_streams_RegroupResult().default).Converted(f(i[0]) ? (tink_streams__$Stream_Stream_$Impl_$().default).single(i[0]) : (tink_streams_Empty().default).inst)));
	}};
	return this1;
}


// Export

exports.default = Filter_Impl_;