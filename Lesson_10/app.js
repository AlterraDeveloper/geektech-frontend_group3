//Exceptions - Исключения

// throw new Error("Ошибка просто так)))");

class PersonAgeError extends Error {
  constructor() {
    super("Возраст задается целым положительным числом");
  }
}

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  #age;

  get age() {
    return this.#age;
  }

  set age(value) {
    if (typeof value !== "number") throw new PersonAgeError();
    if (value < 0 || value > 100) throw new RangeError();
    this.#age = value;
  }
}

// let person = new Person("Ivan", "Ivanov");

// try {
//   var obj = {};
//   obj.innerObj.make();
// person.age = -5;
// person.age = "пять лет";
// } catch (personAgeError) {
//   console.log(personAgeError);
//   if (personAgeError instanceof PersonAgeError) {
//     console.warn("Возраст задается целым положительным числом");
//   } else if (personAgeError instanceof RangeError) {
//     console.warn("Возраст должен быть больше нуля и меньше ста");
//   } else {
//     console.warn("Неизвестная ошибка");
//   }
// switch (errorType) {
//   case "TypeError":
//     console.warn("Возраст задается целым положительным числом");
//     break;
//   case "RangeError":
//     console.warn("Возраст должен быть больше нуля и меньше ста");
//     break;
//   default:
//     console.warn("Неизвестная ошибка");
//     break;
// }
// }

// function Nuller() {
//   for (const key in this) {
//     if (Object.hasOwnProperty.call(this, key)) {
//       this[key] = null;
//     }
//   }
// }

// let car = {
//   model: "Fit",
//   vendor: "Honda",
//   engine: {
//     volume: 2.2,
//     power: 250,
//     countOfPiston: 4,
//   },
// };

// console.log(car);
// Nuller.call(car);
// try {
//   console.log(`Honda Fit power is ${car.engine.power}`);
// } catch (codeError) {
//   console.log(codeError);
//   console.log("Sorry, you code is not working(((");
// }
//  finally {
//   console.log("Learn JS more and try again)))");
// }

// car = null;
//null coalescing operator
// console.log(`Honda Fit power is ${car?.engine?.power}`);
//если null coalescing operator не поддерживается, то пишем вот так
// console.log(
//   `Honda Fit power is ${
//     car === null
//       ? undefined
//       : car.engine === null
//       ? undefined
//       : car.engine.power
//   }`
// );

//Регулярные выражения - Regular expressions

const kgPhoneInput = document.getElementById("kgPhoneInput");
const kgPhoneValidationText = document.getElementById("kgPhoneValidationText");
const checkBtn = document.getElementById("checkBtn");

function Validator(validationBlock, validationCallBack) {
  const validationBlockName = validationBlock.dataset.name;
  const input = validationBlock.querySelector(`#${validationBlockName}Input`);
  const validationText = validationBlock.querySelector(
    `#${validationBlockName}ValidationText`
  );
  validationText.classList = [];
  if (validationCallBack(input.value)) {
    validationText.innerText = "ok";
    validationText.classList.add("ok");
  } else {
    validationText.innerText = "validation error";
    validationText.classList.add("error");
  }
}

function validateKgPhone(phone) {
  // +996 xxx xx-xx-xx
  return /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/.test(phone);
}

function validateSalary(salary) {
  //1000 c или 1000 $
  return /^\d+ [$c]{1}$/.test(salary);
}

checkBtn.addEventListener("click", () => {
  const validationBlocks = document.querySelectorAll(".value");
  [...validationBlocks].forEach((block) => {
    let validationFn;
    switch (block.dataset.name) {
      case "kgPhone":
        validationFn = validateKgPhone;
        break;
      case "salary":
        validationFn = validateSalary;
        break;
      default:
        validationFn = () => true;
        break;
    }
    Validator(block, validationFn);
  });
  //   setTimeout(() => {
  //     kgPhoneValidationText.classList = "";
  //     kgPhoneValidationText.innerText = "";
  //   }, 4000);
});
