import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetails.css";
import {useCartContext} from "../../Context/CartContext";

const ItemDetails = ({item}) => {
    const {addToCart} = useCartContext();
    const handleAddProduct = (e, qty) => {
        e.stopPropagation();

        addToCart({
            cantidad: qty,
            item,
        }, qty)

        
    }

    
    return(
        <>
            <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 mt-4 container">
                        <img src={item.img} alt="imagen"></img>
                        <h2 className="item-title">{item.title}</h2>
                        <p className="item-text">{item.details}</p>             
                        <p className="item-price">AR${item.price}</p>
                        <ItemCount stock = {10} initial={1} onAdd={handleAddProduct}> </ItemCount>
                </div>
        </>
    )


    
}

export default ItemDetails
