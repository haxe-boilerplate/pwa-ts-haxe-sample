import tink_core_SignalObject from "./../../tink/core/SignalObject";
import tink_core__$Callback_CallbackList_$Impl_$ from "./../../tink/core/_Callback/CallbackList_Impl_";

declare namespace tink.core {

export class SignalTrigger {

	constructor();
	handlers:any;
	trigger(event:any):any;
	getLength():any;
	handle(cb:any):any;
	clear():any;
	asSignal():any;


}

}

export default tink.core.SignalTrigger;