import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom"
import NavBar from './Components/Navbar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from "./Components/ItemDetailsContainer/ItemDetailsContainer";

const App = () =>{
  return(
    <>
    <NavBar/>
    <Router>
      <Switch>
      <Route path="/" exact>
        <ItemListContainer/>
      </Route>
      <Route path="/category:id">
      <ItemListContainer/>
      </Route>
      <Route path="/item:id">
        <ItemDetailsContainer/>
      </Route>
      </Switch>
    </Router>
    </>
  )
}

export default App;
