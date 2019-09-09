const { countingSort } = require('../countingSort');

describe('countingSort', () => {
    it('should return [0, 0, 2, 2, 3, 3, 3, 5]', () => {
        expect(countingSort([2, 5, 3, 0, 2, 3, 0, 3])).toEqual([0, 0, 2, 2, 3, 3, 3, 5]);
    })
})