
export function toSymbol(arg0: number): string {
    return String.fromCharCode(arg0)
}
export function fromSymbol(arg0: string): number {
    return arg0.charCodeAt(0)
}


export function compress(arg0: Array<number>): string {
    // return arg0.map(v=> v>=32 && v <=126? toSymbol(v): v).join(',')
    // return arg0.map(v=> Number(v).toString(36).padStart(2, '0')).join('')
    const numbers = arg0.map(v=> Number(v).toString(36).padStart(2, '0'))
    // console.log('arg0', arg0.join());
    // console.log('numbers', numbers.join(''));
    // console.log('numbers111', compressGzip(numbers.join()));
    // @ts-ignore

    return numbers.join('')
}

export function decompress(arg0: string):  Array<number>{
    const splitted:Array<string> = [];

    for(let i = 0; i<arg0.length;  i = i + 2) {
        splitted.push(`${arg0.at(i)}${arg0.at(i+1)}`)
    }
    // const splitted = arg0.split(',')
    // return <Array<number>> arg0.map(v=> v>= ' ' && v <='~'? fromSymbol(<string> v): v)
    return splitted.map(v => parseInt(v, 36))
}


// export const compressGzip = async (
//     str: string,
//     encoding = 'gzip' as CompressionFormat
// ): Promise<ArrayBuffer> => {
//     const byteArray = new TextEncoder().encode(str)
//     const cs = new CompressionStream(encoding)
//     const writer = cs.writable.getWriter()
//     writer.write(byteArray)
//     writer.close()
//     return await new Response(cs.readable).arrayBuffer()
// }
