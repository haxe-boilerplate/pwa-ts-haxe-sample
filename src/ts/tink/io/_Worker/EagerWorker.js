// Class: tink.io._Worker.EagerWorker

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
function tink_io_WorkerObject() {return require("./../../../tink/io/WorkerObject");}
function tink_core__$Future_SyncFuture() {return require("./../../../tink/core/_Future/SyncFuture");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}

// Constructor

var EagerWorker = function() {
}

// Meta

EagerWorker.__name__ = ["tink","io","_Worker","EagerWorker"];
EagerWorker.__interfaces__ = [(tink_io_WorkerObject().default)];
EagerWorker.prototype = {
	work: function(task) {
		return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)(task.get()));
	}
};
EagerWorker.prototype.__class__ = EagerWorker.prototype.constructor = $hxClasses["tink.io._Worker.EagerWorker"] = EagerWorker;

// Init



// Statics




// Export

exports.default = EagerWorker;