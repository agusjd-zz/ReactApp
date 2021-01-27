import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetails.css";
// import CartContext from '../../Context/CartContext'
const ItemDetails = ({item}) => {
    // const {addProduct} = React.useContext(CartContext);
    
    return(
        <>
            <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 mt-4 container">
                        <img src={item.img} alt="imagen"></img>
                        <h2 className="item-title">{item.title}</h2>
                        <p className="item-text">{item.details}</p>             
                        <p className="item-price">AR${item.price}</p>
                        <ItemCount stock = {10} id ={item.id} price={item.price} title ={item.title} img={item.img}> </ItemCount>
                </div>
        </>
    )


    
}

export default ItemDetails
