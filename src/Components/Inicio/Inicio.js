import React from 'react'
import "./Inicio.css"
import {NavLink} from "react-router-dom"

const Inicio = () => {
    return (
        <div className="inicio container-fluid">
          
                <h2 className="index-text">
                    Conoce nuestra variedad de productos
                </h2>
                <NavLink to = "/Store">
                <button className="btn btn-success btn-home">A comprar!</button>
                </NavLink>
            
        </div>
    )
}

export default Inicio
