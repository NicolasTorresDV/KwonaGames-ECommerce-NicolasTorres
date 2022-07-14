import React, { useContext } from "react";
import ShoppingBag from "../../assets/images/ShoppingBag.ico"
import './CartWidget.css'
import { cartContext } from "../../Context/CartContext";

const CartWidget = () => {

    const { qtyProdcuts } = useContext(cartContext);
    return (
        <div className="headerCartWidgerContainer">
            <a href="#"><img  className="headerShoppingBag" src={ShoppingBag} alt="Logo Cart" /></a>
            <p className="headerQuantity"> {qtyProdcuts}</p>
        </div>
    )
}

export default CartWidget;