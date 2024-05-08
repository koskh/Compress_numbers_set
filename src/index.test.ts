import {describe, expect, test} from '@jest/globals';

import {serialize, deserialize} from './index'

function getRandomInt(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

describe('serialize/deserialize module', () => {
    test('can serialize, desiarile', () => {
        const input = Array(10).fill('').map(()=> getRandomInt(1, 300))
        expect(deserialize(serialize(input))).toEqual(input);
    });

    test('can zip 50 random numbers', () => {
        const input = Array(50).fill('').map(()=> getRandomInt(1, 300))

        const defaultOutput = JSON.stringify(input);
        const defaultOutputLength = defaultOutput.length;
        //
        const compressOutput = serialize(input);
        const compressOutputLength = compressOutput.length;


        expect(deserialize(compressOutput)).toEqual(input);
        expect(defaultOutputLength).toBeGreaterThan(compressOutputLength)

    });

});
