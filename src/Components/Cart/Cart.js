import React, {useContext} from 'react';
import {useCartContext} from "../../Context/CartContext"
import {NavLink} from 'react-router-dom'
import "./Cart.css"

function Cart() {
    
    const {cart, totalPrice, removeItem, clearCart} = useCartContext();

    return (
        <div>
            <h1>Carrito</h1>
            {
                cart.length > 0 ?
                <div>
                    {cart.map((product, index) => {
                        return (
                            <>
                            <div className="row">
                            <p className="col-xl-2">Producto</p>
                            <p className="col-xl-2">Cantidad</p>
                            <p className="col-xl-2">Precio por unidad</p>
                            <p className="col-xl-2">Precio total</p>
                            </div> 
                            <div key={index} className="row">
                                <img src={product.item.img} className="img-cart"></img>
                                <p className="col-xl-2"><strong>{product.item.title}</strong></p>
                                <p className="col-xl-2">{product.cantidad}</p>
                                <p className="col-xl-2">AR${product.item.price}</p>
                                <p className="col-xl-2">AR${product.item.price * product.cantidad}</p>
                                <button onClick={() => removeItem(product.item.id, product.item.price * product.cantidad, product.cantidad)}>X</button>
                            </div>
                            </>
                        )
                    })}
                    <div className="row">
                    <div className="col-xl-4">
                        <p>Total Compra:</p>
                        <p>${totalPrice}</p>
                    </div>
                    <div className="col-xl-4">
                    {cart.length > 0 && <button className="btn btn-success" onClick={clearCart}>Vaciar carrito</button>}
                    </div>
                    <div>
                        <button className="btn btn-success">Finalizar Compra</button>
                    </div>
                    </div>
                </div> :
                <>
                    <div className="carritoVacioMensaje">
                        <p>El carrito está vacío</p>
                       Volver al inicio
                    </div>
                </>
            }
        </div>
    )
}

export default Cart;