import {describe, expect, test} from '@jest/globals';

import {serialize, deserialize} from './index'
import {compressByRadix, decompressByRadix} from "./utils";

function getRandomInt(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

describe('serialize/deserialize module', () => {

    test('can compress/ decompress', () => {
        const input = Array(10).fill('').map(()=> getRandomInt(1, 300))
        // console.log('input', input)

        const compressData = compressByRadix(input);
        // console.log('compressOutput', compressData)

        const decompressData = decompressByRadix(compressData);
        // console.log('decompressData', decompressData)

        expect(decompressData.sort()).toEqual(input.sort());
    });

    test('can serialize, desiarile', () => {
        const input = Array(10).fill('').map(()=> getRandomInt(1, 300))
        expect(deserialize(serialize(input)).sort()).toEqual(input.sort());
    });

    test('can compress 50 random numbers ', () => {
        const input = Array(50).fill('').map(()=> getRandomInt(1, 300))
        //
        const defaultOutput = JSON.stringify(input);
        const defaultOutputLength = defaultOutput.length;
        //
        const compressOutput = serialize(input);
        const compressOutputLength = compressOutput.length;

        expect(deserialize(compressOutput).sort()).toEqual(input.sort());
        //
        expect(defaultOutputLength ).toBeGreaterThan(compressOutputLength )
        expect(compressOutputLength).toBeLessThan(defaultOutputLength * 0.5)
    });

});
