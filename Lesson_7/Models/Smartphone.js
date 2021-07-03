import ShopItem from "./ShopItem";

export default class Smartphone extends ShopItem {
  constructor(osType, price) {
    super(price);
    this.osType = osType;
    console.log("Build Smartphone object");
  }
}
