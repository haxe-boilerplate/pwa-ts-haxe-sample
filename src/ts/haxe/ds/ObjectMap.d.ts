import haxe_IMap from "./../../haxe/IMap";
import HxOverrides from "./../../HxOverrides";

declare namespace haxe.ds {

export class ObjectMap {

	constructor();
	
	get(key:any):any;
	exists(key:any):any;
	keys():any;
	iterator():any;
	static count:any;


}

}

export default haxe.ds.ObjectMap;