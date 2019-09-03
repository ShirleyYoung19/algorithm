function insertSort(arr) {
    if(Object.prototype.toString.call(arr) !== '[object Array]') return undefined;

    const newArr = [...arr];
    const length = newArr.length;
    if(length <= 1) return newArr;

    for(let i = 0; i < length - 1; i ++) {
        const value = newArr[i + 1];
        let j = i;
        for(; j >= 0; j--) {
            if(value < newArr[j]) {
                newArr[j + 1] = newArr[j];
            } else {
                break;
            }
        }
        newArr[j+1] = value;
    }

    return newArr;
}

module.exports = {
    insertSort
}