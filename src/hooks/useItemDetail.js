import { useState, useContext } from "react";
import { cartContext } from "../Context/CartContext";
//Toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 //Uso toda la logica de ItemDetail aqui.
const useItemDetail = (product) => {
    //Declaro los hooks que voy a usar
    const [productsAdded , setProductsAdded] = useState(false);
    const { addItem , products } = useContext(cartContext);
    const auxProduct = products.find( elementProduct => elementProduct.id === product.id)


    const finishShop = (amount) => { //Cuando agrego los productos al carrito, cambio el estado de ProductAdded para que desaparezca y aparezca el boton finalizar
        if (amount <= 0 ) {
            toast.error('Debes agregar al menos un producto', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                });
        }
        else{
            if (auxProduct === undefined || (auxProduct.quantity + amount) <= auxProduct.stock) {
                
                addItem({...product, quantity: amount})
                setProductsAdded(true)
            } else {
                toast.error(`Compra supera Stock. Ya tienes en tu carrito ${auxProduct.quantity}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    })
            }

        }
    }

    
    return {
        finishShop , productsAdded
        
    }


}

export default useItemDetail;