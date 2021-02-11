import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavBar from './Components/Navbar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from "./Components/ItemDetailsContainer/ItemDetailsContainer";
import Cart from './Components/Cart/Cart'
import CartContextProvider from './Context/CartContext'
import Inicio from "./Components/Inicio/Inicio";
import Categorias from "./Components/Category/Category";
import Checkout from "./Components/Checkout/Checkout";


const App = () =>{  

  return(
    <>
    <CartContextProvider>  
    <Router>
    <NavBar/>
    <Switch>
      <Route path="/" exact>
        <Inicio/>
      </Route>   
      <Route path="/Store">
        <ItemListContainer />
      </Route>
      <Route path="/Category/:id">
        <Categorias/>
      </Route>
      <Route path="/ProductDetail/:id">
        <ItemDetailsContainer/>
      </Route>
      <Route path="/Cart">
        <Cart/>
      </Route>
      <Route path="/Checkout">
        <Checkout/>
      </Route>
      </Switch>
     
       
    </Router>
    </CartContextProvider>
    </>
  )
}

export default App;
