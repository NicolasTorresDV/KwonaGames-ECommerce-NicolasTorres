import { useState } from "react";
import { getData } from "../AsyncMock/productMock"; //Traigo los datos de prueba

 //Uso toda la logica de ItemListContainer aqui.
const useProductList = () => {
    //Declaro los hooks que voy a usar
    const [products , setProducts] = useState([]);
    const [loadingPreview, setLoadingPreview] = useState(true);
    const [errorPreview, setErrorPreview] = useState(false);


    const getProducts = async (categoryid) => {
        try {
            setErrorPreview(false);
            const productData = await getData(categoryid);
            //Si esta todo ok se envia los datos de los productos en productData
            setProducts(productData);
        } catch (error) {
            //Si hay algun error, se manda la flag errorPreview para que ponga algun mensaje de error
            setErrorPreview(true);
        }finally{
            //No importa si termina ok o en error, la carga debe terminar
            setLoadingPreview(false);
        }
    }

    
    return {
        getProducts , products, loadingPreview, errorPreview
    }


}


export default useProductList;