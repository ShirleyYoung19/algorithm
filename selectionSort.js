function selectionSort (arr) {
    if(Object.prototype.toString.call(arr) !== '[object Array]') return undefined;

    const newArr = [...arr];
    const length = newArr.length;

    if(length <= 1) return newArr;

    for(let i = 0; i < length -1; i++) {
        let minIndex = i;
        for(let j = i + 1; j < length; j++) {
            if(newArr[j] < newArr[minIndex]) {
                minIndex = j;
            }
        }
        if(minIndex !== i) {
            const temp = newArr[i];
            newArr[i] = newArr[minIndex];
            newArr[minIndex] = temp;
        }
    }
    return newArr;
}

module.exports = {
    selectionSort,
}