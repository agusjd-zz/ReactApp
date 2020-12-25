import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/Navbar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from "./Components/ItemDetailsContainer/ItemDetailsContainer";

const App = () =>{
  return(
    <>
    <NavBar/>
    <div className="container">
    <ItemListContainer gretting="Bienvenido a la tienda!!"/>
    <ItemDetailsContainer/>
    </div>
    </>
  )
}

export default App;
