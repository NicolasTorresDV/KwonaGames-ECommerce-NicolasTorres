import React from "react";
import "./ItemListContainer.css"
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({greeting}) => {
    return (
        <>
        <div className="landingContainer">
            <span>{greeting}</span> 
                     
        </div>
        <div className="tempClass">
            <ItemCount stock={5} initial={0} name="PlayStation 5"/>
            <ItemCount stock={20} initial={3} name="PlayStation 5 Pro"/>
            <ItemCount stock={15} initial={5} name="PlayStation 5 Modo Messi"/>
        </div>  
        </>
    )
}

export default ItemListContainer;