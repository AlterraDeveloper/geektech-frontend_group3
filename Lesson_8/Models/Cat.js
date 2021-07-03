import Pet from "./Pet";

//Cat => Pet => Animal => Object
export class Cat extends Pet {
  constructor(name, breed) {
    super(name, breed); //new Pet()
    console.log("Build class Cat...");
  }

  makeVoice() {
    super.makeVoice();
    console.log("Meeoowwww");
  }
}

//Dog => Pet => Animal => Object
export class Dog extends Pet {
  constructor(name, owner, breed) {
    super(name, breed); //new Pet()
    this.owner = owner;
    console.log("Build class Dog...");
  }

  makeVoice() {
    super.makeVoice();
    console.log(`I love ${this.owner}, he is my owner`);
    console.log("Gaav Gav");
  }
}
