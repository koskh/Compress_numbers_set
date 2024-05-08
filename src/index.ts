export  function serialize(input: Array<number>):string {
    return JSON.stringify(input)
}

export  function deserialize(input: string): Array<number> {
    return JSON.parse(input)
}
