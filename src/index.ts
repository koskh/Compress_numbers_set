import {compress, decompress} from "./utils";


export  function serializeLossless(input: Array<number>):string {
    return JSON.stringify(compress(input))

}

export  function deserializeLossless(input: string): Array<number> {
    return decompress(JSON.parse(input))

}


export  function serializeLose(input: Array<number>):string {
    return JSON.stringify(compress(input))

}

export  function deserializeLose(input: string): Array<number> {
    return decompress(JSON.parse(input))

}
