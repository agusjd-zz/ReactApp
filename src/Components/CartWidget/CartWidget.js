import React,{useContext} from 'react';
import { FiShoppingCart } from "react-icons/fi";
import './CartWidget.css'
import CartContext from '../../Context/CartContext'

const CartWidget = () =>{

  const {productsCount} = useContext(CartContext)
  return(
    <>
      <FiShoppingCart className='iconCart'></FiShoppingCart>
      <p>{productsCount()}</p>
    </>  
  )
    
}

export default CartWidget;