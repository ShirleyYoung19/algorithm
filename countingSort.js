
function countingSort(arr) {
    if(Object.prototype.toString.call(arr) !== '[object Array]') { return undefined};
    const length = arr.length;

    if(length <= 1) return arr;

    //获得最大值
    let max = arr[0];
    for(let i = 0; i < length; i += 1) {
        if(max < arr[i]) {
            max = arr[i];
        }
    }

    //生成长度为 max + 1 的空数组；
    const c = [];
    for(let i = 0; i <= max; i += 1) {
        c[i] = 0;
    }

    // 将每个值对应的个数填写到c中
    for(let i = 0; i < length; i += 1) {
        c[arr[i]] += 1;
    }

    // 将c中的数值计算成累加的和

    for(let i = 1; i <= max; i += 1) {
        c[i] = c[i - 1] + c[i];
    }

    // 生成temp数组
    const temp = [];

    // 将对应的数值填写到temp中
    for(let i = length -1; i >=0; i -= 1) {
        const index = c[arr[i]] -1;
        temp[index] = arr[i];
        c[arr[i]] -= 1;
    }

    return temp;
}

module.exports = {
    countingSort,
}