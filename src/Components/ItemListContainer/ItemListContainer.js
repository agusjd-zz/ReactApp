import React from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = (props) =>{
    return(
        <div className="container">
            <div className="d-flex row">
            <ItemList/>
            </div>
        </div>
    )
}
export default ItemListContainer;