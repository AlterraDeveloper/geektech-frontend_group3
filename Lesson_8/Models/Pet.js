import Animal from "./Animal";

//Pet => Animal => Object
export default class Pet extends Animal {
  #name;

  constructor(name, breed) {
    super();
    this.#name = name;
    this.breed = breed || "unknown breed";
    console.log("Build class Pet...");
  }

  get name() {
    return this.#name;
  }

  //валидация данных
  set name(value) {
    if (value === "")
      throw new Error("У домашнего животного обязательно есть кличка");
    this.#name = value;
  }

  makeVoice() {
    console.log(`I'm pet with name ${this.name} and i stay at home`);
  }
}
