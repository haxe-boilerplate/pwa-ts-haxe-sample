import tink_core_SignalObject from "./../../../tink/core/SignalObject";
import tink_core__$Callback_CallbackList_$Impl_$ from "./../../../tink/core/_Callback/CallbackList_Impl_";
import tink_core__$Callback_SimpleLink from "./../../../tink/core/_Callback/SimpleLink";
import tink_core__$Callback_LinkPair from "./../../../tink/core/_Callback/LinkPair";
import tink_core_SignalTrigger from "./../../../tink/core/SignalTrigger";

declare namespace tink.core._Signal {

export class Suspendable {

	constructor(activate:any);
	trigger:any;
	activate(a1:any):any;
	suspend():any;
	check:any;
	killed:any;
	kill():any;
	handle(cb:any):any;


}

}

export default tink.core._Signal.Suspendable;