import tink_web_routing_Context from "./../../../tink/web/routing/Context";

declare namespace tink.web.routing {

export class AuthedContext extends tink_web_routing_Context {

	constructor(parent:any, accepts:any, request:any, depth:any, parts:any, params:any, session:any, user?:any);
	
	
	sub(descend:any):any;


}

}

export default tink.web.routing.AuthedContext;