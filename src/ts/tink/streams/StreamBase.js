// Class: tink.streams.StreamBase

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function tink_streams_StreamObject() {return require("./../../tink/streams/StreamObject");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function tink_streams__$Stream_RegroupStream() {return require("./../../tink/streams/_Stream/RegroupStream");}
function tink_streams__$Stream_CompoundStream() {return require("./../../tink/streams/_Stream/CompoundStream");}
function tink_streams_BlendStream() {return require("./../../tink/streams/BlendStream");}
function tink_streams_Empty() {return require("./../../tink/streams/Empty");}
function tink_streams_IdealizeStream() {return require("./../../tink/streams/IdealizeStream");}
function tink_core__$Future_Future_$Impl_$() {return require("./../../tink/core/_Future/Future_Impl_");}
function tink_streams__$Stream_Handler_$Impl_$() {return require("./../../tink/streams/_Stream/Handler_Impl_");}
function tink_streams_Handled() {return require("./../../tink/streams/Handled");}
function tink_streams_Reduction() {return require("./../../tink/streams/Reduction");}

// Constructor

var StreamBase = function() {
	this.retainCount = 0;
}

// Meta

StreamBase.__name__ = "tink.streams.StreamBase";
StreamBase.__interfaces__ = [(tink_streams_StreamObject().default)];
StreamBase.prototype = {
	get_depleted: function() {
		return false;
	},
	retain: function() {
		var _gthis = this;
		this.retainCount++;
		var retained = true;
		return function() {
			if(retained) {
				retained = false;
				if(--_gthis.retainCount == 0) {
					_gthis.destroy();
				}
			}
		};
	},
	next: function() {
		throw new (js__$Boot_HaxeError().default)("not implemented");
	},
	regroup: function(f) {
		return new (tink_streams__$Stream_RegroupStream().default)(this,f);
	},
	map: function(f) {
		return this.regroup(f);
	},
	filter: function(f) {
		return this.regroup(f);
	},
	destroy: function() {
	},
	append: function(other) {
		if(this.get_depleted()) {
			return other;
		} else {
			return (tink_streams__$Stream_CompoundStream().default).of([this,other]);
		}
	},
	prepend: function(other) {
		if(this.get_depleted()) {
			return other;
		} else {
			return (tink_streams__$Stream_CompoundStream().default).of([other,this]);
		}
	},
	blend: function(other) {
		if(this.get_depleted()) {
			return other;
		} else {
			return new (tink_streams_BlendStream().default)(this,other);
		}
	},
	decompose: function(into) {
		if(!this.get_depleted()) {
			into.push(this);
		}
	},
	idealize: function(rescue) {
		if(this.get_depleted()) {
			return (tink_streams_Empty().default).inst;
		} else {
			return new (tink_streams_IdealizeStream().default)(this,rescue);
		}
	},
	reduce: function(initial,reducer) {
		var _gthis = this;
		return (tink_core__$Future_Future_$Impl_$().default).async(function(cb) {
			_gthis.forEach((tink_streams__$Stream_Handler_$Impl_$().default).ofUnknown(function(item) {
				var ret = reducer(initial,item).map(function(o) {
					switch(o._hx_index) {
					case 0:
						var v = o.result;
						initial = v;
						return (tink_streams_Handled().default).Resume;
					case 1:
						var e = o.e;
						return (tink_streams_Handled().default).Clog(e);
					}
				});
				return ret.gather();
			})).handle(function(c) {
				switch(c._hx_index) {
				case 0:
					var _g3 = c.rest;
					throw new (js__$Boot_HaxeError().default)("assert");
				case 1:
					var rest = c.at;
					var e1 = c.error;
					cb((tink_streams_Reduction().default).Crashed(e1,rest));
					break;
				case 2:
					var e2 = c.error;
					cb((tink_streams_Reduction().default).Failed(e2));
					break;
				case 3:
					cb((tink_streams_Reduction().default).Reduced(initial));
					break;
				}
			});
		},true);
	},
	forEach: function(handler) {
		throw new (js__$Boot_HaxeError().default)("not implemented");
	}
};
StreamBase.prototype.__class__ = StreamBase.prototype.constructor = $hxClasses["tink.streams.StreamBase"] = StreamBase;

// Init



// Statics




// Export

exports.default = StreamBase;