class CartItem {
  constructor(id, name, price, img, quality) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.img = img;
    this.quality = quality || 1;
  }
}
export default CartItem;
