// Class: tink.streams.BlendStream

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function tink_streams_Generator() {return require("./../../tink/streams/Generator");}
function tink_core__$Future_Future_$Impl_$() {return require("./../../tink/core/_Future/Future_Impl_");}
function tink_streams_Step() {return require("./../../tink/streams/Step");}

// Constructor

var BlendStream = function(a,b) {
	var first = null;
	var wait = function(s) {
		var ret = s.next().map(function(o) {
			if(first == null) {
				first = s;
			}
			return o;
		});
		return ret.gather();
	};
	var n1 = wait(a);
	var n2 = wait(b);
	(tink_streams_Generator().default).call(this,(tink_core__$Future_Future_$Impl_$().default).async(function(cb) {
		(tink_core__$Future_Future_$Impl_$().default).first(n1,n2).handle(function(o1) {
			switch(o1._hx_index) {
			case 0:
				var rest = o1.next;
				var item = o1.value;
				var tmp = (tink_streams_Step().default).Link(item,new BlendStream(rest,first == a ? b : a));
				cb(tmp);
				break;
			case 1:
				var e = o1.e;
				cb((tink_streams_Step().default).Fail(e));
				break;
			case 2:
				(first == a ? n2 : n1).handle(cb);
				break;
			}
		});
	}));
}

// Meta

BlendStream.__name__ = "tink.streams.BlendStream";
BlendStream.__super__ = (tink_streams_Generator().default);
BlendStream.prototype = $extend((tink_streams_Generator().default).prototype, {
	
});
BlendStream.prototype.__class__ = BlendStream.prototype.constructor = $hxClasses["tink.streams.BlendStream"] = BlendStream;

// Init



// Statics




// Export

exports.default = BlendStream;