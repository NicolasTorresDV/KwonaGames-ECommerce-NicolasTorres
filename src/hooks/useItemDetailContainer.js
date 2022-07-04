import { useState } from "react";
import { getProducto } from "../AsyncMock/productMock"; //Traigo los datos de prueba


const useItemDetails = () => {
    
    //Declaro los hooks que voy a usar
    const [product , setProduct] = useState({});


    const getProduct = async (id) => {
        try {
            const productData = await getProducto(id);
            setProduct(productData[0]);
        } catch (error) {
            //Si hay algun error, mando un alert
            alert("Ocurrió un error al cargar el detalle del producto " + error);
        }
    }


    return {
        getProduct , product
    }

}




export default useItemDetails;
