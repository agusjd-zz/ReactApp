import React from 'react';
import ItemCount from '../ItemCount/ItemCount'
import ItemList from './ItemList/ItemList';

const ItemListContainer = (props) =>{
    return(
        <div>
            <h1>
                {props.gretting}
            </h1>
            <div className="d-flex row">
            <ItemList/>
            </div>
        </div>
    )
}
export default ItemListContainer;