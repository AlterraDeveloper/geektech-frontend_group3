function CheckHomeWork(
  student,
  homeworkNumber,
  checkAction,
  editor = "Notepad",
  isOnline = false
) {
  if (!homeworkNumber) {
    sendEvilMessage();
    return;
  }
  if (Array.isArray(homeworkNumber)) {
    if (homeworkNumber.length === 0) {
      sendEvilMessage();
      return;
    } else {
      for (var hwNum of homeworkNumber) {
        CheckHomeWorkSimple(student, hwNum, editor, isOnline); //Recursion
      }
    }
  } else {
    CheckHomeWorkSimple(student, homeworkNumber, editor, isOnline);
  }
}
//Hoisting
// CheckHomeWork2("Alihan", 5);

//function expression - функциональное выражение
var sendEvilMessage = function () {
  console.log("you don't send homework");
};

//function declaration - определение функции

//function declaration - определение функции
function CheckHomeWorkSimple(
  student,
  homeworkNumber,
  checkAction, //callback - функция обратного вызова
  editor = "Notepad",
  isOnline = false
) {
  //   if (!homeworkNumber) {
  //     sendEvilMessage();
  //     return;
  //   }
  //   if (Array.isArray(homeworkNumber)) {
  //     if (homeworkNumber.length === 0) {
  //       sendEvilMessage();
  //       return;
  //     } else {
  //       for (var hwNum of homeworkNumber) {
  //         CheckHomeWork(student, hwNum, editor, isOnline); //Recursion - Рекурсивный вызов
  //       }
  //     }
  //   } else {
  console.log(isOnline ? "ONLINE!!!" : "OFFLINE!!!");
  var doneHws = [1, 2, 3];

  console.log(`Download zip archive of ${student}`);
  console.log("Extract zip archive");
  console.log(`Open folder with ${editor}`);
  checkAction();
  console.log("Check homework " + homeworkNumber);
  var isHomeworkCorrect = doneHws.includes(homeworkNumber);
  if (isHomeworkCorrect) {
    console.log("Answer that homework correct");
    console.log(`Write mark in google sheet for ${student}`);
  } else {
    console.log(`Write comments for ${student}`);
  }
  console.log("Delete folder and archive");
  console.log("---------------------------------------------");
  //   }
}

// CheckHomeWork("Madiarov Rasul");
// var result = CheckHomeWork("Kanat", 3, "WebStorm", true);
// console.log("---------------------------------------------");
// CheckHomeWork("Nazira Kydyralieva", 2);
// console.log("---------------------------------------------");
// CheckHomeWork("Kutman Ishenbai uulu", 5);

// function makeTriangle(number, sym = "*") {
//   result = "";
//   for (var i = 0; i < number; i++) {
//     result += sym.repeat(i + 1) + "\n";
//   }
//   return result;
// }

// function sum(a, b) {
//   return a + b;
// }

// console.log(makeTriangle(4, "#"));
// console.log(makeTriangle(2, "$$"));
// console.log(makeTriangle(5));
// console.log(sum(5, 20));

function checkLight() {
  console.log("Я проверил домашку так себе, не глядя))");
}

function checkStrict() {
  console.log(
    "Эту домашку я проверял очень тщательно, буквально вчитывался в каждую строчку"
  );
}

// CheckHomeWorkSimple("Alihan", 5, checkLight);
// CheckHomeWorkSimple("Назира", 2, checkStrict);
// CheckHomeWorkSimple("Rasul", 2, function () {
//   //anonymous function call - вызов анонимной функции
//   console.log("Я проверил эту домашку через гитхаб");
// });

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var squares = [];
var doubles = [];
var negatives = [];
console.log(numbers);
// numbers.forEach(function (number) {
//   squares.push(number * number);
// });
// numbers.forEach(function (number) {
//   doubles.push(number * 2);
// });
// numbers.forEach(function (number) {
//   negatives.push(-number);
// });

//map, filter, reduce

var squares = numbers.map(function (number) {
  return number ** 2;
});
var doubles = numbers.map(function (number) {
  return number * 2;
});
var negatives = numbers.map(function (number) {
  return -number;
});
console.log(squares);
console.log(doubles);
console.log(negatives);

var evens = numbers.filter(function (number) {
  return number % 2 === 0;
});
var greaterThan5 = numbers.filter(function (number) {
  return number >= 5;
});
console.log(evens);
console.log(greaterThan5);
var sum = numbers.reduce(function (result, number) {
  result += number;
  return result;
}, 0); // 1+2+3+4+5+6+7+8+9
console.log(sum);

function makeSquare(number) {
  return number ** 2;
}

var sumEvens = numbers
  .map(makeSquare)
  .filter(function (number) {
    return number % 2 === 0;
  })
  .reduce(function (result, number) {
    result += number;
    return result;
  }, 0);
console.log(sumEvens);
