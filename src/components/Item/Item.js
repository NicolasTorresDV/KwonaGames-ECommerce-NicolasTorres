import React from "react";
import "./Item.css"

//Obtengo un producto
const Item = ({product}) => {

    //Declaro las variables que voy a usar de product
    const {title, description , price , pictureUrl , stock} = product;

    return (
            <div className="itemElements">
                <span className="itemElementsTitle"> {title}</span>
                <img src={pictureUrl} alt={title} className="itemElementsImage"/>
                <p className="itemElementsDescription">{description}</p>
                <span className="itemElementsPrice">{price}</span>
                <p className="itemElementsStock"> Stock disponible: {stock}</p>
            </div>
    )


}

export default Item;