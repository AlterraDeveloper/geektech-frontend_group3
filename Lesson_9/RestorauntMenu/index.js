import Button from "./Components/Button";
import MenuItem from "./Components/MenuItem";

const menu = [
  new MenuItem({
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  }),
  new MenuItem({
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  }),
  new MenuItem({
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  }),
  new MenuItem({
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  }),
  new MenuItem({
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  }),
  new MenuItem({
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  }),
  new MenuItem({
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  }),
  new MenuItem({
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  }),
  new MenuItem({
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  }),
  new MenuItem({
    id: 10,
    title: "Plov",
    category: "dinner",
    price: 25.99,
    img: "./images/item-10.jpeg",
    desc: `plov plov plov plov plov plov plov plov plov plov plov plov `,
  }),
];

const appContainer = document.querySelector("#app");
const buttonsContainer = appContainer.querySelector(".buttons");
const menuContainer = appContainer.querySelector(".menu");
let filterValue = "All";

function renderButtons() {
  let categories = menu.map((menuItem) => menuItem.category);
  categories.push("All");
  categories = [...new Set(categories)];
  const buttons = categories
    .sort()
    .map((category) =>
      new Button({
        text: category,
        isActive: category === filterValue,
      }).render()
    )
    .join("");

  buttonsContainer.innerHTML = buttons;

  const filterButtons = buttonsContainer.querySelectorAll(".btn");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      filterButtons.forEach((fb) => fb.classList.remove("active"));
      filterValue = event.target.innerText;
      event.target.classList.add("active");
      renderMenu();
    });
  });
}

function renderMenu() {
  let menuItems =
    filterValue === "All"
      ? menu
      : menu.filter((menuItem) => menuItem.category === filterValue);
  menuContainer.innerHTML = menuItems
    .map((menuItem) => menuItem.render())
    .join("");
}

renderButtons();
renderMenu();
