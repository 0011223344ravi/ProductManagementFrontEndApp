import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Route ,Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListProduct from './components/ListProduct';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateProductComponent from './components/CreateProductComonent';
import UpdateProduct from './components/UpdateProduct';
import ProductByID from './components/ProductByID';
import DeleteComponent from './components/DeleteComponent';


function App() {
  return (
    <div>
      <Router>
       <div className="container">
      <Header/>
         <div className ="container">
          <Switch>
              <Route path ="/" exact component ={ListProduct}></Route>
              <Route path ="/products" component ={ListProduct}></Route>

              <Route path ="/add-product" component ={CreateProductComponent}></Route>
              <Route path ="/update-product/:id" component ={UpdateProduct}></Route>
              <Route path = "/view-product/:id" component = {ProductByID}></Route>
              <Route path = "/delete-product/:id" component = {DeleteComponent}></Route>
            
             <ListProduct/>



          </Switch>
    </div>
    <Footer/>
    </div>
    </Router>
    </div>
  );
}

export default App;
