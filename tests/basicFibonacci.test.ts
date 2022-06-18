import { computeFibonacciNumber } from '../src/fibonacci';

describe('Basic Fibonacci Test', () => {
    it('Check fibonacci works for small numbers', () => {
        const expectedOutputs = [1, 1, 2, 3, 5, 8, 13, 21, 34];
        for (let i = 0; i < expectedOutputs.length; i++) {
            expect(computeFibonacciNumber(i+1)).toEqual(expectedOutputs[i]);
        }
    });
})
