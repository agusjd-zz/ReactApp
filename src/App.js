import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/Navbar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount'

const App = () =>{
  return(
    <>
    <NavBar/>
    <ItemListContainer gretting="Bienvenido!!"/>
    <ItemCount></ItemCount>
    </>
  )
}

export default App;
