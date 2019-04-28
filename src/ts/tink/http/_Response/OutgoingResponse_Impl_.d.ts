import tink_http__$Response_OutgoingResponseData from "./../../../tink/http/_Response/OutgoingResponseData";
import httpstatus__$HttpStatusMessage_HttpStatusMessage_$Impl_$ from "./../../../httpstatus/_HttpStatusMessage/HttpStatusMessage_Impl_";
import tink_http_HeaderField from "./../../../tink/http/HeaderField";
import Std from "./../../../Std";
import tink_http_ResponseHeaderBase from "./../../../tink/http/ResponseHeaderBase";
import tink_streams_Single from "./../../../tink/streams/Single";
import tink_core__$Lazy_LazyConst from "./../../../tink/core/_Lazy/LazyConst";
import tink_chunk_ByteChunk from "./../../../tink/chunk/ByteChunk";
import haxe_io_Bytes from "./../../../haxe/io/Bytes";

declare namespace tink.http._Response {

export class OutgoingResponse_Impl_ {

	static _new(header:any, body:any):any;
	static blob(code?:any, chunk:any, contentType:any, headers?:any):any;
	static chunked(contentType:any, headers?:any, source:any):any;
	static ofString(s:any):any;
	static ofChunk(c:any):any;
	static reportError(e:any):any;


}

}

export default tink.http._Response.OutgoingResponse_Impl_;