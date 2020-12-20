import React from 'react';
import './ItemCount.css'; 
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";


const ItemCount = (props)=>{
    const initial = props.initial;
    const stock = props.stock;

    const[count,setCount] = React.useState(initial);

    const countAdd = () =>{
        if (count){
            setCount(count+1);
        }
    }

    const countRemove = () =>{
        if (count > initial && count > 0){
            setCount(count-1);
        }
    
    }

    return(
        <>
        <h2>Producto</h2>
        <div className = "d-flex count">
        <IoIosRemoveCircleOutline onClick = {countRemove}></IoIosRemoveCircleOutline>
            <p>{count}</p>
        <IoMdAddCircleOutline onClick ={countAdd}></IoMdAddCircleOutline>    
        </div>
        <button>Agregar al carrito</button>
        </>
    
        
    )
 }
export default ItemCount;