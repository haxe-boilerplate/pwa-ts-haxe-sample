import tink_core__$Lazy_LazyObject from "./../../../tink/core/_Lazy/LazyObject";
import tink_core__$Lazy_LazyFunc from "./../../../tink/core/_Lazy/LazyFunc";

declare namespace tink.core._Lazy {

export class LazyConst {

	constructor(value:any);
	value:any;
	get():any;
	map(f:any):any;
	flatMap(f:any):any;


}

}

export default tink.core._Lazy.LazyConst;