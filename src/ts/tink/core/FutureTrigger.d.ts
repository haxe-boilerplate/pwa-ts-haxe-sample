import tink_core__$Future_FutureObject from "./../../tink/core/_Future/FutureObject";
import tink_core__$Callback_Callback_$Impl_$ from "./../../tink/core/_Callback/Callback_Impl_";
import tink_core__$Callback_CallbackList_$Impl_$ from "./../../tink/core/_Callback/CallbackList_Impl_";
import tink_core__$Future_SyncFuture from "./../../tink/core/_Future/SyncFuture";
import tink_core__$Lazy_LazyConst from "./../../tink/core/_Lazy/LazyConst";
import tink_core__$Future_SimpleFuture from "./../../tink/core/_Future/SimpleFuture";

declare namespace tink.core {

export class FutureTrigger {

	constructor();
	result:any;
	
	handle(callback:any):any;
	map(f:any):any;
	flatMap(f:any):any;
	gather():any;
	eager():any;
	asFuture():any;
	trigger(result:any):any;
	static gatherFuture(f:any):any;


}

}

export default tink.core.FutureTrigger;