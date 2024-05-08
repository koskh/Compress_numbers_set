import {describe, expect, test} from '@jest/globals';

import {serialize, deserialize} from './index'


describe('serialize/deserialize module', () => {
    test('can serialize, desiarile', () => {
        const input = [42,42,42,42,42]
        expect(deserialize(serialize(input))).toBe(input);
    });

});
