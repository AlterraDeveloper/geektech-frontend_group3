import Animal from "./Animal";

export default class Lion extends Animal {
  constructor() {
    super(); //new Animal()
    console.log("Build class Lion...");
  }

  //this здесь не существует
  static Roar() {
    console.log("Rooooaarrrr");
  }

  makeVoice() {
    console.log("Lion says raaarrrrr");
  }

  toString = () => "I'm Lion";
}
