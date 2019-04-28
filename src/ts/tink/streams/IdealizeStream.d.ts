import tink_streams_IdealStreamBase from "./../../tink/streams/IdealStreamBase";
import tink_core__$Future_SyncFuture from "./../../tink/core/_Future/SyncFuture";
import tink_core__$Lazy_LazyConst from "./../../tink/core/_Lazy/LazyConst";
import tink_core__$Future_Future_$Impl_$ from "./../../tink/core/_Future/Future_Impl_";
import tink_streams_Conclusion from "./../../tink/streams/Conclusion";

declare namespace tink.streams {

export class IdealizeStream extends tink_streams_IdealStreamBase {

	constructor(target:any, rescue:any);
	target:any;
	rescue(a1:any):any;
	get_depleted():any;
	next():any;
	forEach(handler:any):any;


}

}

export default tink.streams.IdealizeStream;