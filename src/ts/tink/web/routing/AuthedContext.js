// Class: tink.web.routing.AuthedContext

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
var $extend = require("./../../../extend_stub").default;
function tink_web_routing_Context() {return require("./../../../tink/web/routing/Context");}

// Constructor

var AuthedContext = function(parent,accepts,request,depth,parts,params,session,user) {
	this.session = session;
	var tmp;
	if(user == null) {
		tmp = session.map(function(s) {
			return s.getUser();
		});
	} else {
		var v = user;
		tmp = v;
	}
	this.user = tmp;
	(tink_web_routing_Context().default).call(this,parent,accepts,request,depth,parts,params);
}

// Meta

AuthedContext.__name__ = "tink.web.routing.AuthedContext";
AuthedContext.__super__ = (tink_web_routing_Context().default);
AuthedContext.prototype = $extend((tink_web_routing_Context().default).prototype, {
	sub: function(descend) {
		return new AuthedContext(this,this.accepts,this.request,this.depth + descend,this.parts,this.params,this.session,this.user);
	}
});
AuthedContext.prototype.__class__ = AuthedContext.prototype.constructor = $hxClasses["tink.web.routing.AuthedContext"] = AuthedContext;

// Init



// Statics




// Export

exports.default = AuthedContext;