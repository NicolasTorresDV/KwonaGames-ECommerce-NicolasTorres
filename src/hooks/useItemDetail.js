import { useState, useContext } from "react";
import { cartContext } from "../Context/CartContext";

 //Uso toda la logica de ItemDetail aqui.
const useItemDetail = (product) => {
    //Declaro los hooks que voy a usar
    const [productsAdded , setProductsAdded] = useState(false);
    const { addItem } = useContext(cartContext);


    const finishShop = (amount) => { //Cuando agrego los productos al carrito, cambio el estado de ProductAdded para que desaparezca y aparezca el boton finalizar
        if (amount <= 0 ) {
            alert("Debe agregar al menos un producto");
        }
        else{
            addItem({...product, quantity: amount});
            setProductsAdded(true);
        }
    }

    
    return {
        finishShop , productsAdded
    }


}

export default useItemDetail;