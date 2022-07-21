import { useState } from "react";
// import { getProducto } from "../AsyncMock/productMock"; //Traigo los datos de prueba
import { database } from "../Firebase/firebase";
import { doc , getDoc , collection } from "firebase/firestore"


const useItemDetails = () => {
    
    //Declaro los hooks que voy a usar
    const [product , setProduct] = useState({});


    const getProduct = async (id) => {
        try {
            // const productData = await getProducto(id);
            const productCollection = collection(database , 'Productos')
            const refDoc = doc(productCollection , id )
            const productDocs = await getDoc(refDoc);


            setProduct({
                id: productDocs.id,
                ...productDocs.data(),
            });
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
