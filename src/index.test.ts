import {describe, expect, test} from '@jest/globals';

import {serializeLossless, deserializeLossless} from './index'
import {compress, decompress} from "./utils";

function getRandomInt(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

describe('lossless serialize/deserialize module', () => {

    test('can compress/ decompress', () => {
        const input = Array(10).fill('').map(()=> getRandomInt(1, 300))
        const compressData = compress(input);
        const decompressData = decompress(compressData);

        expect(decompressData).toEqual(input);
    });

    test('can serialize, desiarile', () => {
        const input = Array(10).fill('').map(()=> getRandomInt(1, 300))
        expect(deserializeLossless(serializeLossless(input))).toEqual(input);
    });

    test('can compress 50 random numbers', () => {
        const input = Array(10).fill('').map(()=> getRandomInt(1, 300))
        console.log('input', input)

        const defaultOutput = JSON.stringify(input);
        const defaultOutputLength = defaultOutput.length;
        console.log('defaultOutput', defaultOutput)
        console.log('defaultOutputLength', defaultOutputLength)

        const compressOutput = serializeLossless(input);
        const compressOutputLength = compressOutput.length;
        console.log('compressOutput', compressOutput)
        console.log('compressOutputLength', compressOutputLength)

        expect(deserializeLossless(compressOutput)).toEqual(input);
        expect(defaultOutputLength ).toBeGreaterThan(compressOutputLength )
        //
        expect(compressOutputLength).toBeLessThan(defaultOutputLength * 0.6)
    });

});
