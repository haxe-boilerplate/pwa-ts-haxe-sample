import tink_streams_StreamBase from "./../../tink/streams/StreamBase";
import tink_core__$Future_SyncFuture from "./../../tink/core/_Future/SyncFuture";
import tink_core__$Lazy_LazyConst from "./../../tink/core/_Lazy/LazyConst";
import tink_streams_Step from "./../../tink/streams/Step";
import tink_streams_Conclusion from "./../../tink/streams/Conclusion";

declare namespace tink.streams {

export class Empty extends tink_streams_StreamBase {

	constructor();
	get_depleted():any;
	next():any;
	forEach(handler:any):any;
	static inst:any;
	static make():any;


}

}

export default tink.streams.Empty;