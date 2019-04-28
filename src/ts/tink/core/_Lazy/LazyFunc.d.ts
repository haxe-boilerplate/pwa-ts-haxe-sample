import tink_core__$Lazy_LazyObject from "./../../../tink/core/_Lazy/LazyObject";

declare namespace tink.core._Lazy {

export class LazyFunc {

	constructor(f:any);
	f():any;
	result:any;
	get():any;
	map(f:any):any;
	flatMap(f:any):any;


}

}

export default tink.core._Lazy.LazyFunc;