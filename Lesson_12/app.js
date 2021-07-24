// let todos = [];

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((data) => {
//     todos = data;
//     console.log(todos);
//   });

//REST API - REpresentational State Transfer Application Programming Interface

//JSON - JavaScript Object Notation
// const todoJson = `{
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
// }`;
//Десериализация (парсинг)
// const todoObject = JSON.parse(todoJson);

// console.log(todoObject);

// const student = {
//   name: "Ivan",
//   surname: "Ivanov",
//   age: 25,
//   skills: ["html5", "css3", "JS"],
// };

// console.log(JSON.stringify(student));

// console.log(
//   JSON.parse(`{
//     "name": "Ivan",
//     "surname": "Ivanov",
//     "age": 25,
//     "skills": [
//         "html5",
//         "css3",
//         "JS"
//     ]
// }`)
// );

//URL - Unified Resource Locator
//URI - Unified Resource Identificator

//https://jsonplaceholder.typicode.com/accounts?number=1541561894984&currency=USD
//https://jsonplaceholder.typicode.com/todos
//протокол://домен.код_страны/ресурс(endpoint)?param1=value1&param2=value2

// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/xml");

// var requestOptions = {
//   method: "POST",
//   headers: myHeaders,
//   body: JSON.stringify({
//     userID: 1561651,
//     currency: "KGS,USD",
//     accountNo: 15615615189789,
//   }),
//   redirect: "follow",
// };

// fetch(
//   "https://jsonplaceholder.typicode.com/accounts?no=15156961891891",
//   requestOptions
// )
//   .then((response) => response.json())
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error", error));

//XHR - XmlHttpRequest
// var data = JSON.stringify({
//   userID: 1561651,
//   currency: "KGS,USD",
//   accountNo: 15615615189789,
// });

// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
//   if (this.readyState === 4) {
//     console.log(this.responseText);
//   }
// });

// xhr.open(
//   "POST",
//   "https://jsonplaceholder.typicode.com/accounts?no=15156961891891"
// );
// xhr.setRequestHeader("Content-Type", "application/json");

// xhr.send(data);

//1xx - info
//2xx - success
//200 - SUCCESS 201 - Created 203
//3xx - redirect (move)
//4xx - errors
//401 - Not Authorized
//404 - Not Found
//5xx - server errors
//501 505

class Country {
  constructor({ name, alpha3Code, capital, region, population, flag }) {
    this.name = name;
    this.code = alpha3Code;
    this.capital = capital;
    this.region = region;
    this.population = population;
    this.flag = flag;
  }

  render() {
    return `
    <article>
      <h1>${this.name}</h1>
      <img
        src="${this.flag}"
        alt=""
        height="150"
        width="250"
      />
      <div class="row">
        <span class="desc">Code: </span>
        <span>${this.code}</span>
      </div>
      <div class="row">
        <span class="desc">Capital: </span>
        <span>${this.capital}</span>
      </div>
      <div class="row">
        <span class="desc">Region</span>
        <span>${this.region}</span>
      </div>
      <div class="row">
        <span class="desc">Population</span>
        <span>${this.population}</span>
      </div>
    </article>
    `;
  }
}

class Loader {
  static render() {
    return `<div class="lds-dual-ring"></div>`;
  }
}

const input = document.querySelector("#search");
const button = document.querySelector("#searchBtn");
const container = document.querySelector("#country");

button.onclick = () => {
  const countryCode = input.value;
  if (countryCode === "") return;
  console.log(countryCode);
  container.innerHTML = Loader.render();

  fetch(`https://restcountries.eu/rest/v2/name/${countryCode}`)
    .then((res) => res.json())
    .then((countries) => {
      container.innerHTML = new Country(countries[0]).render();
    });
  // (
  //IIFE - Immediately Invoked Function Expression
  // setTimeout(
  // async () => {
  //   const country = await getCountryByCodeAsync(countryCode);
  //   console.log(country[0]);
  //   container.innerHTML = new Country(country[0]).render();
  // }
  // )();
  // , 1200);
};

async function getCountryByCodeAsync(code) {
  const response = await fetch(`https://restcountries.eu/rest/v2/name/${code}`);
  const country = await response.json();
  return await country;
}
