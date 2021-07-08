// import Animal from "./FuncModels/Animal";
// import Lion from "./FuncModels/Lion";
// import Animal from "./Models/Animal";
// import { Cat, Dog } from "./Models/Cat";
// import Client from "./Models/Client";
// import Lion from "./Models/Lion";
// import Pet from "./Models/Pet";

// const animal = new Animal();
// console.log(animal);
// animal.makeVoice();

// const lion = new Lion(15);
// console.log(lion);
// lion.makeVoice();

// const pet = new Pet("Barsik");
// console.log(pet);
// pet.makeVoice();

// const cat = new Cat("Ryzhik");
// try {
//   cat.name = "";
// } catch (error) {
//   console.warn("Cat error:", error);
// } finally {
//   cat.name = "...";
// }
// console.log("Cat's name:", cat.name);
// cat.makeVoice();

// const dog = new Dog("Sharik", "Ivan", "spaniel");
// console.log(dog);
// dog.makeVoice();

// console.log(lion.toString());
// var user = {
//     login: "qwe",
//     password:"123"
// }

// var user2 = Object.create(user)
// console.log(user.login);
// console.log(user2.login);

// const animals = [
//   new Cat("Murka", "Scotland"),
//   new Animal(),
//   new Lion(),
//   new Pet("..."),
//   new Dog("Rex", "commisar", "ovcharka"),
// ];

//Пример полиморфизма
// animals.forEach((animal) => animal.makeVoice());

// Array.prototype.first = function () {
//   return this[0];
// };

// Array.prototype.last = function () {
//   return this[this.length - 1];
// };

// console.log(animals.first());
// console.log(animals.last());

// const client = new Client("Ivanov", "Ivan", "Ivanovich");
// console.log(client.fullname);

// const list = document.getElementById("list");
// Array.from(list.children).forEach((child, index) => (child.innerText = index + 1));

// Lion.Roar()

// let number = "5"
// console.log(typeof number);
// number = Number.parseInt(number)
// console.log(typeof number);

const Animal = function () {};

Animal.prototype.makeVoice = function () {
  console.log("This animal make voice");
};

const Lion = function (prideCount) {
  Animal.apply(this, arguments);
  this.prideCount = 12;
  //   this.makeVoice = function () {
  //     console.log("Lion says raaarrrrr");
  //   };
};

Lion.prototype.constructor = Lion;
Lion.prototype = Object.create(Animal);
Lion.prototype.makeVoice = function () {
  Animal.prototype.makeVoice();
  console.log("Lion says raaarrrrr");
};

new Animal().makeVoice();
new Lion(15).makeVoice();
