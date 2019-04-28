import tink_http_Header from "./../../tink/http/Header";
import tink_http_HeaderParser from "./../../tink/http/HeaderParser";
import Std from "./../../Std";
import tink_core_Outcome from "./../../tink/core/Outcome";
import tink_core_TypedError from "./../../tink/core/TypedError";
import httpstatus__$HttpStatusMessage_HttpStatusMessage_$Impl_$ from "./../../httpstatus/_HttpStatusMessage/HttpStatusMessage_Impl_";

declare namespace tink.http {

export class ResponseHeaderBase extends tink_http_Header {

	constructor(statusCode:any, reason?:any, fields?:any, protocol?:any);
	
	
	protocol:any;
	concat(fields:any):any;
	toString():any;
	static parser():any;


}

}

export default tink.http.ResponseHeaderBase;