// Class: tink.streams.Generator

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function tink_streams_StreamBase() {return require("./../../tink/streams/StreamBase");}
function tink_core__$Future_Future_$Impl_$() {return require("./../../tink/core/_Future/Future_Impl_");}
function tink_streams_Conclusion() {return require("./../../tink/streams/Conclusion");}

// Constructor

var Generator = function(upcoming) {
	(tink_streams_StreamBase().default).call(this);
	this.upcoming = upcoming;
}

// Meta

Generator.__name__ = "tink.streams.Generator";
Generator.__super__ = (tink_streams_StreamBase().default);
Generator.prototype = $extend((tink_streams_StreamBase().default).prototype, {
	next: function() {
		return this.upcoming;
	},
	forEach: function(handler) {
		var _gthis = this;
		return (tink_core__$Future_Future_$Impl_$().default).async(function(cb) {
			_gthis.upcoming.handle(function(e) {
				switch(e._hx_index) {
				case 0:
					var then = e.next;
					var v = e.value;
					handler(v).handle(function(s) {
						switch(s._hx_index) {
						case 0:
							cb((tink_streams_Conclusion().default).Halted(_gthis));
							break;
						case 1:
							cb((tink_streams_Conclusion().default).Halted(then));
							break;
						case 2:
							then.forEach(handler).handle(cb);
							break;
						case 3:
							var e1 = s.e;
							cb((tink_streams_Conclusion().default).Clogged(e1,_gthis));
							break;
						}
					});
					break;
				case 1:
					var e2 = e.e;
					cb((tink_streams_Conclusion().default).Failed(e2));
					break;
				case 2:
					cb((tink_streams_Conclusion().default).Depleted);
					break;
				}
			});
		},true);
	}
});
Generator.prototype.__class__ = Generator.prototype.constructor = $hxClasses["tink.streams.Generator"] = Generator;

// Init



// Statics

Generator.stream = function(step) {
	return new Generator((tink_core__$Future_Future_$Impl_$().default).async(step,true));
}


// Export

exports.default = Generator;