import React, {useContext} from 'react';
import CartContext from '../../Context/CartContext'

function Cart() {
    const { quantity, productId, productPrice, productTitle } = useContext(CartContext);

    return(
        <>
        <div>
            <p>{productId}</p>
            <p>{quantity}</p>
            <p>{productPrice}</p>
            <p>{productTitle}</p>
        </div>
        </>
    )
}

export default Cart;