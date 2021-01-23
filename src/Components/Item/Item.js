import React from 'react'
import {NavLink} from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import "./Item.css"

const Item = ({id,title,price,img,details}) => {
    return (
        <>
    {/* <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 mt-4 container">
        <h2>{title}</h2>
        <NavLink to ={`/DetalleProducto/${id}`}>
        <img src={img} alt="imagen"></img> 
        </NavLink>
        <p>{brand}</p>             
        <p>AR${price}</p>
        <ItemCount stock = {10} initial = {1} id ={id} price={price} title ={title} img={img}/>
    </div> */}
    <div class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4 mt-4 mr-5">
        <NavLink to ={`/DetalleProducto/${id}`}>
        <img src={img} class="card-img-top img-product" alt="imagen"></img>
        </NavLink>
        <div class="card-footer">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{details}</p>
        <div className="d-flex">
        <p className="item-price">AR${price}</p>
        <NavLink to ={`/DetalleProducto/${id}`}>
        <FiShoppingCart className='icon-product'></FiShoppingCart>
        </NavLink>
        </div> 
        </div>
    </div>
  </>
    )
}

export default Item
