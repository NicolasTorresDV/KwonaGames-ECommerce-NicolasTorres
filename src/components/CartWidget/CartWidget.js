import React, { useContext } from "react";
import ShoppingBag from "../../assets/images/ShoppingBag.ico"
import './CartWidget.css'
import { cartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

    const { qtyProdcuts } = useContext(cartContext);
    return (
        <div className="headerCartWidgerContainer">
            <Link to={"/Cart"}><img  className="headerShoppingBag" src={ShoppingBag} alt="Logo Cart" /></Link>
            {(qtyProdcuts === 0)? "" :  <p className="headerQuantity"> {qtyProdcuts}</p>}
        </div>
    )
}

export default CartWidget;