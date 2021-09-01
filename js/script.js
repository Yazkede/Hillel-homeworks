// --1-- Задача. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе
let arr1 = ['a', 'b', 'c'];
let arr2 = [1, 2, 3];
console.log(arr1.concat(arr2));

// --2-- Задача. Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
let arr = ['a', 'b', 'c'];
arr.push(1, 2, 3);
console.log(arr);

// --3-- Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(arr1.concat(arr2));

// --4-- Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
let arr = [1, 2, 3];
console.log(arr.reverse());

// --5-- Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);

// --6-- Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
let arr = [1, 2, 3];
arr.unshift(4, 5, 6);
console.log(arr);

// --7-- Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
var arr = ['js', 'css', 'jq'];
document.write(arr[0]);

// --8-- Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
var arr = ['js', 'css', 'jq'];
document.write(arr[2]);

// --9-- Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3]
let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1.slice(0, 3);
console.log(arr2);

// --10-- Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1.slice(3, 5);
console.log(arr2);

// --11-- Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
let arr = [3, 4, 1, 2, 7];
console.log(arr.sort());

// --12-- Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
let obj = {
    js: 'test',
    jq: 'hello',
    css: 'world',
}
console.log(Object.keys(obj));

// --13-- Написать скрипт, который сделает полную копию исходного объекта с использованием рекурсии для вложенных объектов.
//Исходный и полученный результат вывести в консоль.
const info = {
    formatted_address: "Washington Square, New York, NY 10012, Сполучені Штати Америки",
    geometry: {
        location: {
            lat: 40.7308838,
            lng: -73.997332
        },
        viewport: {
            northeast: {
                lat: 40.7333674,
                lng: -73.99379435000002
            },
            southwest: {
                lat: 40.72847220000001,
                lng: -74.00132615
            }
        }
    },
    name: "Washington Square Park"
};
const copyInfo = getCopyObj(info);
function getCopyObj(info) {
    const newObj = {};
    for (key in info) {
        if (typeof info[key] === 'Object') {
            newObj = getCopyObj(info);
        } else {
            newObj[key] = info[key];
        }
    }
    return newObj;
}
const copyInfoNew = JSON.parse(JSON.stringify(info)); //глубокое копирование
copyInfo.geometry.viewport.southwest.lng = 777;
copyInfo.formatted_address = "Central park";
copyInfoNew.geometry.viewport.northeast.lng = 333;
copyInfoNew.formatted_address = "Ukraine";
console.log(info);
console.log(copyInfo);
console.log(copyInfoNew);

// --14-- создать новый массив, который будет содержать только имена мастеров из Hufflepuff. 
//эту же задачу можно сделать и через map+filter, но в плане производительности здесь лучше reduce
const wizards = [
    {
        name: 'Harry Potter',
        house: 'Gryfindor'
    },
    {
        name: 'Cedric Diggory',
        house: 'Hufflepuff'
    },
    {
        name: 'Tonks',
        house: 'Hufflepuff'
    },
    {
        name: 'Ronald Weasley',
        house: 'Gryfindor'
    },
    {
        name: 'Hermione Granger',
        house: 'Gryfindor'
    }];

//1способ==========================================================================================
const arrayOfNames = [];
const createNewArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].house == 'Hufflepuff') {
            arrayOfNames.push(array[i].name);
        }
    }
    return arrayOfNames;
}
console.log(createNewArray(wizards));

//2способ==========================================================================================
const getArrayOfNames = (array) => {
    const arrayOfNames = [];
    let i = 0;
    array.reduce(function () {
        if (array[i].house == 'Hufflepuff') {
            arrayOfNames.push(array[i].name);
        }
        i++;
    })
    return arrayOfNames;
}
console.log(getArrayOfNames(wizards));

