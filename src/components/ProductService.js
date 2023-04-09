import axios from 'axios';

const BASE_URL ="http://localhost:9000/api/products"

class ProductService{

     getProducts(){
        return axios.get(BASE_URL+'/all');

     }

     addProduct(product){
     
    return axios.post(BASE_URL +'/insert', product);
    
    }

    getProductById(id){
     
        return axios.get(BASE_URL + '/find/' + id);
        
        }

        updateProduct(product, id){
            return axios.put(BASE_URL + '/update/' + id, product);
        }

        
        deleteProduct(id){
        
        return axios.delete(BASE_URL + '/delete/' + id);
        }


}

export default new ProductService();