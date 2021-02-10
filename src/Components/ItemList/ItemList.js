import React from 'react';
import './ItemList.css'
import Item from '../Item/Item'


const ItemList = ({items}) =>{
    return(
        <div className="row">
            {
                items.length >0 ? items.map (item=>{
                    return(
                        <Item key = {item.category} category= {item.data.idcategory} id = {item.id} details= {item.data.details} title={item.data.title} price={item.data.price} img = {item.data.img}/>
                    )
                }):<p>Cargando...</p>
            }
        </div>
    )

    
}

export default ItemList;