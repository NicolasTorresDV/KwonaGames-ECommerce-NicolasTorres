import React from "react";
import "./ItemListContainer.css"

const ItemListContainer = ({greeting}) => {
    return (
        <div className="landingContainer">
            <span>{greeting}</span>
        </div>
    )
}

export default ItemListContainer;