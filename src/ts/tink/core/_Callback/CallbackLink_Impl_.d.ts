import tink_core__$Callback_SimpleLink from "./../../../tink/core/_Callback/SimpleLink";
import tink_core__$Callback_LinkPair from "./../../../tink/core/_Callback/LinkPair";

declare namespace tink.core._Callback {

export class CallbackLink_Impl_ {

	static _new(link:any):any;
	static cancel(this:any):any;
	static dissolve(this:any):any;
	static noop():any;
	static toFunction(this:any):any;
	static toCallback(this:any):any;
	static fromFunction(f:any):any;
	static join(a:any, b:any):any;
	static fromMany(callbacks:any):any;


}

}

export default tink.core._Callback.CallbackLink_Impl_;