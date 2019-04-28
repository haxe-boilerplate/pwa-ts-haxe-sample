import tink_http_HandlerObject from "./../../tink/http/HandlerObject";

declare namespace tink.http {

export class SimpleHandler {

	constructor(f:any);
	
	process(req:any):any;


}

}

export default tink.http.SimpleHandler;