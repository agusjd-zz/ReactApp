import React from 'react';
import './ItemList.css'
import Item from '../Item/Item'


const ItemList = ({items}) =>{
    return(
        <div className="row">
            {
                items.length >0 ? items.map (item=>{
                    return(
                        <Item key = {item.id} id = {item.id} title={item.title} price={item.price} img = {item.img}/>
                    )
                }):<p>Cargando...</p>
            }
        </div>
    )

    
}

export default ItemList;