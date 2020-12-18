import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/Navbar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount'

const App = () =>{
  return(
    <>
    <NavBar/>
    <ItemListContainer gretting="Bienvenido a la tienda!!"/>
    <ItemCount stock="10" initial= "1"></ItemCount>
    </>
  )
}

export default App;
