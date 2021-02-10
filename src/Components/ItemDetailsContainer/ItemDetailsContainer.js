import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetails from "../ItemDetails/ItemDetails"

import {getFirestore} from "../../firebase";



const ItemDetailsContainer = () => {
    const [item,setItem] = useState()
    const {id} = useParams() 
    
    useEffect(() => {
        const db = getFirestore()
        const itemsColecction = db.collection("Items")

       itemsColecction.doc(id).get()
        
              .then(doc => {
                  if(doc.exists) {
                      setItem(doc.data());
                  }
              })
              .catch((err) => {
                  console.log(err)
              })

      }, []);






    return(
        <div>
            {item? <ItemDetails item={item}/>: <p>Cargando...</p>
                
            }
        </div>
    )
}

export default ItemDetailsContainer
