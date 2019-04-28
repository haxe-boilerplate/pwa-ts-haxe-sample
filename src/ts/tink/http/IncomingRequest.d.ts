import tink_http_Message from "./../../tink/http/Message";
import tink_core__$Promise_Promise_$Impl_$ from "./../../tink/core/_Promise/Promise_Impl_";
import tink_io_RealSourceTools from "./../../tink/io/RealSourceTools";
import tink_http_IncomingRequestHeader from "./../../tink/http/IncomingRequestHeader";
import tink_io__$Source_Source_$Impl_$ from "./../../tink/io/_Source/Source_Impl_";
import StringTools from "./../../StringTools";
import tink_http_Chunked from "./../../tink/http/Chunked";
import tink_core__$Future_SyncFuture from "./../../tink/core/_Future/SyncFuture";
import tink_core__$Lazy_LazyConst from "./../../tink/core/_Lazy/LazyConst";
import tink_core_Outcome from "./../../tink/core/Outcome";
import tink_core_TypedError from "./../../tink/core/TypedError";
import tink_http_IncomingRequestBody from "./../../tink/http/IncomingRequestBody";

declare namespace tink.http {

export class IncomingRequest extends tink_http_Message {

	constructor(clientIp:any, header:any, body:any);
	clientIp:any;
	static parse(clientIp:any, source:any):any;


}

}

export default tink.http.IncomingRequest;