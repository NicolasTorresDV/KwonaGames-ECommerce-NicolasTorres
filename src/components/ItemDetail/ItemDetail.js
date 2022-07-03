import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = (props)=> {


    //Declaro las variables que voy a usar de products
    const {title, description , price , pictureUrl , stock} = props.props;
    console.log(props.props.description);
    return (
        <div className="itemDetail">
            <div className="itemDetailImage">
                <img src={pictureUrl} alt={title}/>
            </div>
            <div className="itemDetailDescription">
                <div className="itemDetailDescriptionText">
                    <span className="itemDetailDescriptionTitle">{title}</span>
                    <p className="itemDetailDescriptionDescription"> <strong> Descripcion: </strong><br/>{description}</p>
                    <p className="itemDetailDescriptionPrice"><strong>Precio:</strong> {price}</p>
                </div>
                <div>
                    <p className="itemDetailDescriptionStock"> <strong>Stock:</strong> {stock}</p>
                    <ItemCount stock={stock} initial={0}/>
                </div>
            </div>
        </div>
    )

}


export default ItemDetail;