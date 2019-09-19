function binarySearch (arr, number) {
    const length = arr.length;

    if(length === 0) {
        return -1;
    }

    if(length === 1) {
        if(arr[0] === number) return 0;
        return -1;
    }
    const result = binarySearchR(arr, number, 0, length - 1);
    return result;
}

// [8, 19, 21, 23, 27, 33, 45, 55, 67, 98]
// 0, 9, 4, 27
// 4, 9, 6, 45
// 6, 9, 7, 55
// 7, 9, 8 67
// 8, 9

function binarySearchR(arr, number, start, end) {
    if(end - start < 0 ){
        return -1;
    }

    const middle = start + Math.floor((end - start) / 2);

    if(arr[middle] === number) {
        return middle;
    } else if(arr[middle] > number) {
        return binarySearchR(arr, number, start, middle - 1);
    } else {
        return binarySearchR(arr, number, middle + 1, end);
    }
}

module.exports = {
    binarySearch,
}