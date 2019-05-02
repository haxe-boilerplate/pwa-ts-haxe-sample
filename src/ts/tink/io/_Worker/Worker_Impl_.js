// Class: tink.io._Worker.Worker_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
function tink_io__$Worker_EagerWorker() {return require("./../../../tink/io/_Worker/EagerWorker");}
function Std() {return require("./../../../Std");}

// Constructor

var Worker_Impl_ = function(){}

// Meta

Worker_Impl_.__name__ = ["tink","io","_Worker","Worker_Impl_"];
Worker_Impl_.prototype = {
	
};
Worker_Impl_.prototype.__class__ = Worker_Impl_.prototype.constructor = $hxClasses["tink.io._Worker.Worker_Impl_"] = Worker_Impl_;

// Init



// Statics

Worker_Impl_.ensure = function(this1) {
	if(this1 == null) {
		return Worker_Impl_.get();
	} else {
		return this1;
	}
}
Worker_Impl_.get = function() {
	return Worker_Impl_.pool[(Std().default).random(Worker_Impl_.pool.length)];
}
Worker_Impl_.work = function(this1,task) {
	return this1.work(task);
}
Worker_Impl_.EAGER = new (tink_io__$Worker_EagerWorker().default)()
Worker_Impl_.pool = [Worker_Impl_.EAGER]

// Export

exports.default = Worker_Impl_;