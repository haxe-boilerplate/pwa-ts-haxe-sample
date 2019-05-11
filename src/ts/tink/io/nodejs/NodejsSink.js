// Class: tink.io.nodejs.NodejsSink

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
var $extend = require("./../../../extend_stub").default;
function tink_io_SinkBase() {return require("./../../../tink/io/SinkBase");}
function tink_streams__$Stream_Handler_$Impl_$() {return require("./../../../tink/streams/_Stream/Handler_Impl_");}
function tink_streams_Handled() {return require("./../../../tink/streams/Handled");}
function tink_io_PipeResultTools() {return require("./../../../tink/io/PipeResultTools");}
function tink_core_Noise() {return require("./../../../tink/core/Noise");}
function tink_io_nodejs_WrappedWritable() {return require("./../../../tink/io/nodejs/WrappedWritable");}

// Constructor

var NodejsSink = function(target) {
	this.target = target;
}

// Meta

NodejsSink.__name__ = "tink.io.nodejs.NodejsSink";
NodejsSink.__super__ = (tink_io_SinkBase().default);
NodejsSink.prototype = $extend((tink_io_SinkBase().default).prototype, {
	consume: function(source,options) {
		var _gthis = this;
		var ret = source.forEach((tink_streams__$Stream_Handler_$Impl_$().default).ofUnknown(function(c) {
			var ret1 = _gthis.target.write(c).map(function(w) {
				switch(w._hx_index) {
				case 0:
					switch(w.data) {
					case false:
						return (tink_streams_Handled().default).BackOff;
					case true:
						return (tink_streams_Handled().default).Resume;
					}
					break;
				case 1:
					var e = w.failure;
					return (tink_streams_Handled().default).Clog(e);
				}
			});
			return ret1.gather();
		}));
		if(options != null && options.end) {
			ret.handle(function(end) {
				_gthis.target.end();
			});
		}
		var ret2 = ret.map(function(c1) {
			return (tink_io_PipeResultTools().default).toResult(c1,(tink_core_Noise().default).Noise);
		});
		return ret2.gather();
	}
});
NodejsSink.prototype.__class__ = NodejsSink.prototype.constructor = $hxClasses["tink.io.nodejs.NodejsSink"] = NodejsSink;

// Init



// Statics

NodejsSink.wrap = function(name,native) {
	return new NodejsSink(new (tink_io_nodejs_WrappedWritable().default)(name,native));
}


// Export

exports.default = NodejsSink;