import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetails from "../ItemDetails/ItemDetails"
import ProductContext from "../../Context/ProductContext"



const ItemDetailsContainer = () => {
    const product = React.useContext(ProductContext)
    const [item,setItem] = useState()
    const {id} = useParams() 
    

    useEffect(()=>{
        let promise = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(product)
            },1000)
        })

        promise.then(resolve=>{
            if(id){
                setItem(resolve.filter(item=>item.id == id)[0])
            }
        })
    },[id])
    return(
        <div>
            {item? <ItemDetails item={item}/>: <p>Cargando...</p>
                
            }
        </div>
    )
}

export default ItemDetailsContainer
