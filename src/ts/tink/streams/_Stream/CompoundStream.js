// Class: tink.streams._Stream.CompoundStream

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
var $extend = require("./../../../extend_stub").default;
function tink_streams_StreamBase() {return require("./../../../tink/streams/StreamBase");}
function tink_core__$Future_SyncFuture() {return require("./../../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}
function tink_streams_Step() {return require("./../../../tink/streams/Step");}
function tink_core__$Future_Future_$Impl_$() {return require("./../../../tink/core/_Future/Future_Impl_");}
function tink_streams_Conclusion() {return require("./../../../tink/streams/Conclusion");}
function tink_streams_Empty() {return require("./../../../tink/streams/Empty");}

// Constructor

var CompoundStream = function(parts) {
	(tink_streams_StreamBase().default).call(this);
	this.parts = parts;
}

// Meta

CompoundStream.__name__ = "tink.streams._Stream.CompoundStream";
CompoundStream.__super__ = (tink_streams_StreamBase().default);
CompoundStream.prototype = $extend((tink_streams_StreamBase().default).prototype, {
	get_depleted: function() {
		switch(this.parts.length) {
		case 0:
			return true;
		case 1:
			return this.parts[0].get_depleted();
		default:
			return false;
		}
	},
	next: function() {
		var _gthis = this;
		if(this.parts.length == 0) {
			return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_streams_Step().default).End));
		} else {
			var ret = this.parts[0].next().flatMap(function(v) {
				switch(v._hx_index) {
				case 0:
					var rest = v.next;
					var v1 = v.value;
					var copy = _gthis.parts.slice();
					copy[0] = rest;
					return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_streams_Step().default).Link(v1,new CompoundStream(copy))));
				case 2:
					if(_gthis.parts.length > 1) {
						return _gthis.parts[1].next();
					} else {
						return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)(v));
					}
					break;
				default:
					return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)(v));
				}
			});
			return ret.gather();
		}
	},
	decompose: function(into) {
		var _g = 0;
		var _g1 = this.parts;
		while(_g < _g1.length) {
			var p = _g1[_g];
			++_g;
			p.decompose(into);
		}
	},
	forEach: function(handler) {
		var parts = this.parts;
		var handler1 = handler;
		return (tink_core__$Future_Future_$Impl_$().default).async(function(cb) {
			CompoundStream.consumeParts(parts,handler1,cb);
		});
	}
});
CompoundStream.prototype.__class__ = CompoundStream.prototype.constructor = $hxClasses["tink.streams._Stream.CompoundStream"] = CompoundStream;

// Init



// Statics

CompoundStream.consumeParts = function(parts,handler,cb) {
	if(parts.length == 0) {
		cb((tink_streams_Conclusion().default).Depleted);
	} else {
		parts[0].forEach(handler).handle(function(o) {
			switch(o._hx_index) {
			case 0:
				var rest = o.rest;
				parts = parts.slice();
				parts[0] = rest;
				var tmp = (tink_streams_Conclusion().default).Halted(new CompoundStream(parts));
				cb(tmp);
				break;
			case 1:
				var at = o.at;
				var e = o.error;
				if(at.get_depleted()) {
					parts = parts.slice(1);
				} else {
					parts = parts.slice();
					parts[0] = at;
				}
				var tmp1 = (tink_streams_Conclusion().default).Clogged(e,new CompoundStream(parts));
				cb(tmp1);
				break;
			case 2:
				var e1 = o.error;
				cb((tink_streams_Conclusion().default).Failed(e1));
				break;
			case 3:
				CompoundStream.consumeParts(parts.slice(1),handler,cb);
				break;
			}
		});
	}
}
CompoundStream.of = function(streams) {
	var ret = [];
	var _g = 0;
	while(_g < streams.length) {
		var s = streams[_g];
		++_g;
		s.decompose(ret);
	}
	if(ret.length == 0) {
		return (tink_streams_Empty().default).inst;
	} else {
		return new CompoundStream(ret);
	}
}


// Export

exports.default = CompoundStream;