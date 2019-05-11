// Class: tink.streams._Stream.RegroupStream

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
var $extend = require("./../../../extend_stub").default;
function tink_streams__$Stream_CompoundStream() {return require("./../../../tink/streams/_Stream/CompoundStream");}
function tink_streams_Empty() {return require("./../../../tink/streams/Empty");}
function tink_streams__$Stream_Handler_$Impl_$() {return require("./../../../tink/streams/_Stream/Handler_Impl_");}
function tink_streams_RegroupStatus() {return require("./../../../tink/streams/RegroupStatus");}
function tink_streams_Handled() {return require("./../../../tink/streams/Handled");}
function tink_core__$Lazy_LazyFunc() {return require("./../../../tink/core/_Lazy/LazyFunc");}
function tink_streams__$Stream_CloggedStream() {return require("./../../../tink/streams/_Stream/CloggedStream");}
function tink_streams__$Stream_Stream_$Impl_$() {return require("./../../../tink/streams/_Stream/Stream_Impl_");}

// Constructor

var RegroupStream = function(source,f,prev) {
	if(prev == null) {
		prev = (tink_streams_Empty().default).inst;
	}
	var ret = null;
	var terminated = false;
	var buf = [];
	var ret1 = source.forEach((tink_streams__$Stream_Handler_$Impl_$().default).ofUnknown(function(item) {
		buf.push(item);
		var ret2 = f.apply(buf,(tink_streams_RegroupStatus().default).Flowing).map(function(o) {
			switch(o._hx_index) {
			case 0:
				var v = o.data;
				ret = v;
				return (tink_streams_Handled().default).Finish;
			case 1:
				var v1 = o.data;
				var l = new (tink_core__$Lazy_LazyFunc().default)((tink_streams_Empty().default).make);
				if(v1._hx_index == 0) {
					var v2 = v1.v;
					ret = v2;
				} else {
					ret = l.get();
				}
				terminated = true;
				return (tink_streams_Handled().default).Finish;
			case 2:
				return (tink_streams_Handled().default).Resume;
			case 3:
				var e = o.e;
				return (tink_streams_Handled().default).Clog(e);
			}
		});
		return ret2.gather();
	})).map(function(o1) {
		switch(o1._hx_index) {
		case 0:
			if(terminated) {
				return ret;
			} else {
				var rest = o1.rest;
				return new RegroupStream(rest,f,ret);
			}
			break;
		case 1:
			var rest1 = o1.at;
			var e1 = o1.error;
			return new (tink_streams__$Stream_CloggedStream().default)((tink_streams__$Stream_Stream_$Impl_$().default).ofError(e1),rest1);
		case 2:
			var e2 = o1.error;
			return (tink_streams__$Stream_Stream_$Impl_$().default).ofError(e2);
		case 3:
			if(buf.length == 0) {
				return (tink_streams_Empty().default).inst;
			} else {
				var ret3 = f.apply(buf,(tink_streams_RegroupStatus().default).Ended).map(function(o2) {
					switch(o2._hx_index) {
					case 0:
						var v3 = o2.data;
						return v3;
					case 1:
						var v4 = o2.data;
						var l1 = new (tink_core__$Lazy_LazyFunc().default)((tink_streams_Empty().default).make);
						if(v4._hx_index == 0) {
							var v5 = v4.v;
							return v5;
						} else {
							return l1.get();
						}
						break;
					case 2:
						return (tink_streams_Empty().default).inst;
					case 3:
						var e3 = o2.e;
						return (tink_streams__$Stream_Stream_$Impl_$().default).ofError(e3);
					}
				});
				return (tink_streams__$Stream_Stream_$Impl_$().default).flatten(ret3.gather());
			}
			break;
		}
	});
	var next = (tink_streams__$Stream_Stream_$Impl_$().default).flatten(ret1.gather());
	(tink_streams__$Stream_CompoundStream().default).call(this,[prev,next]);
}

// Meta

RegroupStream.__name__ = "tink.streams._Stream.RegroupStream";
RegroupStream.__super__ = (tink_streams__$Stream_CompoundStream().default);
RegroupStream.prototype = $extend((tink_streams__$Stream_CompoundStream().default).prototype, {
	
});
RegroupStream.prototype.__class__ = RegroupStream.prototype.constructor = $hxClasses["tink.streams._Stream.RegroupStream"] = RegroupStream;

// Init



// Statics




// Export

exports.default = RegroupStream;