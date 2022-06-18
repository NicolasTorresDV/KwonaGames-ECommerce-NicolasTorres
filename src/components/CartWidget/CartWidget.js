import React from "react";
import ShoppingBag from "../../assets/images/ShoppingBag.ico"
import './CartWidget.css'

const CartWidget = () => {
    return (
        <a href="#"><img  className="headerShoppingBag" src={ShoppingBag} alt="Logo Cart" /> </a>
    )
}

export default CartWidget;