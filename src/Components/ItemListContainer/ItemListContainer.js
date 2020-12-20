import React from 'react';
import ItemCount from './ItemCount/ItemCount'
const ItemListContainer = (props) =>{
    return(
        <div>
            <h1>
                {props.gretting}
            </h1>
            <ItemCount stock = {10} initial = {1}> </ItemCount>
        </div>
    )
}
export default ItemListContainer;