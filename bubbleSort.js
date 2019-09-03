 function bubbleSort (arr) {
    if(Object.prototype.toString.call(arr) !== '[object Array]') return undefined;

    const newArr = [...arr];
    const length = newArr.length;

    if(length === 1) return newArr;

    for(let i = 0; i < length; i++) {
        let flag = false;
        for(let j = 0; j < length - 1; j++) {
            if(newArr[j] > newArr[j+1]) {
                flag = true;
                const temp = newArr[j];
                newArr[j] = newArr[j+1];
                newArr[j+1] = temp;
            }
        }
        if(!flag) break;
    }
    return newArr;
}

module.exports = {
    bubbleSort,
}