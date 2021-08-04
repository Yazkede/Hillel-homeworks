var distanceKm = +prompt("Введите расстояние в километрах", 0);
var distanceFoot = +prompt("Введите расстояние в футах", 0);
// Функция высчитывает коэффициент перевода километров в футы.
function converter() {
    var metersInKm = 1000;
    var metersInFoot = 0.305;
    // Округляем до ближайшего целого.
    var result = Math.round(metersInKm / metersInFoot);
    return result;
}
console.log(converter());
if ((distanceKm * converter()) > distanceFoot) {
    alert("Расстояние в километрах больше, а расстояние в футах меньше");
} else if ((distanceKm * converter()) < distanceFoot) {
    alert("Расстояние в футах больше, а расстояние в километрах меньше");
} else alert("Расстояния равны");

