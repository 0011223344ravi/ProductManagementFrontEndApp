import React,{Component} from "react";
import ProductService from "./ProductService";

class DeleteComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            
            id: this.props.match.params.id,
            product: {}
           

      }
      this.cancel = this.cancel.bind(this);

    }
    componentDidMount(){
        ProductService.getProductById(this.state.id).then((response)=>{
            this.setState({product:response.data});
            });
      ProductService.deleteProduct(this.state.id);
  

   
    
        }

        cancel(){
            this.props.history.push('/products');}
    

    render(){
        return(
            <div>
                <h1>Delete Page</h1>
            
       
        <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">  Product is Deleted From Database</h3> 
                    <div className = "card-body">
                        <div className = "row">
                            <label> Product ID: </label>
                            <div> { this.state.product.id }</div>
                        </div>
                        <div className = "row">
                            <label> Product Name: </label>
                            <div> { this.state.product.name }</div>
                        </div>
                        <div className = "row">
                            <label> Product Price: </label>
                            <div> { this.state.product.price }</div>
                        </div>
                        <div className = "row">
                            <label> Producr ID: </label>
                            <div> { this.state.product.quantity }</div>
                        </div>
                        
                    </div>
                 

                    <button className="btn btn-success" onClick={this.cancel} >Back To Main page</button>

                </div>
            </div>
           

            </div>
        )
       
    }
}

export default DeleteComponent;