const { binarySearch } = require('../binarySearch');

describe(binarySearch, () => {
    it('should return 2', () => {
        const arr = [8, 11, 19, 23, 27, 33, 45, 55, 67, 98];
        expect(binarySearch(arr, 6)).toBe(-1);
        expect(binarySearch(arr, 8)).toBe(0);
        expect(binarySearch(arr, 11)).toBe(1);
        expect(binarySearch(arr, 19)).toBe(2);
        expect(binarySearch(arr, 23)).toBe(3);
        expect(binarySearch(arr, 27)).toBe(4);
        expect(binarySearch(arr, 33)).toBe(5);
        expect(binarySearch(arr, 41)).toBe(-1);
        expect(binarySearch(arr, 45)).toBe(6);
        expect(binarySearch(arr, 55)).toBe(7);
        expect(binarySearch(arr, 67)).toBe(8);
        expect(binarySearch(arr, 98)).toBe(9);
        expect(binarySearch(arr, 99)).toBe(-1);
    });
});