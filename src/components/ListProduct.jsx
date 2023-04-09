 import React ,{Component} from "react";
 import ProductService from "./ProductService";

 class ListProduct extends Component {
 constructor(props){
  super(props)
  this.state={
      products  :[]

}

this.addProducts=this.addProducts.bind(this);
this.updateProduct=this.updateProduct.bind(this);
this.viewProduct = this.viewProduct.bind(this);
this.deleteProduct = this.deleteProduct.bind(this);





 }
componentDidMount(){
    ProductService.getProducts().then((response)=>{
        this.setState({products:response.data});
        });

    }

addProducts(){
    this.props.history.push("/add-product");
    
}


updateProduct(){
    this.props.history.push("/update-product");
}   
 viewProduct(id){
  console.log(id);
  this.props.history.push(`/view-product/${id}`);

}

deleteProduct(){
  this.props.history.push("/delete-product/");
}

view(id){
  console.log(id);
  this.props.history.push(`/view-product/${id}`)
}

render(){
  return (
    <div>
      <h2 className ="text-center">  Products  List </h2>
      <div className ="row">

      

      </div>

      <div className ="row">
        <table className ="table table-striped">
            <thead>
                <tr>

        <th scope="col">Product Id</th>
        <th scope="col">Product Name</th>
         <th scope="col">Product Price</th>
         <th scope="col">Product Quantity</th>
                    
                </tr>

               


            </thead>

            <tbody>
                {
                    this.state.products.map(product=>
                        <tr key={product.id}>
                      <td>{product.id}</td>       
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>
  
 <button className="btn btn-secondary" onClick={this.addProducts}>Add Product</button>
<button className="btn btn-success" onClick={this.updateProduct}>Update Product</button>
  <button className="btn btn-primary" onClick={this.viewProduct}>View Product</button>

  <button className="btn btn-success" onClick={this.deleteProduct}>Delete Product</button>

  <button className="btn btn-info" onClick={ () => this.view(product.id)} >View </button>

  
  
  

  
                    </td>

                        </tr>
                        )
                    
                }
                </tbody>
                
        </table>
        
      </div>
      
      

      
    </div>
    
  )
}
}

export default ListProduct;