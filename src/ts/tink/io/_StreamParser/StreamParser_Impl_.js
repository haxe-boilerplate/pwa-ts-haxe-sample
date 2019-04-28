// Class: tink.io._StreamParser.StreamParser_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
function tink__$Chunk_Chunk_$Impl_$() {return require("./../../../tink/_Chunk/Chunk_Impl_");}
function tink_streams_Single() {return require("./../../../tink/streams/Single");}
function tink_core__$Lazy_LazyConst() {return require("./../../../tink/core/_Lazy/LazyConst");}
function tink_io__$Source_Source_$Impl_$() {return require("./../../../tink/io/_Source/Source_Impl_");}
function tink_streams__$Stream_Handler_$Impl_$() {return require("./../../../tink/streams/_Stream/Handler_Impl_");}
function tink_core__$Future_SyncFuture() {return require("./../../../tink/core/_Future/SyncFuture");}
function tink_streams_Handled() {return require("./../../../tink/streams/Handled");}
function tink_core__$Future_Future_$Impl_$() {return require("./../../../tink/core/_Future/Future_Impl_");}
function tink_io_ParseResult() {return require("./../../../tink/io/ParseResult");}
function tink_streams_Step() {return require("./../../../tink/streams/Step");}
function tink_streams_Generator() {return require("./../../../tink/streams/Generator");}

// Constructor

var StreamParser_Impl_ = function(){}

// Meta

StreamParser_Impl_.__name__ = ["tink","io","_StreamParser","StreamParser_Impl_"];
StreamParser_Impl_.prototype = {
	
};
StreamParser_Impl_.prototype.__class__ = StreamParser_Impl_.prototype.constructor = $hxClasses["tink.io._StreamParser.StreamParser_Impl_"] = StreamParser_Impl_;

// Init



// Statics

StreamParser_Impl_.doParse = function(source,p,consume,finish) {
	var cursor = (tink__$Chunk_Chunk_$Impl_$().default).EMPTY.getCursor();
	var resume = true;
	var mk = function(source1) {
		if(cursor.currentPos < cursor.length) {
			return source1.prepend(new (tink_streams_Single().default)(new (tink_core__$Lazy_LazyConst().default)(cursor.right())));
		} else {
			return source1;
		}
	};
	var flush = function() {
		var _g = cursor.flush();
		var c = _g;
		if(c.getLength() == 0) {
			return (tink_io__$Source_Source_$Impl_$().default).EMPTY;
		} else {
			var c1 = _g;
			return new (tink_streams_Single().default)(new (tink_core__$Lazy_LazyConst().default)(c1));
		}
	};
	var ret = source.forEach((tink_streams__$Stream_Handler_$Impl_$().default).ofUnknown(function(chunk) {
		if(chunk.getLength() == 0) {
			return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_streams_Handled().default).Resume));
		}
		cursor.shift(chunk);
		return (tink_core__$Future_Future_$Impl_$().default).async(function(cb) {
			var next = null;
			next = function() {
				cursor.shift();
				var lastPos = cursor.currentPos;
				var _g1 = p.progress(cursor);
				switch(_g1._hx_index) {
				case 0:
					if(lastPos != cursor.currentPos && cursor.currentPos < cursor.length) {
						next();
					} else {
						cb((tink_streams_Handled().default).Resume);
					}
					break;
				case 1:
					var v = _g1.r;
					consume(v).handle(function(o) {
						resume = o.resume;
						if(resume) {
							if(lastPos != cursor.currentPos && cursor.currentPos < cursor.length) {
								next();
							} else {
								cb((tink_streams_Handled().default).Resume);
							}
						} else {
							cb((tink_streams_Handled().default).Finish);
						}
					});
					break;
				case 2:
					var e = _g1.e;
					cb((tink_streams_Handled().default).Clog(e));
					break;
				}
			};
			next();
		});
	})).flatMap(function(c2) {
		switch(c2._hx_index) {
		case 0:
			var rest = c2.rest;
			return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_io_ParseResult().default).Parsed(finish(),mk(rest))));
		case 1:
			var rest1 = c2.at;
			var e1 = c2.error;
			return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_io_ParseResult().default).Invalid(e1,mk(rest1))));
		case 2:
			var e2 = c2.error;
			return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_io_ParseResult().default).Broke(e2)));
		case 3:
			if(cursor.currentPos < cursor.length) {
				var v1 = finish();
				var v2 = new (tink_streams_Single().default)(new (tink_core__$Lazy_LazyConst().default)((tink__$Chunk_Chunk_$Impl_$().default).EMPTY));
				return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_io_ParseResult().default).Parsed(v1,mk(v2))));
			} else if(!resume) {
				return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_io_ParseResult().default).Parsed(finish(),flush())));
			} else {
				var _g2 = p.eof(cursor);
				switch(_g2._hx_index) {
				case 0:
					var result = _g2.data;
					var ret1 = consume(result).map(function(_) {
						return (tink_io_ParseResult().default).Parsed(finish(),flush());
					});
					return ret1.gather();
				case 1:
					var e3 = _g2.failure;
					return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)((tink_io_ParseResult().default).Invalid(e3,flush())));
				}
			}
			break;
		}
	});
	return ret.gather();
}
StreamParser_Impl_.parse = function(s,p) {
	var res = null;
	var onResult = function(r) {
		res = r;
		return new (tink_core__$Future_SyncFuture().default)(new (tink_core__$Lazy_LazyConst().default)({ resume : false}));
	};
	return StreamParser_Impl_.doParse(s,p,onResult,function() {
		return res;
	});
}
StreamParser_Impl_.parseStream = function(s,p) {
	var next = null;
	next = function(step) {
		if(s.get_depleted()) {
			step((tink_streams_Step().default).End);
		} else {
			StreamParser_Impl_.parse(s,p).handle(function(o) {
				switch(o._hx_index) {
				case 0:
					var rest = o.rest;
					var result = o.data;
					s = rest;
					var next1 = (tink_streams_Step().default).Link(result,(tink_streams_Generator().default).stream(next));
					step(next1);
					break;
				case 1:
					var e = o.e;
					step((tink_streams_Step().default).Fail(e));
					break;
				case 2:
					var e1 = o.e;
					step((tink_streams_Step().default).Fail(e1));
					break;
				}
			});
		}
	};
	return (tink_streams_Generator().default).stream(next);
}


// Export

exports.default = StreamParser_Impl_;