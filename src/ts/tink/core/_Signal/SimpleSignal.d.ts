import tink_core_SignalObject from "./../../../tink/core/SignalObject";

declare namespace tink.core._Signal {

export class SimpleSignal {

	constructor(f:any);
	f(a1:any):any;
	handle(cb:any):any;


}

}

export default tink.core._Signal.SimpleSignal;