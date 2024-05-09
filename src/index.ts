import {compressByRadix, decompress} from "./utils";


export  function serialize(input: Array<number>):string {
    // return JSON.stringify(compress(input))
    return JSON.stringify(compressByRadix(input))

}

export  function deserialize(input: string): Array<number> {
    return decompress(JSON.parse(input))

}
