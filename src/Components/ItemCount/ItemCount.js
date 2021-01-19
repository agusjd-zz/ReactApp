import React from 'react';
import './ItemCount.css'; 
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import {NavLink} from 'react-router-dom';
import CartContext from '../../Context/CartContext'


const ItemCount = (props)=>{
    const initial = props.initial;
    const stock = props.stock;
    const idProduct = props.id;
    const price = props.price;
    const title = props.title;
    const img = props.img;
    const [showing, setShowing] = React.useState(false);

    const {addProduct} = React.useContext(CartContext);
    const datos = {idProduct, stock, price, title,img} 

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
        setShowing({ showing: !showing });
        console.log(`Se agregaron ${count} elementos al carrito ${idProduct}`)
        addProduct(datos, count);


    }

    return(
        <>
        <div className = "d-flex count">
        <IoIosRemoveCircleOutline onClick = {countRemove}></IoIosRemoveCircleOutline>
            <p>{count}</p>
        <IoMdAddCircleOutline onClick ={countAdd}></IoMdAddCircleOutline>    
        </div>
        { showing
    ? <NavLink to="/Carrito"><button >Terminar Compra</button></NavLink>
    : <button onClick={addToCart}>Agregar al Carrito</button>
    }

        </>
    
        
    )
 }
export default ItemCount;