import React, { useEffect } from "react";
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList";
import useProductList from "../../hooks/useItemListContainer";
import LoadingPreviewGif from "../../assets/images/LoadingPreviewGif.gif"
import ErrorPreviewImage from "../../assets/images/ErrorPreviewImage.png"

const ItemListContainer = ({greeting}) => {

    const {getProducts , products, loadingPreview, errorPreview } = useProductList(); //Obtengo los datos que necesito desde el Hook


    useEffect( () => {
        getProducts();
    }, []); //Cuando haga mount este componente quiero que me traiga los productos

    return (
        <>
        <div className="landingContainer">
            <span>{greeting}</span> 
                     
        </div>
        <div className="itemListContainer"> 
            {/* Uso un ternario dentro de otro, para que me salga el gif de cargando, y si el "Fetch" da ok, se cargan los productos, sino se da un mensaje de error */}
            {loadingPreview ? <img src={LoadingPreviewGif} alt="Cargando" /> : (errorPreview ? <div><img src={ErrorPreviewImage} alt="Error" /><p>Ocurrió un error</p></div>: <ItemList products={products}/>)}   
        </div>  
        </>
    )
}

export default ItemListContainer;