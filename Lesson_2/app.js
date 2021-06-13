var array = ["a", "b", "16", "dgeuyfs", "c", "d", "1", "c", "d", "e"];
//            0    1    2    3    4
// console.log(array.length);
//цикл с счетчиком
// for (var i = 0, counterC = 0; i < array.length; i++) {
//   if (array[i] === "c") {
//       counterC++
//       if(counterC == 3) break
//   }
//   console.log(array[i].toUpperCase());
// }

var categories = ["shoes", "accesories", "clothes"];
// var categories = ["aaaaaaa", "bbbbbbbbb", "ccccccccc"];

// for (let i = 0; i < categories.length; i++) {
//   if (categories[i] === "accesories") continue;
//   console.log("WOW!! Sales 50%% for", categories[i]);
// }

// for (var i = 0; i < categories.length; i++) {
//   var category = categories[i];
//   var newWord = "";
//   for (var j = 0; j < category.length; j++) {
//     var symbol = category[j];
//     // if (j % 2 === 0) {
//     //   newWord += symbol.toUpperCase();
//     // } else {
//     //   newWord += symbol;
//     // }
//     newWord += j % 2 === 0 ? symbol.toUpperCase() : symbol;
//   }
//   console.log(newWord);
// }

//Тернарный оператор
// var isProgrammer = false;
// console.log("He is programmer: ", isProgrammer ? "Yes" : "No");

// for (var element of categories) {
//     //   console.log(element);
//     for (const symbol of element) {
//         console.log(symbol);
//     }
// }

//Беконечный цикл
//for(;;){}
//while(true){}

//цикл с предусловием
// i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// var users = ["Max", "Ivan", "Ksenya"];

// //цикл с постусловием
// var name;
// var isAuthorized;
// do {
//   if (typeof isAuthorized !== "undefined" && !isAuthorized) {
//     console.log("NOT AUTHORIZED");
//   }
//   var name = prompt("What is your name?");
//   isAuthorized = users.includes(name);
// } while (isAuthorized === false);
// alert("Hello, " + name + ", you are user of this site!");

// var emptyArray = [];

// emptyArray.push("a", "b")
// emptyArray.push("c")

// emptyArray.reverse()

// for (const item of emptyArray) {
//   console.log(item);
// }

//удаление дубликатов из массива
// var numbers = [1, 1, 2, 2, 2, 3, 3, 3, 4, 4];
// console.log(Array.from(new Set(numbers)));
