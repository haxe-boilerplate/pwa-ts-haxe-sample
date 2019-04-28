import tink_streams_StreamBase from "./../../tink/streams/StreamBase";
import tink_core__$Future_Future_$Impl_$ from "./../../tink/core/_Future/Future_Impl_";
import tink_streams_Conclusion from "./../../tink/streams/Conclusion";

declare namespace tink.streams {

export class Generator extends tink_streams_StreamBase {

	constructor(upcoming:any);
	
	next():any;
	forEach(handler:any):any;
	static stream(step:any):any;


}

}

export default tink.streams.Generator;