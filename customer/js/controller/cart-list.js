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
    return this.arr.filter((item) => item.id == id);
  }
  updateProduct(item) {
    const idProduct = this.arr.findIndex((food) => food.id == item.id);
    this.arr[idProduct] = item;
  }
}

export default CartList;
