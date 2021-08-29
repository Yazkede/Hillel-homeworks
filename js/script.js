//циклы===================================================================================

function max(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    if (arr.length == 0) {
        return -1;
    }
    return max;
}
console.assert(max([8]) === 8, 'one element test, must return 8');
console.assert(max([8, 17]) === 17, '2 elements test, must return 17');
console.assert(max([1, 8, 37, 5, 17]) === 37, '5 elements test, must return 37');
console.assert(max([]) === -1, 'empty array test, must return -1');

//рекурсия================================================================================

function max(arr) {
    if (arr.length == 1) {
        return arr[0];
    }
    if (arr.length == 0) {
        return -1;
    }
    let maxOne = arr[0];
    arr.shift();
    let maxTwo = max(arr);
    if (maxOne > maxTwo) {
        return maxOne;
    }
    return maxTwo;
}
console.assert(max([8]) === 8, 'one element test, must return 8');
console.assert(max([8, 17]) === 17, '2 elements test, must return 17');
console.assert(max([1, 8, 37, 5, 17]) === 37, '5 elements test, must return 37');
console.assert(max([]) === -1, 'empty array test, must return -1');
