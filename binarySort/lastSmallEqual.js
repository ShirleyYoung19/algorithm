function lastValue (arr, number) {
    if(Object.prototype.toString.call(arr) !== '[object Array]') throw new Error('arr must be an array');

    const length = arr.length;
    let high = length - 1;
    let low = 0;
    
    while(low <= high) {
        const middle = low + Math.floor((high - low) / 2);

        // if(arr[middle] > number) {
        //     high = middle 
        // }
        // if(middle === 0) {
        //     if(arr[middle] > number) return middle;
        // } else if(arr[middle] < number) {
        //     if(arr[mi])
        // }

        if(arr[middle] <= number) {
            if(middle === length - 1 || arr[middle + 1] > number) return middle;
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }

    return -1;
}

module.exports = lastValue;