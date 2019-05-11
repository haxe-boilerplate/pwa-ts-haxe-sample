// Class: tink.querystring._Pairs.Pairs_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
var $getIterator = require("./../../../getIterator_stub").default;
function tink_url__$Query_QueryStringParser() {return require("./../../../tink/url/_Query/QueryStringParser");}

// Constructor

var Pairs_Impl_ = function(){}

// Meta

Pairs_Impl_.__name__ = "tink.querystring._Pairs.Pairs_Impl_";
Pairs_Impl_.prototype = {
	
};
Pairs_Impl_.prototype.__class__ = Pairs_Impl_.prototype.constructor = $hxClasses["tink.querystring._Pairs.Pairs_Impl_"] = Pairs_Impl_;

// Init



// Statics

Pairs_Impl_.portions = function(s) {
	return new (tink_url__$Query_QueryStringParser().default)(s,"&","=",0);
}
Pairs_Impl_.portionsOfUrl = function(u) {
	return Pairs_Impl_.portions(u.query);
}
Pairs_Impl_.ofIterable = function(i) {
	return $getIterator(i);
}


// Export

exports.default = Pairs_Impl_;