import tink_core__$Signal_SimpleSignal from "./../../../tink/core/_Signal/SimpleSignal";
import tink_core__$Callback_Callback_$Impl_$ from "./../../../tink/core/_Callback/Callback_Impl_";
import tink_core__$Callback_LinkPair from "./../../../tink/core/_Callback/LinkPair";
import tink_core_FutureTrigger from "./../../../tink/core/FutureTrigger";
import tink_core__$Signal_Suspendable from "./../../../tink/core/_Signal/Suspendable";
import tink_core__$Callback_CallbackLink_$Impl_$ from "./../../../tink/core/_Callback/CallbackLink_Impl_";
import tink_core_Noise from "./../../../tink/core/Noise";
import tink_core__$Callback_CallbackList_$Impl_$ from "./../../../tink/core/_Callback/CallbackList_Impl_";
import tink_core_SignalTrigger from "./../../../tink/core/SignalTrigger";
import tink_core__$Callback_SimpleLink from "./../../../tink/core/_Callback/SimpleLink";

declare namespace tink.core._Signal {

export class Signal_Impl_ {

	static _new(f:any):any;
	static map(this:any, f:any, gather?:any):any;
	static flatMap(this:any, f:any, gather?:any):any;
	static filter(this:any, f:any, gather?:any):any;
	static select(this:any, selector:any, gather?:any):any;
	static join(this:any, other:any, gather?:any):any;
	static nextTime(this:any, condition?:any):any;
	static until(this:any, end:any):any;
	static next(this:any, condition?:any):any;
	static noise(this:any):any;
	static gather(this:any):any;
	static generate(generator:any):any;
	static trigger():any;
	static create(create:any):any;
	static ofClassical(add:any, remove:any, gather?:any):any;


}

}

export default tink.core._Signal.Signal_Impl_;