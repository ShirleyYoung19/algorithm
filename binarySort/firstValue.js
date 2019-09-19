function binarySortForFirstValue (arr, number) {
    if (Object.prototype.toString.call(arr) !== '[object Array]') throw new Error('arr must be an array');
    const length = arr.length;
  
    if (!length) return -1;
  
    let high = length - 1;
    let low = 0;
  
    while (low <= high) {
      const middle = low + Math.floor((high - low) / 2);
  
      if (arr[middle] > number) {
        high = middle - 1;
      } else if (arr[middle] < number) {
        low = middle + 1;
      } else {
        if (middle === 0 || arr[middle - 1] < number) {
          return middle;
        }
        high = middle - 1;
      }
    }
  
    return -1;
  }
  
  
  module.exports = binarySortForFirstValue;