import React, { createContext , useEffect, useState } from "react";
import useCartContext from "../hooks/useCartContext";

export const cartContext = createContext();
const { Provider } = cartContext;

export const CartCustomProvider = ( { children } ) => {

    const {products , qtyProdcuts , addItem , removeItem , isInCart , clearCart , quantityProducts} = useCartContext();

    useEffect(() => {
        quantityProducts()
    }, [products]);


    return(
        <Provider value={ {products , qtyProdcuts , addItem , removeItem , isInCart , clearCart , quantityProducts} }>
            { children }
        </Provider> 
    )

}
