/* Функция должна найти и вернуть максимальный элемент в массиве.
 * В случае пустого массива вернуть: -1
    *
 * Реализовать функцию двумя способами: через циклы и через рекурсию
    *
 * @param { [] } input
    * @returns { number }
 */

//циклы===================================================================================

function max(input) {
    let maxItem = 0;
    for (let i = 0; i < input.length; i++) {
        if (input.length == 1) {
            maxItem = input[i];
        } else if (input[i] > input[i + 1] && input[i] > maxItem) {
            maxItem = input[i];
        } else if (input[i] > input[i + 1] && input[i] < maxItem) {
            break;
        } else if (input[i] < input[i + 1] && input[i + 1] > maxItem) {
            maxItem = input[i + 1];
        } else if (input[i] < input[i + 1] && input[i + 1] < maxItem) {
            break;
        }
    }
    if (input.length == 0) {
        maxItem--;
    } return maxItem;
}
console.assert(max([8]) === 8, 'one element test, must return 8');
console.assert(max([8, 17]) === 17, '2 elements test, must return 17');
console.assert(max([1, 8, 37, 5, 17]) === 37, '5 elements test, must return 37');
console.assert(max([]) === -1, 'empty array test, must return -1');

//пытался сделать рекурсию, но получилась не рекурсия=====================================

function max(input) {
    let maxItem = 0;
    input.sort((a, b) => {
        if (a > b && a > maxItem) {
            maxItem = a;
        } else if (b > maxItem) {
            maxItem = b;
        }
    });
    if (input.length == 0) {
        return -1;
    } else if (input.length == 1) {
        return input[0];
    } else return maxItem;
}
console.assert(max([8]) === 8, 'one element test, must return 8');
console.assert(max([8, 17]) === 17, '2 elements test, must return 17');
console.assert(max([1, 8, 37, 5, 17]) === 37, '5 elements test, must return 37');
console.assert(max([]) === -1, 'empty array test, must return -1');

//рекурсия================================================================================

const max = (input) => {
    let maxItem = 0;
    for (let i = 0; i < input.length; i++) {
        if (Array.isArray(input[i])) {
            input[i] = max(input);
        } else if (input[i] > maxItem) {
            maxItem = input[i];
        }
    }
    if (input.length == 0) {
        return -1;
    }
    return maxItem;
};
console.assert(max([8]) === 8, 'one element test, must return 8');
console.assert(max([8, 17]) === 17, '2 elements test, must return 17');
console.assert(max([1, 8, 37, 5, 17]) === 37, '5 elements test, must return 37');
console.assert(max([]) === -1, 'empty array test, must return -1');