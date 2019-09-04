const { quickSort } = require('../quickSort');
  
describe('quickSort', () => {
  it('should return [1, 2, 3, 7, 8, 9, 11]', () => {
    const arr = [11, 8, 3, 9, 7, 1, 2];
    expect(quickSort(arr)).toEqual([1, 2, 3, 7, 8, 9, 11]);
  });

  it('should return [8, 11]', () => {
    const arr = [11, 8];
    expect(quickSort(arr)).toEqual([8, 11]);
  });
});
