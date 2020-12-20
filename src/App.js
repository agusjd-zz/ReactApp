import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/Navbar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

const App = () =>{
  return(
    <>
    <NavBar/>
    <ItemListContainer gretting="Bienvenido a la tienda!!"/>
    </>
  )
}

export default App;
