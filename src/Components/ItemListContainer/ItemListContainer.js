import React,{useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
import {getFirestore} from "../../firebase"
import {useParams} from "react-router-dom";


const ItemListContainer = () =>{

    const [items,setItems] = useState([])
    const db = getFirestore();
    const{id} = useParams();
    useEffect(()=>{
        if(id){
            console.log(id)
            db.collection("items")
            .get()
            .then(docs=>{
                let array = [];
                docs.forEach(doc=>{
                    let iditem = doc.data().idcategory;
                    if (iditem == id) {
                        array.push({id:doc.id,data:doc.data()})               
                    }  
                })
                setItems(array); 
                
            })
            .catch((error)=>{
                console.log(error)
            })

        }else{

            db.collection("items")
            .get()
            .then(docs =>{
                let array = [];
                docs.forEach(doc=>{
                    array.push({id:doc.id,data:doc.data()})
                    
                })

                setItems(array);
                
            })
            .catch((error)=>{
                console.log(error)
            })

        }
    },[])


        return(
            <div className="container">
        
                <ItemList items={items}/>
                

            </div>
        )
   
    
}
export default ItemListContainer;