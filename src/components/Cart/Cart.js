import React, { useContext, useState } from "react";
import './Cart.css';
import { cartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom";
import Form from "./../Form/Form"

const Cart = ()=> {

    const { products , removeItem , clearCart , productsFinalPrice} = useContext(cartContext);
    let totalPrice = 0;

    return(
        (products.length === 0 ) ? 
        <div className="Cart">
            <div >No hay nada en tu carrito. <Link to="/"> Compra aquí</Link></div>
        </div>
        :
            <div className="buyContainer">
                <div className="productsTotalContainer">
                    <div className="cartProductsContainer">
                    {
                        products.map((elementProduct) => (
                            <div className="cartContainer" key={elementProduct.id}>
                                <div className="cartProductContainer">
                                    <div className="cartImgContainer" >
                                        <img className="cartImg" src={elementProduct.pictureUrl}/>
                                    </div>
                                    <div className="cartDetailsContainer">
                                        <p className="cartDetailsTitle">{elementProduct.title}</p>
                                        <p className="cartDetailsPrice">Precio: {elementProduct.price}</p>
                                        <p className="cartDetailsAmount">Unidades: {elementProduct.quantity}</p>
                                    </div>                           
                                </div>
                                <div className="cartButtonContainer">
                                    <button onClick={() => {removeItem(elementProduct.id);}} className="cartButton">Eliminar</button>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                    <div className="cartTotal">
                        <span>Total: USD$ {productsFinalPrice}</span>
                        <button onClick={clearCart} className="cartClean">Limpiar carrito</button>
                    </div>
                </div>
            <Form></Form>
            </div>
    )

}


export default Cart;