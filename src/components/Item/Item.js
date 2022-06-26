import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css"

//Obtengo un producto
const Item = ({product}) => {

    //Declaro las variables que voy a usar de product
    const {title, description , price , pictureUrl , stock} = product;

    return (
        <div className="itemWrap">
            <div className="itemElements">
                <span className="itemElementsTitle"> {title}</span>
                <img src={pictureUrl} alt={title} className="itemElementsImage"/>
                <p className="itemElementsDescription">{description}</p>
                <span className="itemElementsPrice">{price}</span>
                <p className="itemElementsStock"> Stock disponible: {stock}</p>
            </div>
                <ItemCount stock={stock} initial={0}/>
        </div>
    )


}

export default Item;