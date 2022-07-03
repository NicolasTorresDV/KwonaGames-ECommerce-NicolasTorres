import { useState } from "react";
import getData from "../AsyncMock/productMock"; //Traigo los datos de prueba


const useItemDetails = () => {
    
    //Declaro los hooks que voy a usar
    const [product , setProduct] = useState({});


    const getProduct = async () => {
        try {
            const productData = await getData;
            //Si esta todo ok mando un producto (Hardcodeado)
            setProduct(productData[2]);
        } catch (error) {
            //Si hay algun error, mando un alert
            alert("Ocurrió un error al cargar el detalle del producto");
        }
    }


    return {
        getProduct , product
    }

}




export default useItemDetails;
