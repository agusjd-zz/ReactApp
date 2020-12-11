import React from "react";
import NavBar from './Components/Navbar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

const App = () =>{
  return(
    <>
    <NavBar/>
    <ItemListContainer gretting="Bienvenido!!"/>
    </>
  )
}

export default App;
