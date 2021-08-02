var distanceKm = +prompt("Введите расстояние в километрах");
var distanceFoot = +prompt("Введите расстояние в футах");
// Функция высчитывает коэффициент перевода километров в футы.
function converter() {
    var metersInKm = 1000;
    var footsInMeter = 0.305;
    var result = Math.round(metersInKm / footsInMeter);
    return result;
}
console.log(converter());
if ((distanceKm * converter()) > distanceFoot) {
    alert("Расстояние в км больше");
} else if ((distanceKm * converter()) < distanceFoot) {
    alert("Расстояние в футах больше");
} else alert("Расстояния равны");

