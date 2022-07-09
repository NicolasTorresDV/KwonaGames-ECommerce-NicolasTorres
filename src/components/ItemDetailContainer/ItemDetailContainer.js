import React, { useEffect }  from "react";
import useItemDetailContainer from "../../hooks/useItemDetailContainer";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"
import { useParams } from 'react-router-dom'; 

const ItemDetailContainer = () => {

    const { getProduct , product} = useItemDetailContainer(); 

    const { id } = useParams();

    useEffect( () => {
        getProduct(id);
    }, [id]); //Cuando haga mount este componente quiero que me traiga el producto

    return (
        <div className="itemDetailContainer">
            <ItemDetail props={product}/>
        </div>
    )


}



export default ItemDetailContainer;