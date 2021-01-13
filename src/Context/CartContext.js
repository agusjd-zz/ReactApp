import React, {createContext, useState} from 'react';

const CartContext = createContext();

function CartContextProvider({children}){
    const [quantity, setQuantity] = useState();
    const [id, setId] = useState();
    const [price, setPrice] = useState();
    const [title, setTitle] = useState()

    const datos = { quantity, id, price, title } 

    return(
        <CartContext.Provider value={{ quantity, setQuantity, id, setId, price, setPrice, title, setTitle, datos }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContext;
export {CartContextProvider};