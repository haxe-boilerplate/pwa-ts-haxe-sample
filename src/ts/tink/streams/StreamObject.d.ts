

declare namespace tink.streams {

export class StreamObject {

	
	get_depleted():any;
	depleted:any;
	next():any;
	regroup(f:any):any;
	map(f:any):any;
	filter(f:any):any;
	retain():any;
	idealize(rescue:any):any;
	append(other:any):any;
	prepend(other:any):any;
	blend(other:any):any;
	decompose(into:any):any;
	forEach(handle:any):any;
	reduce(initial:any, reducer:any):any;


}

}

export default tink.streams.StreamObject;