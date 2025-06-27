class Products {
    constructor(_id, _name, _price, _img, _desc, _backCamera, _frontCamera, _type, _screen = "") {
        this.id = _id;
        this.name = _name;
        this.price = _price;
        this.screen = _screen;
        this.backCamera = _backCamera;
        this.frontCamera = _frontCamera;
        this.img = _img;
        this.desc = _desc;
        this.type = _type;
    }
}
export default Products;