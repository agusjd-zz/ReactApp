import React from 'react'
import {NavLink} from 'react-router-dom'
import ItemCount from "../ItemCount/ItemCount"

const Item = ({id,title,price,img,brand}) => {
    return (
    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 mt-4 container">
        <h2>{title}</h2>
        <NavLink to ={`/DetalleProducto/${id}`}>
        <img src={img} alt="imagen"></img> 
        </NavLink>
        <p>{brand}</p>             
        <p>AR${price}</p>
        <ItemCount stock = {10} initial = {1} id ={id} price={price} title ={title} img={img}/>
    </div>
    )
}

export default Item
