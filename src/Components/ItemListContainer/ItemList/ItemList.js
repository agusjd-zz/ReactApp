import React, {useState,useEffect} from 'react';
import {Products} from '../Items/Items'
import ItemCount from '../../ItemCount/ItemCount'


const ItemList = () =>{
    const [item,setItem] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            const promise = new Promise((resolve, reject) => {
                resolve(Products);
            });
            promise.then(Products => {
                setItem(Products);
            })
        }, 2000);
    },[])
    return(
        <>
            {item.map((item) => {
                return(
                    <div key ={item.id} className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 mt-4 ">
                        <h2>{item.title}</h2>
                        <p>{item.price}</p>
                        <ItemCount stock = {10} initial = {1}> </ItemCount>
                    </div>
                )
            })
            }
        </>
    )
    
}

export default ItemList;