import tink_http_ChunkedEncoder from "./../../tink/http/ChunkedEncoder";
import tink_http_ChunkedDecoder from "./../../tink/http/ChunkedDecoder";

declare namespace tink.http {

export class Chunked {

	static _encoder:any;
	static _decoder:any;
	static encoder():any;
	static decoder():any;
	static encode(source:any):any;
	static decode(source:any):any;


}

}

export default tink.http.Chunked;