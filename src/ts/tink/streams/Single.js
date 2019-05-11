// Class: tink.streams.Single

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function tink_streams_StreamBase() {return require("./../../tink/streams/StreamBase");}
function tink_core__$Future_SyncFuture() {return require("./../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../tink/core/_Lazy/LazyConst");}
function tink_streams_Step() {return require("./../../tink/streams/Step");}
function tink_streams_Empty() {return require("./../../tink/streams/Empty");}
function tink_streams_Conclusion() {return require("./../../tink/streams/Conclusion");}

// Constructor

var Single = function(value) {
	(tink_streams_StreamBase().default).call(this);
	this.value = value;
}

// Meta

Single.__name__ = "tink.streams.Single";
Single.__super__ = (tink_streams_StreamBase().default);
Single.prototype = $extend((tink_streams_StreamBase().default).prototype, {
	next: function() {
		return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_streams_Step().default).Link(this.value.get(),(tink_streams_Empty().default).inst)));
	},
	forEach: function(handle) {
		var _gthis = this;
		var ret = handle(this.value.get()).map(function(step) {
			switch(step._hx_index) {
			case 0:
				return (tink_streams_Conclusion().default).Halted(_gthis);
			case 1:
				return (tink_streams_Conclusion().default).Halted((tink_streams_Empty().default).inst);
			case 2:
				return (tink_streams_Conclusion().default).Depleted;
			case 3:
				var e = step.e;
				return (tink_streams_Conclusion().default).Clogged(e,_gthis);
			}
		});
		return ret.gather();
	}
});
Single.prototype.__class__ = Single.prototype.constructor = $hxClasses["tink.streams.Single"] = Single;

// Init



// Statics




// Export

exports.default = Single;