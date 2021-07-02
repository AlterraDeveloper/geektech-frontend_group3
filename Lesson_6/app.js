//ES6 - EcmaScript 2016

//syntax sugar - синтаксический сахар

//let const
// var _var;
// var _var2;
// {
//   _var = 5;
//   let _let = 5;
//   const _const = 5;
//   {
//     _var2 = 10;
//     console.log("let", _let);
//     console.log("const", _const);
//   }
// }
// console.log(_var);
// console.log(_var2);

// function f() {
//   var _var = 5;
//   let _let = 5;
//   const _const = 5;
//   console.log(_var);
//   console.log(_let);
//   console.log(_const);
// }
// console.log(_var);
// console.log(_let);
// console.log(_const);

// console.log(this);

// var user = {
//   login: "qwerty",
//   password: "123",
//   auth: function () {
//     console.log(user.login);
//     console.log(user.password);
//   },
// };

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let _let2 = 25;
// const _const2 = 25;
// _let2 = 45;
// console.log("let2", _let2);

// const user2 = {
//   login: "alterradeveloper",
//   password: "123456",
// };

// user2.login = "qwerty";
// user2.password = "6543211";

// console.log("User:", user2);

// const _undefined = undefined
// _undefined = null;

//Arrow Functions - Стрелочные функции

// let isEven = function (num) {
//   return num % 2 === 0;
// };

// let isEvenArrow = num => num % 2 === 0;

// console.log([1, 2, 3, 4, 5, 6].filter(isEvenArrow));

let tasks = [
  {
    name: "Изучить javascript", //описание задачи
    duration: 30, //длительность задачи в днях
    priority: 4, //приоритетность задачи, чем больше цифра тем выше приоритет
  },
  {
    name: "Сделать домашнее задание на курсах",
    duration: 2,
    priority: 3,
  },
  {
    name: "Похвалить себя",
    duration: 1,
    priority: 6,
  },
  {
    name: "Похвалить преподавателя))",
    duration: 1,
    priority: 7,
  },
  {
    name: "Принять душ",
    duration: 0.2,
    priority: 2,
  },
  {
    name: "Помочь другу переустановить винду",
    duration: 1,
    priority: 1,
  },
  {
    name: "Понять что функции в javascript  это очень просто",
    duration: 5,
    priority: 4,
  },
];

// const totalDur = tasks
//   .map((task) => task.duration)
//   .reduce((totalDur, duration) => (totalDur += duration), 0);

// console.log(totalDur);

// var model = "ROQ 5";
// var vendor = "Asus";

// const laptop = {
//   vendor: "DELL",
//   model: "Vostro",
//   buy: function () {
//     console.log("FUNCTION");
//     console.log(this);
//     console.log("You purchased laptop:", this.vendor, this.model);
//     console.log("--------------------------------");
//   },
//   buyArrow: () => {
//     console.log("ARROW");
//     console.log(this);
//     console.log("You purchased laptop:", this.vendor, this.model);
//     console.log("--------------------------------");
//   },
// };

//call, bind, apply

// function logThis(a, b, c) {
//   console.log(this);
//   console.log("args: ", a, b, c);
// }

// laptop.buy();
// laptop.buyArrow.call(laptop);

// logThis.call(laptop, 5, 10, 15);
// logThis.apply(laptop, [777,999,222]);
// const newLogThis = logThis.bind(laptop);
// newLogThis();

// const numbers = [4, 78, 101, 58, 41, 0, 14];
// console.log("Max numbers:", Math.max.apply(null, numbers));

// const button = document.getElementById("button");

// button.onclick = function () {
//   console.log(this);
//   console.log(this.innerText);
// };

// button.addEventListener("click", () => {
// });

//REST/SPREAD operator

//REST
function getItems(userName, bucketID, ...items) {
  for (const item of items) {
    console.log(`${userName} purchased ${item} into Bucket ${bucketID}`);
  }
}

getItems("Eugene Kiselev", 5, "bike", "T-shirt", "pen");
getItems("Max Ivanov", 6);

const numbers = [4, 78, 101, 58, 41, 0, 14];
console.log("Max numbers:", Math.max(...numbers)); //SPREAD - Destructuring

const [task, , thirdTask] = [...tasks];
const { name: thirdTaskName } = thirdTask;
console.log(thirdTaskName);

// const taskDuration = task.duration;
// const taskPriority = task.priority;
const { duration, priority } = task;
console.log(duration, priority);

function fn({ document }) {
  console.log(document.getElementById("button"));
}

fn(window);
