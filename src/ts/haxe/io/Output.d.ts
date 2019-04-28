import js__$Boot_HaxeError from "./../../js/_Boot/HaxeError";
import haxe_io_Error from "./../../haxe/io/Error";

declare namespace haxe.io {

export class Output {

	writeByte(c:any):any;
	writeBytes(s:any, pos:any, len:any):any;
	close():any;


}

}

export default haxe.io.Output;