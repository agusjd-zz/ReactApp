import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetails from "./ItemDetails/ItemDetails"

const products = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve(
            [{
                "id" : "0",
                "title" : "Miel",
                "img" : "http://beepure.com.ar/assets/img/beepureliquida.png",
                "brand" : "Finca Carolina",
                "price" : "AR$180"
            },
            {
                "id" : "1",
                "title" : "Cacao",
                "img" : "https://www.drcacao.com/images/producto-8.png",
                "brand" : "Dr Cacao",
                "price" : "AR$240"
            },
            {
                "id" : "2",
                "title" : "Ghee",
                "img" : "http://beepure.com.ar/assets/img/beepureliquida.png",
                "brand" : "Bee Pure",
                "price" : "AR$400"
            },
            {
                "id" : "3",
                "title" : "Mantequilla de mani",
                "img" : "http://www.le-fit.com.ar/wp-content/uploads/2019/03/le-fit_mantequilla_de_mani.png",
                "brand" : "Le Fit",
                "price" : "AR$220"
            },
            {
                "id" : "4",
                "title" : "Leche de almendras",
                "img" : "https://almacensantosha.com.ar/wp-content/uploads/2019/05/Pack_Original.png",
                "brand" : "Vrink",
                "price" : "AR$160"
            },
            {
                "id" : "5",
                "title" : "Cacao en barra",
                "img" : "https://www.drcacao.com/images/producto-4.png",
                "brand" : "Dr Cacao",
                "price" : "AR$280"
            },
            {
                "id" : "6",
                "title" : "Aceite de coco",
                "img" : "https://http2.mlstatic.com/D_NQ_NP_2X_643017-MLA27861220141_072018-F.webp",
                "brand" : "Dale coco",
                "price" : "AR$800"
            },
            {
                "id" : "7",
                "title" : "Mermelada",
                "img" : "http://beepure.com.ar/assets/img/productos/BEEPURE_Dulce-FdB.jpg",
                "brand" : "Bee Pure",
                "price" : "AR$400"
            },{
                "id" : "8",
                "title" : "Leche de coco",
                "img" : "https://www.ifeelgood.com.ar/img/articulos/bebida_vegetal_de_coco_dale_coco_1_lt_sin_lactosa_1_imagen1.jpg",
                "brand" : "Dale coco",
                "price" : "AR$250"
            }]
        )
    })
})

const ItemDetailsContainer = () => {
    const {id} = useParams() 
    const [item,setItem] = useState([])

    useEffect(() => {
        products.then((resolve)=>{
            setItem(resolve)
        })
    },[])

    return (
        <>
         {
             item.length === 0 ? <p>Cargando...</p>: item.map((item)=>{
                 return(
                     item.id === id ? <ItemDetails title={item.title} img={item.img} price={item.price} brand = {item.brand}/>:null
                 )
             })
         }
           
        </>
    )
}

export default ItemDetailsContainer
