import tink_core_Outcome from "./../../tink/core/Outcome";
import tink_core_TypedError from "./../../tink/core/TypedError";
import tink_core_OutcomeTools from "./../../tink/core/OutcomeTools";
import tink_http_ContentType from "./../../tink/http/ContentType";
import HxOverrides from "./../../HxOverrides";
import Std from "./../../Std";
import tink_http__$Header_HeaderValue_$Impl_$ from "./../../tink/http/_Header/HeaderValue_Impl_";

declare namespace tink.http {

export class Header {

	constructor(fields?:any);
	fields:any;
	get(name:any):any;
	byName(name:any):any;
	contentType():any;
	iterator():any;
	concat(fields:any):any;
	getContentLength():any;
	accepts(type:any):any;
	LINEBREAK:any;
	get_LINEBREAK():any;
	toString():any;
	headerNotFound(name:any):any;


}

}

export default tink.http.Header;