import axios from 'axios';

const BASE_URL ="http://localhost:9000/api/products"

class ProductService{

     getProducts(){
        return axios.get(BASE_URL);

     }

     addProduct(product){
     
    return axios.post(BASE_URL, product);
    
    }

    getProductById(id){
     
        return axios.get(BASE_URL + '/' + id);
        
        }

        updateProduct(product, id){
            return axios.put(BASE_URL + '/' + id, product);
        }

        
        deleteProduct(id){
        
        return axios.delete(BASE_URL + '/' + id);
        }


}

export default new ProductService();