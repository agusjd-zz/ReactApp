import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavBar from './Components/Navbar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from "./Components/ItemDetailsContainer/ItemDetailsContainer";
import Cart from './Components/Cart/Cart'
import CartContextProvider from './Context/CartContext'
import Inicio from "./Components/Inicio/Inicio";


const App = () =>{  

  return(
    <>  
    <Router>

    <CartContextProvider>
    <NavBar/>
    <Switch>
      <Route path="/" exact>
        <Inicio/>
      </Route>   
      <Route path="/Store">
        <ItemListContainer/>
      </Route>
      <Route path="/Categoria/:id">
        <ItemListContainer/>
      </Route>
      <Route path="/DetalleProducto/:id">
        <ItemDetailsContainer/>
      </Route>
      <Route path="/Carrito">
        <Cart/>
      </Route>
      </Switch>
      </CartContextProvider>
       
    </Router>
    </>
  )
}

export default App;
