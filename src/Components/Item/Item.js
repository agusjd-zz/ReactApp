import React from 'react'
import {NavLink} from 'react-router-dom'

const Item = ({id,title,price,img,brand}) => {
    return (
        <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 mt-4 container">
        <h2>{title}</h2>
        <NavLink to ={`/DetalleProducto/${id}`}>
        <img src={img} alt="imagen"></img> 
        </NavLink>
        <p>{brand}</p>             
        <p>{price}</p>
    </div>
    )
}

export default Item
