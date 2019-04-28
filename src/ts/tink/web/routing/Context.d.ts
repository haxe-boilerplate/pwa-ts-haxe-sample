import tink_io__$Source_Source_$Impl_$ from "./../../../tink/io/_Source/Source_Impl_";
import tink_core_TypedError from "./../../../tink/core/TypedError";
import tink_io_RealSourceTools from "./../../../tink/io/RealSourceTools";
import HxOverrides from "./../../../HxOverrides";
import tink_core_NamedWith from "./../../../tink/core/NamedWith";
import tink_querystring__$Pairs_Pairs_$Impl_$ from "./../../../tink/querystring/_Pairs/Pairs_Impl_";
import tink_core__$Promise_Promise_$Impl_$ from "./../../../tink/core/_Promise/Promise_Impl_";
import tink_core__$Promise_Next_$Impl_$ from "./../../../tink/core/_Promise/Next_Impl_";
import tink_url__$Query_QueryStringParser from "./../../../tink/url/_Query/QueryStringParser";
import tink_http_BodyPart from "./../../../tink/http/BodyPart";
import tink_url__$Portion_Portion_$Impl_$ from "./../../../tink/url/_Portion/Portion_Impl_";
import tink_core__$Future_SyncFuture from "./../../../tink/core/_Future/SyncFuture";
import tink_core__$Lazy_LazyConst from "./../../../tink/core/_Lazy/LazyConst";
import tink_core_Outcome from "./../../../tink/core/Outcome";
import Std from "./../../../Std";
import tink_url__$Path_Path_$Impl_$ from "./../../../tink/url/_Path/Path_Impl_";
import tink_url__$Query_Query_$Impl_$ from "./../../../tink/url/_Query/Query_Impl_";
import tink_web_routing_AuthedContext from "./../../../tink/web/routing/AuthedContext";
import tink_core__$Lazy_LazyFunc from "./../../../tink/core/_Lazy/LazyFunc";
import haxe_ds_StringMap from "./../../../haxe/ds/StringMap";
import tink_http__$Header_HeaderValue_$Impl_$ from "./../../../tink/http/_Header/HeaderValue_Impl_";

declare namespace tink.web.routing {

export class Context {

	constructor(parent:any, accepts:any, request:any, depth:any, parts:any, params:any);
	request:any;
	depth:any;
	parent:any;
	parts:any;
	
	header:any;
	get_header():any;
	accepts(a1:any):any;
	allRaw():any;
	
	get_rawBody():any;
	headers():any;
	parse():any;
	pathLength:any;
	get_pathLength():any;
	getPrefix():any;
	getPath():any;
	hasParam(name:any):any;
	part(index:any):any;
	param(name:any):any;
	sub(descend:any):any;
	static toCamelCase(header:any):any;
	static ofRequest(request:any):any;
	static authed(request:any, getSession:any):any;
	static parseAcceptHeader(h:any):any;
	static acceptsAll(s:any):any;


}

}

export default tink.web.routing.Context;