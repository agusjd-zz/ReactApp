import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetails from "../ItemDetails/ItemDetails"
import {productDetails} from "../Item/products"
import {getFirestore} from "../../firebase";



const ItemDetailsContainer = () => {
    const product = productDetails
    const [item,setItem] = useState()
    const {id} = useParams() 
    
    // useEffect(() => {
    //     const db = getFirestore()
    //     const itemsColecction = db.collection("items")

    //     itemsColecction.doc(id).get()
        
    //         .then(doc => {
    //             if(doc.exists) {
    //                 setItem(doc.data());
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })

    // }, []);





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
