import httpstatus__$HttpStatusMessage_HttpStatusMessage_$Impl_$ from "./../../../../httpstatus/_HttpStatusMessage/HttpStatusMessage_Impl_";
import tink_http_ResponseHeaderBase from "./../../../../tink/http/ResponseHeaderBase";
import tink_http_HeaderField from "./../../../../tink/http/HeaderField";
import tink__$Url_Url_$Impl_$ from "./../../../../tink/_Url/Url_Impl_";
import tink_http__$Response_OutgoingResponseData from "./../../../../tink/http/_Response/OutgoingResponseData";
import tink_streams_Single from "./../../../../tink/streams/Single";
import tink_core__$Lazy_LazyConst from "./../../../../tink/core/_Lazy/LazyConst";
import tink__$Chunk_Chunk_$Impl_$ from "./../../../../tink/_Chunk/Chunk_Impl_";
import tink_http__$Response_OutgoingResponse_$Impl_$ from "./../../../../tink/http/_Response/OutgoingResponse_Impl_";
import tink_chunk_ByteChunk from "./../../../../tink/chunk/ByteChunk";
import haxe_io_Bytes from "./../../../../haxe/io/Bytes";

declare namespace tink.web.routing._Response {

export class Response_Impl_ {

	static ofString(s:any):any;
	static ofBytes(b:any):any;
	static ofUrl(u:any):any;
	static binary(code?:any, contentType:any, bytes:any):any;
	static empty(code?:any):any;
	static textual(code?:any, contentType:any, string:any):any;


}

}

export default tink.web.routing._Response.Response_Impl_;