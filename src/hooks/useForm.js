import {  useContext } from "react";
import { cartContext } from "./../Context/CartContext"
import { async } from "@firebase/util";
import { database } from "./../Firebase/firebase";
import { collection , addDoc , serverTimestamp , doc, updateDoc } from "firebase/firestore"
import { useNavigate } from "react-router-dom";

//Uso toda la logica de ItemCount aqui.
const useForm = (buyerName , buyerPhone , buyerEmail) => {
    //Declaro los hooks que voy a usar
    const { products , productsFinalPrice , clearCart} = useContext(cartContext);

    const navigate = useNavigate();

    const completeShop = async () => {
        
        const orderCollection = collection(database , 'Orders');

        const orderDoc = await addDoc(orderCollection , 
            {
                buyersData: { name: buyerName , phone: buyerPhone , email: buyerEmail  },
                products: products,
                total: productsFinalPrice,
                date: serverTimestamp()
            }
        ) 
        
        //Actualizo el Stock
        products.forEach(elementProduct => {
            const updateStock = doc(database , 'Productos' , elementProduct.id)
            let newStock = (elementProduct.stock - elementProduct.quantity) 
            updateDoc(updateStock , {stock: newStock} )
        });
        
        clearCart()
        navigate(`/Checkout/${orderDoc.id}`)
    }


    return {
        completeShop
    } 

}


export default useForm;