import tink_streams_StreamBase from "./../../tink/streams/StreamBase";
import tink_core__$Future_Future_$Impl_$ from "./../../tink/core/_Future/Future_Impl_";

declare namespace tink.streams {

export class FutureStream extends tink_streams_StreamBase {

	constructor(f:any);
	
	next():any;
	forEach(handler:any):any;


}

}

export default tink.streams.FutureStream;