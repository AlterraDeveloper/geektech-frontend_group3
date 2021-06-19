// console.log("1");
// console.log("1", 2);
// console.log("1", 2, true);
// console.log("1", 2, true, [1,2,3,4]);

//функции с переменным числом аргументов
function sum() {
  console.log("First arg:", arguments[0]);
  var sum = 0;
  Array.from(arguments).forEach((arg) => {
    if (typeof arg === "number") {
      sum += arg;
    }
  });
  return sum;
}

// console.log(sum(1, 5, "dsbviiuen"));
// console.log(sum(7, 5, 4, 5));
// console.log(sum(1, 5, 4, 5, 10));
// console.log(sum());

//Замыкания(closures)
//High-order functions - функции высшего порядка
function adder(number) {
  return function (anotherNumber) {
    return number + anotherNumber;
  };
}

function discount(discountInPercents) {
  var discount = discountInPercents / 100;
  return function (price) {
    return price - price * discount;
  };
}

var add2 = adder(2);
var add10 = adder(10);

// console.log(add2(10));
// console.log(add2(15));
// console.log(add2(0));
// console.log(add10(15));

var vipDiscount = discount(15);
var pensioneerDiscount = discount(5);
var promokodDiscount = discount(10);

// console.log(vipDiscount(1000));
// console.log(pensioneerDiscount(1000));
// console.log(promokodDiscount(1000));
// console.log(promokodDiscount);

function prepender(prefix) {
  return function (text) {
    return prefix + text;
  };
}

function appender(suffix) {
  return function (text) {
    return text + suffix;
  };
}

var httpsPrepender = prepender("https://");
var httpPrepender = prepender("http://");

var ruDomainAppender = appender(".ru");
var comDomainAppender = appender(".com");
var uaDomainAppender = appender(".ua");
var kgDomainAppender = appender(".kg");
var kzDomainAppender = appender(".kz");

// var yandexSite = "yandex";
// yandexSite = httpsPrepender(yandexSite);
// yandexSite = ruDomainAppender(yandexSite);
// console.log(yandexSite);
// var googleSite = "google";
// googleSite = httpPrepender(googleSite);
// googleSite = kgDomainAppender(googleSite);
// console.log(googleSite);

var me = {
  name: "Eugene",
  surname: "Kiselev",
  age: 10,
  "Eye color": "brown",
  CheckHomeWork: function (hwNum, student) {
    console.log(`I'm ${this.name}, check homework #${hwNum} of ${student}'s`);
  },
};

console.log(me.name);
console.log(me["Eye color"]);
// me.CheckHomeWork(5, "Alihan");

//Функция-конструктор
function Laptop(vendor, model, RAM, price) {
  this.vendor = vendor;
  this.model = model;
  this.RAM = RAM;
  this.price = price;
  this.getPrice = function (discountCallback) {
    var self = this;
    discountCallback =
      discountCallback ||
      function () {
        return self.price;
      };
    return discountCallback(this.price);
  };
}

var items = [
  new Laptop("DELL", "Vostro", { size: 8, freq: 1333 }, 60000),
  new Laptop("Asus", "ROQ", { size: 16, freq: 1600 }, 45000),
  new Laptop("Acer", "Aspire", { size: 12, freq: 1600 }, 55000),
  //   {
  //     vendor: "Asus",
  //     model: "ROG",
  //     CPU: "AMD Ryzen 9000",
  //     RAM: {
  //       size: 16,
  //       freq: 2500,
  //     },
  //     Disk: {
  //       type: "SSD",
  //       capacity: "1000 Gb",
  //     },
  //     price: 55000,
  //   },
  //   {
  //     vendor: "Acer",
  //     model: "Aspire",
  //     CPU: "Intel Core i7-5g",
  //     RAM: {
  //       size: 32,
  //       freq: 1333,
  //     },
  //     Disk: {
  //       type: "SSD",
  //       capacity: "500 Gb",
  //     },
  //     price: 45000,
  //   },
];

function laptopFilter(type) {
  var filterArgs = arguments;
  switch (type) {
    case "byRAM":
      return function (laptop) {
        return laptop.RAM.size >= filterArgs[1];
      };
    case "byVendor":
      return function (laptop) {
        return laptop.vendor.toLowerCase() === filterArgs[1].toLowerCase();
      };
    case "byPrice":
      return function (laptop) {
        return laptop.price >= filterArgs[1] && laptop.price <= filterArgs[2];
      };

    default:
      return function (laptop) {
        return true;
      };
  }
}

var ramFilter = laptopFilter("byRAM", 8);
var acerFilter = laptopFilter("byVendor", "aCeR");
var mediumPriceFilter = laptopFilter("byPrice", 30000, 55000);
var filteredItems = items.filter(acerFilter);
var selectedLaptop = items
  .filter(acerFilter)
  .filter(mediumPriceFilter)
  .filter(ramFilter)[0];

//добавление свойств в объект
selectedLaptop.color = "red";
selectedLaptop["Physical size"] = "1900x1200x500";
//удаление свойств из объекта
delete selectedLaptop["Physical size"];
delete selectedLaptop.getPrice;
console.log(selectedLaptop);
// console.log(selectedLaptop.getPrice());

// var array = {
//   0: 1,
//   1: 2,
//   2: 3,
// };
var array = [1, 2, 3];
console.log(array);

var string = "items";
for (const prop in string) {
  console.log(prop, "->", string[prop]);
}
