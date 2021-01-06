import React from 'react';
import './ItemCount.css'; 
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import {NavLink} from 'react-router-dom';


const ItemCount = (props)=>{
    const initial = props.initial;
    const stock = props.stock;
    const idProduct = props.id;

    const[quantity,setQuantity] = React.useState();
    const[count,setCount] = React.useState(initial);

    const countAdd = () =>{
        if (count < stock){
            setCount(count+1);
        }
    }

    const countRemove = () =>{
        if (count > initial){
            setCount(count-1);
        }
    
    }
    
    const addToCart = () =>{
        setQuantity(count);
        console.log(`Se agregaron ${count} elementos al carrito ${idProduct}`)

    }

    return(
        <>
        <div className = "d-flex count">
        <IoIosRemoveCircleOutline onClick = {countRemove}></IoIosRemoveCircleOutline>
            <p>{count}</p>
        <IoMdAddCircleOutline onClick ={countAdd}></IoMdAddCircleOutline>    
        </div>
        <NavLink to="/Carrito"> 
        <button className="btn btn-outline-success btn-sm" onClick={addToCart}>Agregar al carrito</button>
        </NavLink>

        </>
    
        
    )
 }
export default ItemCount;