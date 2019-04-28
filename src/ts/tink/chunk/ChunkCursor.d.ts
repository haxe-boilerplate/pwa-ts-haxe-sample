import tink__$Chunk_Chunk_$Impl_$ from "./../../tink/_Chunk/Chunk_Impl_";
import haxe_ds_Option from "./../../haxe/ds/Option";

declare namespace tink.chunk {

export class ChunkCursor {

	constructor();
	parts:any;
	curPart:any;
	curPartIndex:any;
	curOffset:any;
	curLength:any;
	length:any;
	currentPos:any;
	currentByte:any;
	clone():any;
	reset():any;
	flush():any;
	prune():any;
	add(chunk:any):any;
	shift(chunk?:any):any;
	clear():any;
	left():any;
	right():any;
	seek(seekable:any, options?:any):any;
	sweep(len:any):any;
	sweepTo(pos:any):any;
	moveBy(delta:any):any;
	moveTo(position:any):any;
	ffwd():any;
	next():any;
	static create(parts:any):any;


}

}

export default tink.chunk.ChunkCursor;