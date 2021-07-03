export default class ShopItem {
  #price;

  constructor(price) {
      this.#price = price;
      console.log("Build ShopItem object");
  }

  get price() {
    return this.#price;
  }

  set price(value) {
    if (value < 0) throw new RangeError("Цена должна быть больше нуля");
    this.#price = value;
  }
}
