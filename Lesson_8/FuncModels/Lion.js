import Animal from "./Animal";

export default function Lion(prideCount) {
  Animal.apply(this, arguments);
  this.prideCount = 12;
  //   this.makeVoice = function () {
  //     console.log("Lion says raaarrrrr");
  //   };
}

// Lion.prototype.constructor = Lion;
Lion.prototype = Object.create(Animal);
Lion.prototype.makeVoice = function () {
  console.log("Lion says raaarrrrr");
};
