import { useState } from "react";

 //Uso toda la logica de ItemDetail aqui.
const useItemDetail = () => {
    //Declaro los hooks que voy a usar
    const [productsAdded , setProductsAdded] = useState(true);


    const finishShop = () => { //Cuando agrego los productos al carrito, cambio el estado de ProductAdded para que desaparezca y aparezca el boton finalizar
        setProductsAdded(false);
    }

    
    return {
        finishShop , productsAdded
    }


}

export default useItemDetail;