import React ,{Component} from "react";
 import ProductService from "./ProductService";

 class ProductByID extends Component {
 constructor(props){
  super(props)
  this.state = {
    id: this.props.match.params.id,
    products: {}
}

this.cancel = this.cancel.bind(this);



 }
componentDidMount(){
    ProductService.getProductById(this.state.id).then((response)=>{
        this.setState({products:response.data});
        });

    }

    cancel(){
        this.props.history.push('/products');}


   
render(){
  return (
    <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Product Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Product ID: </label>
                            <div> { this.state.products.id }</div>
                        </div>
                        <div className = "row">
                            <label> Product Name: </label>
                            <div> { this.state.products.name }</div>
                        </div>
                        <div className = "row">
                            <label> Product Price: </label>
                            <div> { this.state.products.price }</div>
                        </div>
                        <div className = "row">
                            <label> Producr ID: </label>
                            <div> { this.state.products.quantity }</div>
                        </div>

                         <button className="btn btn-success" onClick={this.cancel} >Back To Main page</button>
                    </div>

                </div>
            </div>
  )
}
}

export default ProductByID;