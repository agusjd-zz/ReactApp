import React from "react";
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom'
import "./NavBar.css"

const NavBar = () =>{
return(
  <nav class="navbar navbar-expand-md bg-dark navbar-dark">
    <Link to = "/" exact>
    <a class="navbar-brand" href="#">Grusli</a>
    </Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <Link to = "/">
        <li class="nav-item">
          <a class="nav-link" href="#">Inicio</a>
        </li>
        </Link>
        <Link to = "/">
        <li class="nav-item">
          <a class="nav-link" href="#">Tienda</a>
        </li>
        </Link>
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