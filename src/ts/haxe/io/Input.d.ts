import js__$Boot_HaxeError from "./../../js/_Boot/HaxeError";
import haxe_io_Error from "./../../haxe/io/Error";
import haxe_io_Eof from "./../../haxe/io/Eof";

declare namespace haxe.io {

export class Input {

	readByte():any;
	readBytes(s:any, pos:any, len:any):any;
	close():any;


}

}

export default haxe.io.Input;