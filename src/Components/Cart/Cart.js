import React, {useContext} from 'react';
import CartContext from '../../Context/CartContext'
import {NavLink} from 'react-router-dom'

function Cart() {
    
    const {products,delProduct, clearCart, getGrandTotal, productsCount} = useContext(CartContext);

    const handleDel = (p) => {
        delProduct(p.id);
    };
    return(
        <>
        <div className="container">
        <h2>Carrito de compras</h2>
        <div>
        {products.length === 0 ?
            (
                <>
                <p>Tu carrito está vacío!!</p>
                </>
                )
            :products.map((product) => {
                return(
                    <>
                    <div className="row">
                        <p className="col-xl-2">Producto</p>
                        <p className="col-xl-2">Cantidad</p>
                        <p className="col-xl-2">Precio por unidad</p>
                        <p className="col-xl-2">Precio total</p>
                    </div> 
                    <div className="row" key={product.id}>
                        <img src={product.img}></img>
                        <p className="col-xl-2">{product.title}</p>
                        <p className="col-xl-2">{product.number}</p>
                        <p className="col-xl-2">AR${product.price}</p>
                        <p className="col-xl-2">{(product.price * product.number)}</p>   
                        <button onClick={() => handleDel(product)}>X</button>
                    </div>
                    </>
                    
                )
            })
            }
        <div className="row">
            <div className="col-xl-4">
            <p>Cantidad de Productos:</p>
            <p>{productsCount()}</p>
            </div>
            <div className="col-xl-4">
            <p>Total Compra:</p>
            <p>${getGrandTotal()}</p>
            </div>
            <div>
                <button>Finalizar Compra</button>
            </div>
        </div>
        <NavLink to="/Store">
        <button>Volver</button>
        </NavLink>   
        <button onClick={clearCart}>Borrar todo</button>
        </div>
        </div>
        </>
    )
}

export default Cart;