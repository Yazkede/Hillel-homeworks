var questOne = +prompt("Сколько лет?");
var questTwo = confirm("Куришь?");
if (questOne < 18 && questTwo === false) alert("Так держать!");
else if (questOne < 18 && questTwo === true) alert("Маме раскажу");
else if (questOne > 18 && questTwo === false) alert("Молодец, и не надо");
else alert("Ну и зря");
