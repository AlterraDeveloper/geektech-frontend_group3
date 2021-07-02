//DOM - Document Object Model
var wrapper = document.getElementsByClassName("wrapper")[0];
var button = wrapper.querySelector("#button");
var body = document.querySelector("body");
var colorComponent = document.getElementById("color");

button.addEventListener("click", getColorComponent);
body.style.background = colorComponent.innerText;
// button.innerText = "НАжми меня";
// button.style.background = "red";

// var list = document.querySelector("#list");
// var names = ["Aijan", "Alihan", "Kutman", "Rasul", "Nazira"];
// var listItems = names.map(function (name) {
//   //создание нового элемента
//   var li = document.createElement("li");
//   li.innerText = name;
//   return li;
// });
// listItems.forEach(function (li) {
//   list.appendChild(li);
// });
// list.children[3].style.color = "#00AAFF";
// list.children[3].innerText = list.children[3].innerText + " - Online";

// setTimeout(function () {
//   //удаление элемента со страницы
//   list.removeChild(list.children[3]);
// }, 3000);

function getColorComponent() {
  "".padStart();
  var red = get16BaseString(getRandomInRange(0, 255)).padStart(2, "0");
  var green = get16BaseString(getRandomInRange(0, 255)).padStart(2, "0");
  var blue = get16BaseString(getRandomInRange(0, 255)).padStart(2, "0");
  var colorHex = "#" + red + green + blue;
  colorHex = colorHex.toUpperCase();
  colorComponent.innerText = colorHex;
  body.style.background = colorHex;
}

function get16BaseString(number) {
  return number.toString(16);
}

function getRandomInRange(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
