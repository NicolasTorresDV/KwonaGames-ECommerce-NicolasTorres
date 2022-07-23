import { useState } from "react";
import { database } from "../Firebase/firebase";
import { getDocs , collection , query, where } from "firebase/firestore"

 //Uso toda la logica de ItemListContainer aqui.
const useProductList = () => {
    //Declaro los hooks que voy a usar
    const [products , setProducts] = useState([]);
    const [loadingPreview, setLoadingPreview] = useState(true);
    const [errorPreview, setErrorPreview] = useState(false);


    const getProducts = async (categoryid) => {
        try {
            setErrorPreview(false);
            const productsCollection = collection(database, 'Productos');
            
            //Si el category es undefined, traigo todos los productos de ProductCollection, sino lo filtro pro categoryId en la query
            const queryCategories = categoryid ? query(productsCollection , where('categoryid', '==' , categoryid )) : productsCollection;

            //Asigno los datos de queryCategories a productDocs
            const productDocs = await getDocs(queryCategories);

            const productData = productDocs.docs.map (
                elementProduct => {
                    return {
                        id: elementProduct.id,
                        ...elementProduct.data()
                    }
                }
            )
            
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