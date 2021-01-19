import React, {createContext, useState, useEffect} from 'react';
import { productDetails } from '../Components/Item/products';

const ProductContext = createContext();
console.log(productDetails)

function ProductContextProvider({children}) {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const promise = new Promise((resolve, reject) => {
                resolve(productDetails);
            });
            promise.then(productDetails => {
                setProduct(productDetails);
            })
        }, 100);
    },[])


    return(
        <ProductContext.Provider value={product}>
            {children}
        </ProductContext.Provider>
    )
}


export default ProductContext;
export {ProductContextProvider};