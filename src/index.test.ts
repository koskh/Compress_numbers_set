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

    test('can serialize, desiarilize', () => {
        const input = Array(10).fill('').map(()=> getRandomInt(1, 300))
        expect(deserialize(serialize(input)).sort()).toEqual(input.sort());
    });

    test('can compress > 65% for 50 random numbers', () => {
        const input = Array(50).fill('').map(()=> getRandomInt(1, 300))
        //
        const defaultOutput = JSON.stringify(input);
        const defaultOutputLength = defaultOutput.length;
        console.log('defaultOutputLength', defaultOutputLength)
        //
        const compressOutput = serialize(input);
        const compressOutputLength = compressOutput.length;
        console.log('compressOutputLength', compressOutputLength)

        expect(deserialize(compressOutput).sort()).toEqual(input.sort());
        //
        expect(defaultOutputLength ).toBeGreaterThan(compressOutputLength )
        expect(compressOutputLength).toBeLessThan(defaultOutputLength * 0.35)
    });

    test('can compress > 70% for 500 random numbers', () => {
        const input = Array(500).fill('').map(()=> getRandomInt(1, 300))
        //
        const defaultOutput = JSON.stringify(input);
        const defaultOutputLength = defaultOutput.length;
        console.log('defaultOutputLength', defaultOutputLength)
        //
        const compressOutput = serialize(input);
        const compressOutputLength = compressOutput.length;
        console.log('compressOutputLength', compressOutputLength)

        expect(deserialize(compressOutput).sort()).toEqual(input.sort());
        //
        expect(defaultOutputLength ).toBeGreaterThan(compressOutputLength )
        expect(compressOutputLength).toBeLessThan(defaultOutputLength * 0.3)
    });

    test('can compress > 70% for 1000 random numbers', () => {
        const input = Array(1000).fill('').map(()=> getRandomInt(1, 300))
        //
        const defaultOutput = JSON.stringify(input);
        const defaultOutputLength = defaultOutput.length;
        console.log('defaultOutputLength', defaultOutputLength)
        //
        const compressOutput = serialize(input);
        const compressOutputLength = compressOutput.length;
        console.log('compressOutputLength', compressOutputLength)

        expect(deserialize(compressOutput).sort()).toEqual(input.sort());
        //
        expect(defaultOutputLength ).toBeGreaterThan(compressOutputLength )
        expect(compressOutputLength).toBeLessThan(defaultOutputLength * 0.3)
    });

    test('can compress > 45 % all 100 numbers 1 sign', () => {
        const input = Array(100).fill('').map(()=> getRandomInt(1, 9))
        //
        const defaultOutput = JSON.stringify(input);
        const defaultOutputLength = defaultOutput.length;
        console.log('defaultOutputLength', defaultOutputLength)
        //
        const compressOutput = serialize(input);
        const compressOutputLength = compressOutput.length;
        console.log('compressOutputLength', compressOutputLength)

        expect(deserialize(compressOutput).sort()).toEqual(input.sort());
        //
        expect(defaultOutputLength ).toBeGreaterThan(compressOutputLength )
        expect(compressOutputLength).toBeLessThan(defaultOutputLength * 0.55)
    });

    test('can compress > 55 % all 100 numbers 2 sign', () => {
        const input = Array(100).fill('').map(()=> getRandomInt(10, 99))
        //
        const defaultOutput = JSON.stringify(input);
        const defaultOutputLength = defaultOutput.length;
        console.log('defaultOutputLength', defaultOutputLength)
        //
        const compressOutput = serialize(input);
        const compressOutputLength = compressOutput.length;
        console.log('compressOutputLength', compressOutputLength)

        expect(deserialize(compressOutput).sort()).toEqual(input.sort());
        //
        expect(defaultOutputLength ).toBeGreaterThan(compressOutputLength )
        expect(compressOutputLength).toBeLessThan(defaultOutputLength * 0.45)
    });

    test('can compress > 70% all 100 numbers 3 sign', () => {
        const input = Array(100).fill('').map(()=> getRandomInt(100, 300))
        //
        const defaultOutput = JSON.stringify(input);
        const defaultOutputLength = defaultOutput.length;
        console.log('defaultOutputLength', defaultOutputLength)
        //
        const compressOutput = serialize(input);
        const compressOutputLength = compressOutput.length;
        console.log('compressOutputLength', compressOutputLength)

        expect(deserialize(compressOutput).sort()).toEqual(input.sort());
        //
        expect(defaultOutputLength ).toBeGreaterThan(compressOutputLength )
        expect(compressOutputLength).toBeLessThan(defaultOutputLength * 0.3)
    });

});
