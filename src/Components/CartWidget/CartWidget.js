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
      <p>{totalQty}</p>
      </div>
    </>  
  )
    
}

export default CartWidget;