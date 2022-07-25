import React, { createContext , useEffect, useState } from "react";
import useCartContext from "../hooks/useCartContext";

export const cartContext = createContext();
const { Provider } = cartContext;

export const CartCustomProvider = ( { children } ) => {

    const {products , qtyProdcuts, productsFinalPrice , addItem , removeItem , isInCart , clearCart , quantityProducts , productsTotal , updateLocalStorage} = useCartContext();

    useEffect(() => {
        quantityProducts()
        productsTotal()
        updateLocalStorage()
    }, [products]);


    return(
        <Provider value={ {products , qtyProdcuts, productsFinalPrice , addItem , removeItem , isInCart , clearCart , quantityProducts , productsTotal} }>
            { children }
        </Provider> 
    )

}
