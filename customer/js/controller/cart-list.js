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
  getIdProduct() {}
  updateProduct() {}
}

export default CartList;
