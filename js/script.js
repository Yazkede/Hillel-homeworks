//Задача№1=========================================================================================

function rgb(red, green, blue) {
    if (red === undefined) {
        red = 0;
    }
    if (green === undefined) {
        green = 0;
    }
    if (blue === undefined) {
        blue = 0;
    }
    let result = "rgb(" + red + ", " + green + ", " + blue + ")";
    return result;
}
console.log(rgb(13, 115, 48));
console.log(rgb(13, 115));
console.log(rgb(13));
console.log(rgb());

//Задача№2=========================================================================================

function words(d) {
    if (d === 1 ||
        d === 21 ||
        d === 31 ||
        d === 41) {
        return d + " товар";
    } else if (d >= 2 && d <= 4 ||
        d >= 22 && d <= 24 ||
        d >= 32 && d <= 34 ||
        d >= 42 && d <= 44) {
        return d + " товара";
    } else if (d == 0 ||
        d >= 5 && d <= 20 ||
        d >= 25 && d <= 30 ||
        d >= 35 && d <= 40 ||
        d >= 45 && d <= 50) {
        return d + " товаров";
    } else if (d === undefined) {
        return "0 товаров";
    }
}
console.log(words());
console.log(words(1));
console.log(words(3));
console.log(words(8));
console.log(words(17));
console.log(words(21));
console.log(words(34));
console.log(words(49));
