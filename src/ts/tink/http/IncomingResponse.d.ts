import tink_http_Message from "./../../tink/http/Message";
import tink_core__$Promise_Promise_$Impl_$ from "./../../tink/core/_Promise/Promise_Impl_";
import tink_io_RealSourceTools from "./../../tink/io/RealSourceTools";
import tink_core__$Future_SyncFuture from "./../../tink/core/_Future/SyncFuture";
import tink_core__$Lazy_LazyConst from "./../../tink/core/_Lazy/LazyConst";
import tink_core_Outcome from "./../../tink/core/Outcome";
import tink_core_TypedError from "./../../tink/core/TypedError";
import httpstatus__$HttpStatusMessage_HttpStatusMessage_$Impl_$ from "./../../httpstatus/_HttpStatusMessage/HttpStatusMessage_Impl_";
import tink_http_ResponseHeaderBase from "./../../tink/http/ResponseHeaderBase";
import tink_http_HeaderField from "./../../tink/http/HeaderField";
import tink_streams_Single from "./../../tink/streams/Single";
import tink_chunk_ByteChunk from "./../../tink/chunk/ByteChunk";
import haxe_io_Bytes from "./../../haxe/io/Bytes";

declare namespace tink.http {

export class IncomingResponse extends tink_http_Message {

	constructor(header:any, body:any);
	static readAll(res:any):any;
	static reportError(e:any):any;


}

}

export default tink.http.IncomingResponse;