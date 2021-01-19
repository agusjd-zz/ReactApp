import React,{useContext} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ProductContext from '../../Context/ProductContext'


const ItemDetails = ({item}) => {
    const product = useContext(ProductContext);
    
    return(
        <>
            <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 mt-4 container">
                        <h2>{item.title}</h2>
                        <img src={item.img} alt="imagen"></img>
                        <p>{item.brand}</p>             
                        <p>AR${item.price}</p>
                        <ItemCount stock = {10} initial = {1} id ={item.id} price={item.price} title ={item.title} img={item.img}> </ItemCount>
                </div>
        </>
    )


    
}

export default ItemDetails
