const binarySortForFirstValue = require('../../binarySort/firstLargeEqual');
  
const arr = [1, 2, 3, 3, 5, 7, 8, 8, 8, 11, 24];

describe('binarySortForFirstValue', () => {
  it('should return -1', () => {
    const result = binarySortForFirstValue([3], 4);
    expect(result).toBe(-1);
  });
  it('should return 0', () => {
    const result = binarySortForFirstValue([3], 3);
    expect(result).toBe(0);
  });
  it('should return 0', () => {
    const result = binarySortForFirstValue([4], 3);
    expect(result).toBe(0);
  });

  it('should return 2', () => {
    const result = binarySortForFirstValue(arr, 3);
    expect(result).toBe(2);
  });

  it('should return 2', () => {
    const result = binarySortForFirstValue(arr, 4);
    expect(result).toBe(4);
  });

  it('should return 6', () => {
    const result = binarySortForFirstValue(arr, 8);
    expect(result).toBe(6);
  });

  it('should return 9', () => {
    const result = binarySortForFirstValue(arr, 11);
    expect(result).toBe(9);
  });

  it('should return -1', () => {
    const result = binarySortForFirstValue(arr, 14);
    expect(result).toBe(10);
  });

  it('should return -1', () => {
    const result = binarySortForFirstValue(arr, 34);
    expect(result).toBe(-1);
  });

  it('should return -1', () => {
    const result = binarySortForFirstValue(arr, 0);
    expect(result).toBe(0);
  });
});