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
        if (count > initial){
            setCount(count-1);
        }
    
    }

    return(
        <>
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