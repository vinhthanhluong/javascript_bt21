class ProductServices {
  getListProduct() {
    return axios({
      url: "https://683dacdc199a0039e9e66ecf.mockapi.io/api/Product",
      method: "GET",
    });
  }
  getIdProduct(id) {
    return axios({
      url: `https://683dacdc199a0039e9e66ecf.mockapi.io/api/Product/${id}`,
      method: "GET",
    });
  }
}

export default ProductServices;
