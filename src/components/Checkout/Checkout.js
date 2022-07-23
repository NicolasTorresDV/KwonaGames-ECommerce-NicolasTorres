import React from "react";
import { useParams , Link } from 'react-router-dom'; 
import './Checkout.css';

const Checkout = () => {

    const { orderid } = useParams();

  return (
    <div className="checkoutContainer">
        <p>Gracias por comprar con nosotros! </p>
        <p>El ID de su orden es: <strong>{orderid}</strong></p>
        <Link className="checkoutLink" to={"/"}> Regresar a la tienda</Link>
    </div>
  )
}


export default Checkout;