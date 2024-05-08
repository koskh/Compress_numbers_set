export function toSymbol(arg0: number): string {
    return String.fromCharCode(arg0)
}
export function fromSymbol(arg0: string): number {
    return arg0.charCodeAt(0)
}


export function compress(arg0: Array<number>): Array<number| string> {
    return arg0.map(v=> v>=33 && v <=126? toSymbol(v): v)
}

export function decompress(arg0: Array<number| string>):  Array<number>{
    return <Array<number>> arg0.map(v=> v>= '!' && v <='~'? fromSymbol(<string> v): v)
}
