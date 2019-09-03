const { bubbleSort } = require('../bubbleSort');

describe('bubbleSort', () => {
    it('should return undefined if argument is not an array', () => {
        expect(bubbleSort('string')).toBe(undefined);
    })

    it('should return array back if its length is 1', () => {
        const arr = [1];
        expect(bubbleSort(arr)).toEqual(arr);
    })

    it('should return [1, 2, 3, 4, 5, 6]', () => {
        const arr = [4, 5, 3, 1,6, 2];
        expect(bubbleSort(arr)).toEqual([1, 2, 3, 4, 5, 6]);
    })

    it('should return [1, 2, 3, 3, 4, 5, 5, 6]', () => {
        const arr = [6, 4, 5, 3, 1, 5, 3, 2];
        expect(bubbleSort(arr)).toEqual([1, 2, 3, 3, 4, 5, 5, 6]);
    })
})