import tink_core__$Future_FutureObject from "./../../../tink/core/_Future/FutureObject";

declare namespace tink.core._Future {

export class NeverFuture {

	constructor();
	map(f:any):any;
	flatMap(f:any):any;
	handle(callback:any):any;
	gather():any;
	eager():any;
	static inst:any;


}

}

export default tink.core._Future.NeverFuture;