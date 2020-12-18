import React from 'react';
import './ItemCount.css'; 
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";


const ItemCount = (props)=>{
    const initial = props.initial;
    const stock = props.stock;

    const[count,setCount] = React.useState(initial);

    const countAdd = () =>{
        if (count < stock){
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
        <div className = "countContainer">
        <IoIosRemoveCircleOutline onClick = {countRemove}></IoIosRemoveCircleOutline>
            <p className="count">{count}</p>
        <IoMdAddCircleOutline onClick ={countAdd}></IoMdAddCircleOutline>    
        </div>
        <button>Agregar al carrito</button>
        </>
    
        
    )
 }
export default ItemCount;