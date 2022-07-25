import React, { useEffect } from "react";
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList";
import useProductList from "../../hooks/useItemListContainer";
import LoadingPreviewGif from "../../assets/images/LoadingPreviewGif.gif"
import ErrorPreviewImage from "../../assets/images/ErrorPreviewImage.png"
import { useParams } from 'react-router-dom'; 

const ItemListContainer = ({greeting}) => {

    const {getProducts , products, loadingPreview, errorPreview } = useProductList(); //Obtengo los datos que necesito desde el Hook

    const { categoryid } = useParams();

    useEffect( () => {
        getProducts(categoryid);
    }, [categoryid]); //Cuando haga mount este componente quiero que me traiga los productos

    return (
        <>
        <div className="landingContainer">
            <span>{greeting}</span> 
                     
        </div>
        <div className="itemListContainer"> 
            {/* Uso un ternario dentro de otro, para que me salga el gif de cargando, y si esta todo ok, se cargan los productos, sino se da un mensaje de error */}
            {loadingPreview ? <div className="itemListLoading"><img src={LoadingPreviewGif} alt="Cargando" /></div> : (errorPreview ? <div><img src={ErrorPreviewImage} alt="Error" /><p>Ocurrió un error</p></div>: <ItemList products={products}/>)}   
        </div>  
        </>
    )
}

export default ItemListContainer;