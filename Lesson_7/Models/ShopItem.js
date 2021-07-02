import Laptop from "./Laptop";
import Smartphone from "./Smartphone";

export default class ShopItem {
  constructor(vendor, model, price) {
    this.model = model;
    this.vendor = vendor;
    this.price = price;
  }

  //   getPrice() {
  //     if (this instanceof Laptop) {
  //       return this.price - this.price * 0.05;
  //     }
  //     if (this instanceof Smartphone) {
  //       return this.price - this.price * 0.25;
  //     }
  //     return this.price;
  //   }
}
