import React from "react";
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () =>{
return(
<nav className="navbar navbar-expand-sm bg-success navbar-dark">

  <a className="navbar-brand" href="#">Grusli</a>
  <div>
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" href="#">Inicio</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Tienda</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Contactanos</a>
    </li>
  </ul>
  </div>
  <CartWidget/>
</nav> 
)
}

export default NavBar;