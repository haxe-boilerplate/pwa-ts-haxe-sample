import tink_http_RequestHeader from "./../../tink/http/RequestHeader";

declare namespace tink.http {

export class OutgoingRequestHeader extends tink_http_RequestHeader {

	constructor(method:any, url:any, protocol?:any, fields:any);
	concat(fields:any):any;


}

}

export default tink.http.OutgoingRequestHeader;