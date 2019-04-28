

declare namespace tink.core._Future {

export class FutureObject {

	
	map(f:any):any;
	flatMap(f:any):any;
	handle(callback:any):any;
	gather():any;
	eager():any;


}

}

export default tink.core._Future.FutureObject;