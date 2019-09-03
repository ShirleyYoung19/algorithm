const { selectionSort } = require('../selectionSort');
describe('selectionSort', () => {
    it('should return undefined if argument is not an array', () => {
        expect(selectionSort(true)).toBeUndefined();
    });

    it('should return array if its length is 1', () => {
        const arr = ['a'];
        expect(selectionSort(arr)).toEqual(arr);
    });

    it('should return [1, 2, 3, 4, 5, 6]', () => {
        const arr = [4, 5, 3, 1,6, 2];
        expect(selectionSort(arr)).toEqual([1, 2, 3, 4, 5, 6]);
    })

    it('should return [1, 2, 3, 3, 4, 5, 5, 6]', () => {
        const arr = [6, 4, 5, 3, 1, 5, 3, 2];
        expect(selectionSort(arr)).toEqual([1, 2, 3, 3, 4, 5, 5, 6]);
    })
})