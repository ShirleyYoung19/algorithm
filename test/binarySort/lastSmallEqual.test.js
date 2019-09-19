const binarySortForLastValue = require('../../binarySort/lastSmallEqual');
  
const arr = [1, 2, 3, 3, 5, 7, 8, 8, 8, 11, 24];

describe('binarySortForFirstValue', () => {
  it('should return -1', () => {
    const result = binarySortForLastValue([3], 4);
    expect(result).toBe(0);
  });
  it('should return 0', () => {
    const result = binarySortForLastValue([3], 3);
    expect(result).toBe(0);
  });
  it('should return 0', () => {
    const result = binarySortForLastValue([4], 3);
    expect(result).toBe(-1);
  });

  it('should return 2', () => {
    const result = binarySortForLastValue(arr, 3);
    expect(result).toBe(3);
  });

  it('should return 2', () => {
    const result = binarySortForLastValue(arr, 4);
    expect(result).toBe(3);
  });

  it('should return 6', () => {
    const result = binarySortForLastValue(arr, 8);
    expect(result).toBe(8);
  });

  it('should return 9', () => {
    const result = binarySortForLastValue(arr, 11);
    expect(result).toBe(9);
  });

  it('should return 9', () => {
    const result = binarySortForLastValue(arr, 14);
    expect(result).toBe(9);
  });

  it('should return 10', () => {
    const result = binarySortForLastValue(arr, 34);
    expect(result).toBe(10);
  });

  it('should return -1', () => {
    const result = binarySortForLastValue(arr, 0);
    expect(result).toBe(-1);
  });
});