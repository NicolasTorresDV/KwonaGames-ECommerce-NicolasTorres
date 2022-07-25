import { useState } from "react";
import { database } from "../Firebase/firebase";
import { doc , getDoc , collection } from "firebase/firestore"
//Toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const useItemDetails = () => {
    
    //Declaro los hooks que voy a usar
    const [product , setProduct] = useState({});


    const getProduct = async (id) => {
        try {
            const productCollection = collection(database , 'Productos')
            const refDoc = doc(productCollection , id )
            const productDocs = await getDoc(refDoc);


            setProduct({
                id: productDocs.id,
                ...productDocs.data(),
            });
        } catch (error) {
            //Si hay algun error, mando una notificacion
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
    }


    return {
        getProduct , product
    }

}




export default useItemDetails;
