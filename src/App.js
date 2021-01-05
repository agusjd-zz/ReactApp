import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavBar from './Components/Navbar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from "./Components/ItemDetailsContainer/ItemDetailsContainer";

const App = () =>{
  return(
    <>
    <Router>
    <NavBar/>
    <Switch>   
      <Route path="/" exact>
        <ItemListContainer/>
      </Route>
      <Route path="/Categoria/:id">
        <ItemListContainer/>
      </Route>
      <Route path="/DetalleProducto/:id">
        <ItemDetailsContainer/>
      </Route>
     
      

      </Switch>
    </Router>
    </>
  )
}

export default App;
