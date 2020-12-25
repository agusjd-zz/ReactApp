import React,{useEffect, useState} from 'react'
import ItemCount from '../../ItemCount/ItemCount'
import {Products} from '../../ItemListContainer/Items/Items'
const ItemDetails = () => {
    const [item,setItem] = useState([]);

    useEffect(()=>{
        setTimeout(()=>{
            const arrayDetails = fetch({})
            arrayDetails.then(response =>{
                return response.json({Products})
            })
            .then(response =>{
                setItem(response[0])
            })
        },2000)
    })
    return(
        <div>
            {item ? (
        <div>
            <div>
                <div>
                <ItemCount />
                </div>
            </div>
            <div>
                <h2>{item.title}</h2>
                <p>Precio: ${item.price}</p>
            </div>
        </div>
            ) : (
            <p>Testing...</p>
            )}
        </div>
        )
}

export default ItemDetails
