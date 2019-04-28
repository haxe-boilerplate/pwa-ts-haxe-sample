import haxe_io_Bytes from "./../../haxe/io/Bytes";
import haxe_crypto_BaseCode from "./../../haxe/crypto/BaseCode";
import HxOverrides from "./../../HxOverrides";

declare namespace haxe.crypto {

export class Base64 {

	static CHARS:any;
	static BYTES:any;
	static encode(bytes:any, complement?:any):any;
	static decode(str:any, complement?:any):any;


}

}

export default haxe.crypto.Base64;