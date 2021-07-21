//Асинхронное программирование

// console.log("Закинули белье в стирку");

// window.setTimeout(() => {
//   console.log("Ужин готов...");
// }, 4000);

// window.setTimeout(() => {
//   console.log("Стирка закончилась...");
// }, 6000);

// console.log("Нарезать продукты");

// console.log("пропылесосить");

//задача о setTimeout(0)
// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 0);

// console.log("3");

// setTimeout(() => {
//   setTimeout(() => {
//     console.log("Fetch bosses....");

//     setTimeout(() => {
//       const boss = {
//         id: 15,
//         bossName: "Max",
//       };
//       console.log("Data received (boss fetched)....", boss);
//     }, 1000);
//   }, 2000);
// }, 5000);

// console.log("Fetch clients...");
// const clientPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const client = {
//       id: 154,
//       clinetName: "Ivan",
//       bossId: 15,
//     };
//     resolve(client);
//     // reject(new Error("какая-то ошибка при запросе сотрудников"));
//   }, 5000);
// });

// clientPromise
//   .then((client) => {
//     console.log("Data received (clients fetched)....", client);
//     console.log("Fetch bosses....");
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const boss = {
//           id: 15,
//           bossName: "Max",
//         };
//         resolve(boss);
//         // reject(new Error("какая-то ошибка при запросе начальников"));
//       }, 2500);
//     });
//   })
//   .then((boss) => console.log("Data received (boss fetched)....", boss))
//   .catch((error) => console.warn(error))
//   .finally(() => console.log("Я выполнюсь по-любому))"))

console.log("Fetch todos...");
let todosFromAPI = [];
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((todos) => {
    todosFromAPI = todos;
    return fetch("https://jsonplaceholder.typicode.com/users");
  })
  .then((response) => response.json())
  .then((users) => {
    console.log(
      todosFromAPI.map((todo) => {
        return {
          todoUserName: users.find((user) => user.id === todo.userId).name,
          todoText: todo.title,
        };
      })
    );
  });

console.log("After fetch todos...");
