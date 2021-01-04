import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetails = ({title,brand,price,img}) => {
    return(
        <>
            <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 mt-4 container">
                        <h2>{title}</h2>
                        <img src={img} alt="Hola"></img>
                        <p>{brand}</p>             
                        <p>{price}</p>
                        <ItemCount stock = {10} initial = {1}> </ItemCount>
                </div>
        </>
    )


    
}

export default ItemDetails
