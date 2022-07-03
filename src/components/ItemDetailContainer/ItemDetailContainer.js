import React, { useEffect }  from "react";
import useItemDetailContainer from "../../hooks/useItemDetailContainer";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

    const { getProduct , product} = useItemDetailContainer(); 

    useEffect( () => {
        getProduct();
        console.log(product);
    }, []); //Cuando haga mount este componente quiero que me traiga el producto

    return (
        <div className="itemDetailContainer">
            <ItemDetail props={product}/>
        </div>
    )


}



export default ItemDetailContainer;