import tink_streams_StreamObject from "./../../tink/streams/StreamObject";
import js__$Boot_HaxeError from "./../../js/_Boot/HaxeError";
import tink_streams__$Stream_RegroupStream from "./../../tink/streams/_Stream/RegroupStream";
import tink_streams__$Stream_CompoundStream from "./../../tink/streams/_Stream/CompoundStream";
import tink_streams_BlendStream from "./../../tink/streams/BlendStream";
import tink_streams_Empty from "./../../tink/streams/Empty";
import tink_streams_IdealizeStream from "./../../tink/streams/IdealizeStream";
import tink_core__$Future_Future_$Impl_$ from "./../../tink/core/_Future/Future_Impl_";
import tink_streams__$Stream_Handler_$Impl_$ from "./../../tink/streams/_Stream/Handler_Impl_";
import tink_streams_Handled from "./../../tink/streams/Handled";
import tink_streams_Reduction from "./../../tink/streams/Reduction";

declare namespace tink.streams {

export class StreamBase {

	constructor();
	depleted:any;
	get_depleted():any;
	retainCount:any;
	retain():any;
	next():any;
	regroup(f:any):any;
	map(f:any):any;
	filter(f:any):any;
	destroy():any;
	append(other:any):any;
	prepend(other:any):any;
	blend(other:any):any;
	decompose(into:any):any;
	idealize(rescue:any):any;
	reduce(initial:any, reducer:any):any;
	forEach(handler:any):any;


}

}

export default tink.streams.StreamBase;