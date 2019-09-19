function binarySortForlastValue (arr, number) {
    if (Object.prototype.toString.call(arr) !== '[object Array]') throw new Error('arr must be an array');
  
    const length = arr.length;
  
    let low = 0;
    let high = length - 1;
  
    while (low <= high) {
      const middle = low + Math.floor((high - low) / 2);
      if (arr[middle] > number) {
        high = middle - 1;
      } else if (arr[middle] < number) {
        low = middle + 1;
      } else {
        if (middle === length - 1 || arr[middle + 1] > number) {
          return middle;
        }
        low = middle + 1;
      }
    }
  
    return -1;
  }
  
  
  module.exports = binarySortForlastValue;