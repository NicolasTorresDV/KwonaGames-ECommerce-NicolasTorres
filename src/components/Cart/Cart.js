import React, { useContext, useState } from "react";
import './Cart.css';
import { cartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom";

const Cart = ()=> {

    const { products , removeItem , clearCart } = useContext(cartContext);
    let totalPrice = 0;

    useState(
        () => {totalPrice = 0}
        ,
        []
    );

    return(
        (products.length === 0 ) ? 
        <>
            <div className="Cart">
                <div >No hay nada en tu carrito. <Link to="/"> Compra aquí</Link></div>
            </div>
        </>
        :
        <>
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
                            <button onClick={() => {removeItem(elementProduct.id); console.log(products);}} className="cartButton">Eliminar</button>
                        </div>
                    </div>
                ))
            }

            <div className="cartTotal">
                <span>Total: USD$ {products.forEach(elementProduct => {
                    totalPrice += parseInt(elementProduct.priceNum) * parseInt(elementProduct.quantity)
                })
                } {totalPrice}</span>
                <button onClick={clearCart} className="cartClean">Limpiar carrito</button>
            </div>
        </> 
    )

}


export default Cart;