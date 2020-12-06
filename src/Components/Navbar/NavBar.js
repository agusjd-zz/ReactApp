import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

let NavBar = () =>{
return(
<nav className="navbar navbar-expand-sm bg-success navbar-dark">

  <a className="navbar-brand" href="#">Grusli</a>
  
  <ul className="navbar-nav d-flex justify-content-end">
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
</nav> 
)
}

export default NavBar;