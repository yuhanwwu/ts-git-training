import { computeFibbonaciNumber } from '../src/fibbonaci';

describe('Basic Fibbonaci Test', () => {
    it('Check fibbonaci works for small numbers', () => {
        const expectedOutputs = [1, 1, 2, 3, 5, 8, 13, 21, 34];
        for (let i = 0; i < expectedOutputs.length; i++) {
            expect(computeFibbonaciNumber(i+1)).toEqual(expectedOutputs[i]);
        }
    })
})
