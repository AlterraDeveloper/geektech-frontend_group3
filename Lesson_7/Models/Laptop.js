import ShopItem from "./ShopItem";

export default class Laptop extends ShopItem {
  constructor(model, vendor, price) {
    super(price);
    this.model = model;
    this.vendor = vendor;
    console.log("Build Laptop object");
  }
}
