import tink_http_ResponseHeaderBase from "./../../../tink/http/ResponseHeaderBase";

declare namespace tink.http._Response {

export class ResponseHeader_Impl_ {

	static _new(statusCode:any, reason?:any, fields?:any, protocol?:any):any;
	static fromStatusCode(code:any):any;
	static fromHeaderFields(fields:any):any;
	static parser():any;


}

}

export default tink.http._Response.ResponseHeader_Impl_;