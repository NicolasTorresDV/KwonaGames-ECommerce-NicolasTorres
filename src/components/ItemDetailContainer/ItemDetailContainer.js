import React, { useEffect }  from "react";
import useItemDetailContainer from "../../hooks/useItemDetailContainer";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"
import { useParams } from 'react-router-dom'; 
//Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetailContainer = () => {

    const { getProduct , product} = useItemDetailContainer(); 

    const { id } = useParams();

    useEffect( () => {
        getProduct(id);
    }, [id]); //Cuando haga mount este componente quiero que me traiga el producto

    return (
        <div className="itemDetailContainer">
            <ItemDetail props={product}/>
            <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable={false}
                        pauseOnHover
                        />
        </div>
    )


}



export default ItemDetailContainer;