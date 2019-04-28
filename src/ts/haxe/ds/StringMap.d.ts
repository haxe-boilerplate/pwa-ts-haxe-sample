import haxe_IMap from "./../../haxe/IMap";
import HxOverrides from "./../../HxOverrides";
import haxe_ds__$StringMap_StringMapIterator from "./../../haxe/ds/_StringMap/StringMapIterator";

declare namespace haxe.ds {

export class StringMap {

	constructor();
	
	
	get(key:any):any;
	exists(key:any):any;
	setReserved(key:any, value:any):any;
	getReserved(key:any):any;
	existsReserved(key:any):any;
	keys():any;
	arrayKeys():any;
	iterator():any;


}

}

export default haxe.ds.StringMap;