import React from "react";
import CartWidget from '../CartWidget/CartWidget';
import {NavLink} from 'react-router-dom'
import "./NavBar.css"

const NavBar = () =>{
return(
  <nav class="navbar navbar-expand-md bg-dark navbar-dark">
    <NavLink to = "/" exact>
    <a class="navbar-brand" href="#">Grusli</a>
    </NavLink>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <NavLink to = "/">
        <li class="nav-item">
          <a class="nav-link" href="#">Inicio</a>
        </li>
        </NavLink>
        <NavLink to = "/">
        <li class="nav-item">
          <a class="nav-link" href="#">Tienda</a>
        </li>
        </NavLink>
        <NavLink to ="/Categoria/1">
        <li class="nav-item">
          <a class="nav-link" href="#">Almacen</a>
        </li>
        </NavLink>
        <NavLink to ="/Categoria/2">
        <li class="nav-item">
          <a class="nav-link" href="#">Bebidas</a>
        </li>
        </NavLink>  
        <li class="nav-item">
          <a class="nav-link" href="#">Contactanos</a>
        </li>       
      </ul>   
    </div>
    <CartWidget/>   
  </nav>
)
}

export default NavBar;