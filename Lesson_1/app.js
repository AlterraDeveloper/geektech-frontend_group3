/*
Это скрипт 
к первому уроку
по Javascript

*/

/*
Я
многострочный
комментарий
*/

//я однострочный комментарий
// console.log("Hello world");

// var name = "Eugene";
// var Name = "Eugene";

// var myNameAndSurname = "Eugene Kiselev"; //Camel case

// var name1 = "";
// var name2 = "";
// console.log("Your name is ", name);

// var name = "Max";

// console.log("My name is ", Name);
// console.log("Your name is ", name);

//Data types

// 1) number

// var age = 30;

// console.log(age);
// console.log(age + 5);
// console.log(age - 5);
// console.log(age * 5);
// console.log(age / 5);
// console.log(age % 7);
// console.log(age ** 2);
// console.log(age ** 3);
// console.log(-age);

// var inf1 = 5 / 0;
// var inf2 = Infinity;

// console.log(isFinite(5));
// console.log(isFinite(inf1));

// var nan = age * "My name";
// console.log("NaN example: ", nan * 100); //NaN - Not a Number

// console.log("IsNaN() -> " + isNaN(nan));

//2) string
// var name = "Eugene";
// var surname = "Kiselev";
// var fullName = name + " " + surname; //Конкатенация строк
// var age = 25

// console.log(fullName);
// console.log("25" + 5 + 5 +5 );

// //Escaping - Экранирование
// var singer = "John \"Lion\" Lenon"
// var singer = 'John \'Lion\' Lenon'

// console.log(singer);

// var path = "C:\\Program Files\\Vs code\\code.exe"
// console.log(path);

// var comment = 'Ваш продукт хороший...\\nХороший потому что ...'
// console.log(comment);

// 3) Boolean

// var isProgrammer = true;

// console.log(isProgrammer && true && false);
// console.log(isProgrammer || false);
// console.log(!isProgrammer);

//Comparison operators: == === >= <= != !==

// var age = 25;
// var anotherAge = "200";

// console.log("age == anotherAge", age == anotherAge);
// console.log("age === anotherAge", age === anotherAge);
// console.log("age != anotherAge", age != anotherAge);
// console.log("age !== anotherAge", age !== anotherAge);
// console.log("age >= anotherAge", age >= anotherAge);
// console.log("age <= anotherAge", age <= anotherAge);

// 4) Undefined

// var name2;

// console.log(name2 + 5);

// 5) Functions

// function morning(){
//     console.log("Open ref");
//     console.log("Get shower");
//     console.log("Clean teeth");
// }

// function createFrontendProject(){
//     console.log("mkdir folder");
//     console.log("cd folder");
//     console.log("touch index.html");
// }

// morning()
// morning()
// morning()
// createFrontendProject()
// 6) Objects

// var me = {
//   name: "Eugene",
//   surname: "Kiselev",
//   isProgrammer: true,
// };

// var notMe = {
//   name: "Max",
//   surname: "Ivanov",
//   age: 30,
//   hello: function () {
//     console.log("Hello!!!");
//   },
// };
// console.log(me);
// console.log(notMe.hello());

// var number = 10;
// number = number + 1
// number = number - 1
// number += 1
// number -= 1
// number *= 1
// number /= 1
// number++ Increment postfix
// number-- Decrement postfix
// ++number Increment prefix
// --number Decrement prefix

// console.log(number);
// console.log(number);

// var age = 80;
// var isProgrammer = false;

//Conditions
// if (age >= 50 || isProgrammer) {
//   console.log("Здравствуйте, программист");
// } else if (age > 70) {
//   console.log("Здравствуйте, уважаемый");
// } else if (age < 0) {
//   console.log("Досвидания!!!");
// } else {
//   console.log("Привет");
// }

//Truthy
//Falsy: 0 0n "" false null undefined NaN

// var var1;
// if (var1) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

//switch..case

// if (size === "S") {
//   console.log("small");
// } else if (size === "M") {
//   console.log("medium");
// } else if (size === "L") {
//   console.log("large");
// } else {
//   console.log("unknown size");
// }

var size = "e";
switch (size) {
  case "S":
  case "s":
    console.log("small");
    break;
  case "M":
  case "m":
    console.log("medium");
    break;
  case "L":
  case "l":
    console.log("large");
    break;
  default:
    console.log("unknown size");
}
