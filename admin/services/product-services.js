class ProductService {
    getListProductApi = () => {
        const promise = axios({
            url: 'https://683dacdc199a0039e9e66ecf.mockapi.io/api/Product',
            method: 'GET',
        });
    
        return promise;
    }

    deleteProductApi = (id) => {
        const promise = axios({
            url: `https://683dacdc199a0039e9e66ecf.mockapi.io/api/Product/${id}`,
            method: 'DELETE',
        });
    
        return promise;
    }

    addProductApi = (product) => {
        const promise = axios({
            url: 'https://683dacdc199a0039e9e66ecf.mockapi.io/api/Product',
            method: 'POST',
            data: product,
        });
        return promise;
    }

    updateProductApi = (product) => {
        const promise = axios({
            url: `https://683dacdc199a0039e9e66ecf.mockapi.io/api/Product/${product.id}`,
            method: 'PUT',
            data: product,
        });
        return promise;
    }

}
export default ProductService;