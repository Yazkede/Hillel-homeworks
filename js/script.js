//1способ===========================================================================================

function isLannisterSoldier(colorOfArmor, shield) {
    if ((colorOfArmor === "red" && shield === null) || (shield === "lion")) {
        return console.log("true");
    } else return console.log("false");
}
isLannisterSoldier("red", null);
isLannisterSoldier("red", "lion");
isLannisterSoldier("red", "dog");
isLannisterSoldier("blue", null);
isLannisterSoldier("green", "lion");

//2способ===========================================================================================

function isLannisterSoldier() {
    let colorOfArmor = prompt("Какой цвет доспехов?");
    let shield = confirm("Щит есть?");
    let imageOnShield;
    switch (shield) {
        case true: imageOnShield = prompt("Что изображено на щите?");
            break;
        case false: break;
    }
    if ((colorOfArmor === "red" && shield === false) ||
        (imageOnShield === "lion") ||
        (colorOfArmor === "red" && imageOnShield === "lion")) {
        return alert("It's Lannister!");
    } else return alert("It's Not Lannister!");
}
isLannisterSoldier();