import {compressByRadix, decompressByRadix} from "./utils";


export  function serialize(input: Array<number>):string {
    return JSON.stringify(compressByRadix(input))

}

export  function deserialize(input: string): Array<number> {
    return decompressByRadix(JSON.parse(input))

}
