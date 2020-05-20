
function sorting(arr,type) {

    let result = type === 'asc' ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
    return result;
}

console.log(sorting([14, 7, 17, 6, 8],'asc'))
