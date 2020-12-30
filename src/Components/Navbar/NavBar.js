import React from "react";
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom'

const NavBar = () =>{
return(
<nav className="navbar navbar-expand-sm bg-success navbar-dark">
  <Link to="/" exact>
  <a className="navbar-brand" href="#">Grusli</a>
  </Link>
  <div>
  <ul className="navbar-nav">
    <Link to ="/">
    <li className="nav-item nav-link">
      Inicio
    </li>
    </Link>
    <Link to = "/">
    <li className="nav-item nav-link">
      Tienda
    </li>
    </Link>
    <li className="nav-item nav-link">
      Contactanos
    </li>
  </ul>
  </div>
  <CartWidget/>
</nav> 
)
}

export default NavBar;