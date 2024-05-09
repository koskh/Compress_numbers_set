const radix: number = 36;

 function generateArray<T>(): Array<Array<T>> {
     // MIN = 0, MAX = 300 => maximum 9 "rows" for  1-300 numbers
    return [[],[],[],[],[],[],[],[],[]]
}

export function compressByRadix(arg0: Array<number>): string {
    const numbers:Array<Array<number>> =  generateArray()
    //
    arg0.forEach(v=>{
        const y= parseInt((v / radix) as unknown as string);
         numbers[y].push(v)
    })

    const  compressedString: Array<string> = [];
    //
    numbers.forEach((v, row)=> {
        const rowCompressedString: Array<string> = []
        //
        v.forEach((v)=>{
            rowCompressedString.push(Number(v - (radix*row)).toString(36))
        })
        compressedString.push(rowCompressedString.join(''));
    })

    return compressedString.join(',')
}

export function decompressByRadix(arg0: string):  Array<number>{
    const split:Array<string> = arg0.split(',');

    const numbers:Array<number> = []
    //
    split.forEach((codedString, rowIndex)=>{
        for(let c =0; c<codedString.length; c++) {
            numbers.push( (radix*rowIndex) + parseInt(codedString.at(c) || '0', radix))
        }
    })

    return numbers
}

