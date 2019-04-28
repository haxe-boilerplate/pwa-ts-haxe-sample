import tink_core_FutureTrigger from "./../../../tink/core/FutureTrigger";
import tink_core__$Callback_Callback_$Impl_$ from "./../../../tink/core/_Callback/Callback_Impl_";
import tink_core__$Future_Future_$Impl_$ from "./../../../tink/core/_Future/Future_Impl_";

declare namespace tink.core._Future {

export class LazyTrigger extends tink_core_FutureTrigger {

	constructor(op:any);
	
	eager():any;
	map(f:any):any;
	flatMap(f:any):any;
	handle(cb:any):any;


}

}

export default tink.core._Future.LazyTrigger;