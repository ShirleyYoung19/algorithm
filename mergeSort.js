// function mergeSort (_arr) {
//     if (Object.prototype.toString.call(_arr) !== '[object Array]') return undefined;
  
//     const arr = [..._arr];
//     const length = arr.length;
  
//     if (length <= 1) return arr;
  
//     mergeSortR(arr, 0, length - 1);
//     return arr;
//   }
  
//   function mergeSortR (arr, start, end) {
//     if (start >= end) return;
//     const middle = Math.floor((start + end) / 2);
//     mergeSortR(arr, start, middle);
//     mergeSortR(arr, middle + 1, end);
  
//     merge(arr, start, end);
//   }
  
//   function merge (arr, start, end) {
//     const middle = Math.floor((start + end) / 2);
//     const firstLength = (middle -start) + 1;
//     const secondLength = end - middle;

//     let i = 0;
//     let j = 0;
//     const temp = [];
//     while (i < firstLength || j < secondLength) {
//       if (i >= firstLength) {
//         temp.push(arr[middle + 1 + j]);
//         j += 1;
//         continue;
//       }
  
//       if (j >= secondLength) {
//         temp.push(arr[start + i]);
//         i += 1;
//         continue;
//       }
  
//       if (arr[start + i] < arr[middle + 1 + j]) {
//         temp.push(arr[start + i]);
//         i += 1;
//       } else {
//         temp.push(arr[middle + 1 + j]);
//         j += 1;
//       }
//     }
//     for (let k = 0; k < temp.length; k += 1) {
//       arr[start + k] = temp[k];
//     }
//   }
  function mergeSort (arr) {
    if(arr.length <= 1) return arr;

    mergeSortR(arr, 0, arr.length - 1);

    return arr;
  }

  function mergeSortR(arr, start, end) {
    if(start >= end) return;
    const middle = Math.floor((start + end) / 2);
    mergeSortR(arr, start, middle);
    mergeSortR(arr, middle + 1, end);
    merge(arr, start, end);
  }

  function merge(arr, start, end) {
    const middle = Math.floor((start + end) / 2);
    const firstLength = middle - start + 1;
    const secondeLength = end - middle;

    const temp = [];
    let i = 0;
    let j = 0;

    while(i < firstLength && j < secondeLength) {
      if(arr[start + i] < arr[middle + 1 + j]) {
        temp.push(arr[start + i]);
        i += 1;
      } else {
        temp.push(arr[middle + 1 + j]);
        j += 1;
      }
    }

    if(i < firstLength) {
      for(i; i < firstLength; i += 1) {
        temp.push(arr[start + i]);
      }
    } else {
      for(j; j < secondeLength; j += 1) {
        temp.push(arr[middle + 1 + j]);
      }
    }

    for(let k = 0; k < temp.length; k += 1) {
      arr[start + k] = temp[k];
    }
  }
  
  module.exports = {
    mergeSort,
  };
  
  

  
  
  
  
  
   