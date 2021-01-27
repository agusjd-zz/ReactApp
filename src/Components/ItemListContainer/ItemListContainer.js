import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import {getFirestore} from "../../firebase"
import ProductContext from "../../Context/ProductContext"

const ItemListContainer = () =>{
    const product = React.useContext(ProductContext)
    const [items,setItems] = useState([])
    const {id} = useParams()

    // useEffect(()=>{

    //     const db = getFirestore();
    //     const itemsCollection = db.collection("Items")

    //     itemsCollection.get("category", "==", 1)
        
        
    //         .then(docs => {
    //             let arr = [];
    //             docs.forEach(doc => {
    //                 arr.push({id:doc.id, data:doc.data()})
    //             })
    //             console.log(arr)
    //             setItems(arr);
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    //   },[])

    useEffect(()=>{

        let promise = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(product)
            },1000)
        })

        promise.then(resolve=>{
            if(id){
                setItems(resolve.filter(item=>item.category===id))
            }else{
                setItems(resolve)
            }
        })
        },[id])
        return(
            <div className="container">
        
                <ItemList items={items}/>
                

            </div>
        )
   
    
}
export default ItemListContainer;