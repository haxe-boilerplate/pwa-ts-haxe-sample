import js__$Boot_HaxeError from "./../../js/_Boot/HaxeError";
import haxe_io_Error from "./../../haxe/io/Error";
import haxe_io_Encoding from "./../../haxe/io/Encoding";
import HxOverrides from "./../../HxOverrides";

declare namespace haxe.io {

export class Bytes {

	constructor(data:any);
	length:any;
	b:any;
	blit(pos:any, src:any, srcpos:any, len:any):any;
	sub(pos:any, len:any):any;
	getString(pos:any, len:any, encoding?:any):any;
	toString():any;
	toHex():any;
	static ofString(s:any, encoding?:any):any;
	static ofData(b:any):any;


}

}

export default haxe.io.Bytes;