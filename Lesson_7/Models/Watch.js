class Watch {
    #price;
  
    constructor(vendor, model, price) {
      this.model = model;
      this.vendor = vendor;
      this.#price = price;
    }
  
  }
  
  export default Watch;