import {describe, expect, test} from "@jest/globals";
import {compress, decompress} from "./utils";

function getRandomInt(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
describe('serialize/deserialize module', () => {
    test('can compress/ decompress', () => {
        const input = Array(10).fill('').map(()=> getRandomInt(1, 300))
        console.log('input', input)

        const compressData = compress(input);
        console.log('compressData', compressData)

        const decompressData = decompress(compressData);
        console.log('decompressData', decompressData)

        expect(decompressData).toEqual(input);
    });

});
