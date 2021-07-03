// import Task from "./Task";
import ShopItem from "./Models/ShopItem";
import Laptop from "./Models/Laptop";
import Smartphone from "./Models/Smartphone";
// const userName = "Ivan";
// const userSurname = "Ivanov";
// const contactPhone = "+996999111222";

// const getPhone = () => "+996999111222";

// //template string - шаблонная строка
// var text = `Dear ${userName} ${userSurname},
// Your order is ready.
// Please, contact us ${getPhone()}`;

// console.log(text);

// const package = {
//   name: "lesson_7",
//   desciption: "",
//   version: "1.0.0",
//   main: "app.js",
// };

// //JSON -JavaScript Object Notation
// console.log(JSON.stringify(package));

// const task = new Task("learn js", 12, 10);

// console.log(task);

const si = new ShopItem(500);
console.log(si);
const laptop = new Laptop("DELL", "Vostro", 1000);
console.log(laptop.price);
const phone = new Smartphone("Android", 1500);
console.log(phone.price);

// console.log(laptop.getPrice());
// console.log(phone.getPrice());
