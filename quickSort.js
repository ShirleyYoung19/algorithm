// function quickSort (arr) {
//     const length = arr.length;
//     if(length <= 1) return arr;

//     quickSortR(arr, 0, length - 1);
//     return arr;
// }

// function quickSortR(arr, start, end) {
//     if( start >= end ) return;
//     const pivot = getPivot(arr, start, end);
//     quickSortR(arr, start, pivot - 1);
//     quickSortR(arr, pivot + 1, end);
// }

// function getPivot(arr, start, end) {
//     let i = 0;
//     let j = 0;
//     for(j; j < end - start; j += 1) {
//         if(arr[start + j] < arr[end]) {
//             if(i !== j) {
//                 const temp = arr[start + j];
//                 arr[start + j] = arr[start + i];
//                 arr[start + i] = temp;   
//             }
//             i += 1;
//         }
//     }
//     const temp = arr[end];
//      arr[end] = arr[start + i];
//     arr[start + i] = temp;
//     return start + i;
// }

function quickSort(arr) {
    if(arr.length <= 1) return arr;
    quickSortR(arr, 0, arr.length - 1);
    return arr;
}

function quickSortR(arr, start, end) {
    if(start >= end) return;
    const pivot = getPivot(arr, start, end);
    quickSortR(arr, start, pivot - 1);
    quickSortR(arr, pivot + 1, end);
}

function getPivot(arr, start, end) {
    let i = 0;
    let j = 0;
    for(j; j < end - start; j += 1) {
        if( arr[start + j] < arr[end]) {
            if( i !== j) {
                swap(arr, start + i, start + j);
            }
            i += 1;
        }
    }
    swap(arr, start + i, end);
    return start + i;
}

function swap(arr, first, second) {
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

module.exports = {
    quickSort,
}