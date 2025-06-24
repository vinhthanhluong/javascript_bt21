class CartList {
  constructor() {
    this.arr = [];
  }
  addProduct(data) {
    this.arr.push(data);
  }
  removeProduct(id) {
    this.arr = this.arr.filter((item) => item.id != id);
  }
  getIdProduct(id) {
    return this.arr.find((item) => item.id == id);
  }
  updateQuality(id, qal) {
    const item = this.arr.find((item) => item.id == id);
    if (item) {
      item.quality = qal;
    }
  }
}

export default CartList;
