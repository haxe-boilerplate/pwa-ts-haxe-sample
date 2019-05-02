// Class: tink.core._Callback.ListCell

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
function tink_core__$Callback_LinkObject() {return require("./../../../tink/core/_Callback/LinkObject");}
function tink_core__$Callback_Callback_$Impl_$() {return require("./../../../tink/core/_Callback/Callback_Impl_");}
function HxOverrides() {return require("./../../../HxOverrides");}
function js__$Boot_HaxeError() {return require("./../../../js/_Boot/HaxeError");}

// Constructor

var ListCell = function(cb,list) {
	if(cb == null) {
		throw new (js__$Boot_HaxeError().default)("callback expected but null received");
	}
	this.cb = cb;
	this.list = list;
}

// Meta

ListCell.__name__ = ["tink","core","_Callback","ListCell"];
ListCell.__interfaces__ = [(tink_core__$Callback_LinkObject().default)];
ListCell.prototype = {
	invoke: function(data) {
		if(this.cb != null) {
			(tink_core__$Callback_Callback_$Impl_$().default).invoke(this.cb,data);
		}
	},
	clear: function() {
		this.list = null;
		this.cb = null;
	},
	cancel: function() {
		var _g = this.list;
		if(_g != null) {
			var v = _g;
			this.clear();
			(HxOverrides().default).remove(v,this);
		}
	}
};
ListCell.prototype.__class__ = ListCell.prototype.constructor = $hxClasses["tink.core._Callback.ListCell"] = ListCell;

// Init



// Statics




// Export

exports.default = ListCell;