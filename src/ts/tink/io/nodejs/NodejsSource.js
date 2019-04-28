// Class: tink.io.nodejs.NodejsSource

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
var $extend = require("./../../../extend_stub").default;
function tink_streams_Generator() {return require("./../../../tink/streams/Generator");}
function tink_io_nodejs_WrappedReadable() {return require("./../../../tink/io/nodejs/WrappedReadable");}
function tink_core__$Future_Future_$Impl_$() {return require("./../../../tink/core/_Future/Future_Impl_");}
function tink_streams_Step() {return require("./../../../tink/streams/Step");}

// Constructor

var NodejsSource = function(target) {
	(tink_streams_Generator().default).call(this,(tink_core__$Future_Future_$Impl_$().default).async(function(cb) {
		target.read().handle(function(o) {
			var tmp;
			switch(o._hx_index) {
			case 0:
				if(o.data == null) {
					tmp = (tink_streams_Step().default).End;
				} else {
					var chunk = o.data;
					tmp = (tink_streams_Step().default).Link(chunk,new NodejsSource(target));
				}
				break;
			case 1:
				var e = o.failure;
				tmp = (tink_streams_Step().default).Fail(e);
				break;
			}
			cb(tmp);
		});
	},true));
}

// Meta

NodejsSource.__name__ = ["tink","io","nodejs","NodejsSource"];
NodejsSource.__super__ = (tink_streams_Generator().default);
NodejsSource.prototype = $extend((tink_streams_Generator().default).prototype, {
	
});
NodejsSource.prototype.__class__ = NodejsSource.prototype.constructor = $hxClasses["tink.io.nodejs.NodejsSource"] = NodejsSource;

// Init



// Statics

NodejsSource.wrap = function(name,native,chunkSize,onEnd) {
	return new NodejsSource(new (tink_io_nodejs_WrappedReadable().default)(name,native,chunkSize,onEnd));
}


// Export

exports.default = NodejsSource;