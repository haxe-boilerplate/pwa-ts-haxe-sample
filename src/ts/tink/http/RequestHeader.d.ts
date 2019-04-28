import tink_http_Header from "./../../tink/http/Header";

declare namespace tink.http {

export class RequestHeader extends tink_http_Header {

	constructor(method:any, url:any, protocol?:any, fields:any);
	method:any;
	url:any;
	protocol:any;
	concat(fields:any):any;
	toString():any;


}

}

export default tink.http.RequestHeader;