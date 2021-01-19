import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetails from "../ItemDetails/ItemDetails"


const products = [{
    id : 0,
    title : "Miel",
    category : 1,
    img : "http://beepure.com.ar/assets/img/beepureliquida.png",
    brand : "Finca Carolina",
    price : 180
},
{
    id : 1,
    category: 1,
    title : "Cacao",
    img : "https://www.drcacao.com/images/producto-8.png",
    brand : "Dr Cacao",
    price : 240
},
{
    id : 2,
    category: 1,
    title : "Ghee",
    img : "http://beepure.com.ar/assets/img/beepureliquida.png",
    brand : "Bee Pure",
    price : 400
},
{
    id : 3,
    category: 1,
    title : "Mantequilla de mani",
    img : "http://www.le-fit.com.ar/wp-content/uploads/2019/03/le-fit_mantequilla_de_mani.png",
    brand : "Le Fit",
    price : 220
},
{
    id : 4,
    category: 2,
    title : "Leche de almendras",
    img : "https://almacensantosha.com.ar/wp-content/uploads/2019/05/Pack_Original.png",
    brand : "Vrink",
    price : 160
},
{
    id : 5,
    category: 1,
    title : "Cacao en barra",
    img : "https://www.drcacao.com/images/producto-4.png",
    brand : "Dr Cacao",
    price : 280
},
{
    id : 6,
    category: 1,
    title : "Aceite de coco",
    img : "https://http2.mlstatic.com/D_NQ_NP_2X_643017-MLA27861220141_072018-F.webp",
    brand : "Dale coco",
    price : 800
},
{
    id : 7,
    category: 1,
    title : "Mermelada",
    img : "http://beepure.com.ar/assets/img/productos/BEEPURE_Dulce-FdB.jpg",
    brand : "Bee Pure",
    price : 400
},{
    id : 8,
    category: 2,
    title : "Leche de coco",
    img : "https://www.ifeelgood.com.ar/img/articulos/bebida_vegetal_de_coco_dale_coco_1_lt_sin_lactosa_1_imagen1.jpg",
    brand : "Dale coco",
    price : 250,
}]

const ItemDetailsContainer = () => {
    const [item,setItem] = useState()
    const {id} = useParams() 
    

    useEffect(()=>{
        let promise = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(products)
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
