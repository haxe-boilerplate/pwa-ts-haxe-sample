// Class: tink.streams.IdealizeStream

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function tink_streams_IdealStreamBase() {return require("./../../tink/streams/IdealStreamBase");}
function tink_core__$Future_SyncFuture() {return require("./../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../tink/core/_Lazy/LazyConst");}
function tink_core__$Future_Future_$Impl_$() {return require("./../../tink/core/_Future/Future_Impl_");}
function tink_streams_Conclusion() {return require("./../../tink/streams/Conclusion");}

// Constructor

var IdealizeStream = function(target,rescue) {
	(tink_streams_IdealStreamBase().default).call(this);
	this.target = target;
	this.rescue = rescue;
}

// Meta

IdealizeStream.__name__ = "tink.streams.IdealizeStream";
IdealizeStream.__super__ = (tink_streams_IdealStreamBase().default);
IdealizeStream.prototype = $extend((tink_streams_IdealStreamBase().default).prototype, {
	get_depleted: function() {
		return this.target.get_depleted();
	},
	next: function() {
		var _gthis = this;
		var ret = this.target.next().flatMap(function(v) {
			if(v._hx_index == 1) {
				var e = v.e;
				return _gthis.rescue(e).idealize(_gthis.rescue).next();
			} else {
				return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)(v));
			}
		});
		return ret.gather();
	},
	forEach: function(handler) {
		var _gthis = this;
		return (tink_core__$Future_Future_$Impl_$().default).async(function(cb) {
			_gthis.target.forEach(handler).handle(function(end) {
				switch(end._hx_index) {
				case 0:
					var rest = end.rest;
					var tmp = (tink_streams_Conclusion().default).Halted(rest.idealize(_gthis.rescue));
					cb(tmp);
					break;
				case 1:
					var at = end.at;
					var e = end.error;
					var tmp1 = (tink_streams_Conclusion().default).Clogged(e,at.idealize(_gthis.rescue));
					cb(tmp1);
					break;
				case 2:
					var e1 = end.error;
					_gthis.rescue(e1).idealize(_gthis.rescue).forEach(handler).handle(cb);
					break;
				case 3:
					cb((tink_streams_Conclusion().default).Depleted);
					break;
				}
			});
		});
	}
});
IdealizeStream.prototype.__class__ = IdealizeStream.prototype.constructor = $hxClasses["tink.streams.IdealizeStream"] = IdealizeStream;

// Init



// Statics




// Export

exports.default = IdealizeStream;