import React from 'react';
import './ItemCount.css'; 
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";


const ItemCount = ()=>{
    const initial = 1;
    const stock = 10;

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
        if (stock === 0){
            <p>Nos qedamos sin stock</p>
        } 
    }

    return(
        <div className = "countContainer">
        <button><IoIosRemoveCircleOutline onClick = {countRemove}></IoIosRemoveCircleOutline></button>
            <p className="count">{count}</p>
        <button><IoMdAddCircleOutline onClick ={countAdd}></IoMdAddCircleOutline></button>  
            

        </div>
        
    )
 }
export default ItemCount;