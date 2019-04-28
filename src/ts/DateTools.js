// Class: DateTools

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./hxClasses_stub").default;
var $import = require("./import_stub").default;
function StringTools() {return require("./StringTools");}
function Std() {return require("./Std");}
function js__$Boot_HaxeError() {return require("./js/_Boot/HaxeError");}
function HxOverrides() {return require("./HxOverrides");}

// Constructor

var DateTools = function(){}

// Meta

DateTools.__name__ = ["DateTools"];
DateTools.prototype = {
	
};
DateTools.prototype.__class__ = DateTools.prototype.constructor = $hxClasses["DateTools"] = DateTools;

// Init



// Statics

DateTools.__format_get = function(d,e) {
	switch(e) {
	case "%":
		return "%";
	case "A":
		return DateTools.DAY_NAMES[d.getDay()];
	case "B":
		return DateTools.MONTH_NAMES[d.getMonth()];
	case "C":
		return (StringTools().default).lpad((Std().default).string(d.getFullYear() / 100 | 0),"0",2);
	case "D":
		return DateTools.__format(d,"%m/%d/%y");
	case "F":
		return DateTools.__format(d,"%Y-%m-%d");
	case "I":case "l":
		var hour = d.getHours() % 12;
		return (StringTools().default).lpad((Std().default).string(hour == 0 ? 12 : hour),e == "I" ? "0" : " ",2);
	case "M":
		return (StringTools().default).lpad((Std().default).string(d.getMinutes()),"0",2);
	case "R":
		return DateTools.__format(d,"%H:%M");
	case "S":
		return (StringTools().default).lpad((Std().default).string(d.getSeconds()),"0",2);
	case "T":
		return DateTools.__format(d,"%H:%M:%S");
	case "Y":
		return (Std().default).string(d.getFullYear());
	case "a":
		return DateTools.DAY_SHORT_NAMES[d.getDay()];
	case "b":case "h":
		return DateTools.MONTH_SHORT_NAMES[d.getMonth()];
	case "d":
		return (StringTools().default).lpad((Std().default).string(d.getDate()),"0",2);
	case "e":
		return (Std().default).string(d.getDate());
	case "H":case "k":
		return (StringTools().default).lpad((Std().default).string(d.getHours()),e == "H" ? "0" : " ",2);
	case "m":
		return (StringTools().default).lpad((Std().default).string(d.getMonth() + 1),"0",2);
	case "n":
		return "\n";
	case "p":
		if(d.getHours() > 11) {
			return "PM";
		} else {
			return "AM";
		}
		break;
	case "r":
		return DateTools.__format(d,"%I:%M:%S %p");
	case "s":
		return (Std().default).string(d.getTime() / 1000 | 0);
	case "t":
		return "\t";
	case "u":
		var t = d.getDay();
		if(t == 0) {
			return "7";
		} else if(t == null) {
			return "null";
		} else {
			return "" + t;
		}
		break;
	case "w":
		return (Std().default).string(d.getDay());
	case "y":
		return (StringTools().default).lpad((Std().default).string(d.getFullYear() % 100),"0",2);
	default:
		throw new (js__$Boot_HaxeError().default)("Date.format %" + e + "- not implemented yet.");
	}
}
DateTools.__format = function(d,f) {
	var r_b = "";
	var p = 0;
	while(true) {
		var np = f.indexOf("%",p);
		if(np < 0) {
			break;
		}
		var len = np - p;
		r_b += len == null ? (HxOverrides().default).substr(f,p,null) : (HxOverrides().default).substr(f,p,len);
		r_b += (Std().default).string(DateTools.__format_get(d,(HxOverrides().default).substr(f,np + 1,1)));
		p = np + 2;
	}
	var len1 = f.length - p;
	r_b += len1 == null ? (HxOverrides().default).substr(f,p,null) : (HxOverrides().default).substr(f,p,len1);
	return r_b;
}
DateTools.format = function(d,f) {
	return DateTools.__format(d,f);
}
DateTools.DAY_SHORT_NAMES = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
DateTools.DAY_NAMES = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
DateTools.MONTH_SHORT_NAMES = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
DateTools.MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"]

// Export

exports.default = DateTools;