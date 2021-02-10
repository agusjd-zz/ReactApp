import React,{useContext} from 'react';
import { FiShoppingCart } from "react-icons/fi";
import './CartWidget.css'
import {useCartContext} from '../../Context/CartContext'

const CartWidget = () =>{

  const {totalQty} = useCartContext()
  return(

    <>
      <div className="d-flex"> 
      <FiShoppingCart className='iconCart'></FiShoppingCart>
      <span className="badge rounded-pill bg-light text-dark">{totalQty}</span>
      </div>
    </>  
  )
    
}

export default CartWidget;