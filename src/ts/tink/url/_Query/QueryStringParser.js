// Class: tink.url._Query.QueryStringParser

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
function tink_core_NamedWith() {return require("./../../../tink/core/NamedWith");}
function tink_url__$Portion_Portion_$Impl_$() {return require("./../../../tink/url/_Portion/Portion_Impl_");}

// Constructor

var QueryStringParser = function(s,sep,set,pos) {
	this.s = s == null ? "" : s;
	this.sep = sep;
	this.set = set;
	this.pos = pos;
}

// Meta

QueryStringParser.__name__ = ["tink","url","_Query","QueryStringParser"];
QueryStringParser.prototype = {
	hasNext: function() {
		return this.pos < this.s.length;
	},
	next: function() {
		var next = this.s.indexOf(this.sep,this.pos);
		if(next == -1) {
			next = this.s.length;
		}
		var split = this.s.indexOf(this.set,this.pos);
		var start = this.pos;
		this.pos = next + this.sep.length;
		if(split == -1 || split > next) {
			return new (tink_core_NamedWith().default)((tink_url__$Portion_Portion_$Impl_$().default).stringly(QueryStringParser.trimmedSub(this.s,start,next)),(tink_url__$Portion_Portion_$Impl_$().default).ofString(""));
		} else {
			return new (tink_core_NamedWith().default)((tink_url__$Portion_Portion_$Impl_$().default).stringly(QueryStringParser.trimmedSub(this.s,start,split)),QueryStringParser.trimmedSub(this.s,split + this.set.length,next));
		}
	}
};
QueryStringParser.prototype.__class__ = QueryStringParser.prototype.constructor = $hxClasses["tink.url._Query.QueryStringParser"] = QueryStringParser;

// Init



// Statics

QueryStringParser.trimmedSub = function(s,start,end) {
	if(start >= s.length) {
		var this1 = "";
		return this1;
	}
	while(s.charCodeAt(start) < 33) ++start;
	if(end < s.length - 1) {
		while(s.charCodeAt(end - 1) < 33) --end;
	}
	var this2 = s.substring(start,end);
	return this2;
}


// Export

exports.default = QueryStringParser;