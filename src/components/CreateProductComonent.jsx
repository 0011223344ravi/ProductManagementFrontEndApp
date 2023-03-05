import React,{Component} from "react";

import ProductService from "./ProductService";

class CreateProductComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            id:"",
            name :  "",
            price :  "",
            quantity :  "",

      
      }
      this.changeIdHandaler = this.changeIdHandaler.bind(this);
      this.changeNameHandaler = this.changeNameHandaler.bind(this);

      this.changePriceHandaler = this.changePriceHandaler.bind(this);
      
      this.changeQtyHandaler = this.changeQtyHandaler.bind(this);
      
      this.saveOrUpdateEmployees = this.saveOrUpdateEmployee.bind(this);

      this.cancel = this.cancel.bind(this);
      
    } 


    //save or update product 

    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let product = {id: this.state.id, name: this.state.name, price: this.state.price, quantity: this.state.quantity};

        console.log('Products => ' + JSON.stringify(product));

        ProductService.addProduct(product).then (response => {
            this.props.history.push('/products');  
        });

        // step 5
       
    }

    //cancel
    cancel(){
        this.props.history.push('/products');

    }





    changeIdHandaler(event){
        this.setState({id:event.target.value});

    }
    changeNameHandaler(event){
        this.setState({name:event.target.value});

    }
    changePriceHandaler(event){
        this.setState({price:event.target.value});

    }
    changeQtyHandaler(event){
        this.setState({quantity:event.target.value});

    }

    render(){
        return(
            <div  className="container">
              <h1 className="text-center">Add Product</h1>

                <div className="row">


                  <div className="text-center">

                  <form>
  <div class="form-group">
    <label for="productid">Product Id</label>

    <input type="number" class="form-control" id="productid" placeholder="Enter Product Id" value={this.state.id}  onChange ={this.changeIdHandaler}></input>
   
  </div>
  <div class="form-group">
    <label for="productname">Product Name</label>
    <input type="text" class="form-control" id="productname" placeholder="Product Name"
    value={this.state.name}  onChange ={this.changeNameHandaler}></input>
  </div>
  <div class="form-group">
    <label for="productprice">Product Price</label>
    <input type="number" class="form-control" id="productprice" placeholder="Product Price" value={this.state.price}  onChange ={this.changePriceHandaler}></input>
  </div>

  
  
  <div class="form-group">
    <label for="productqty">Product Qty</label>
    <input type="number" class="form-control" id="productqty" placeholder="Product Qtry" value={this.state.quantity}  onChange ={this.changeQtyHandaler}></input>
  </div>
  
  <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
  <button className="btn btn-danger" onClick={this.cancel} >Cancel</button>
</form>
                  </div>


                </div>
          
           
            </div>
        )
       
    }
}

export default CreateProductComponent;