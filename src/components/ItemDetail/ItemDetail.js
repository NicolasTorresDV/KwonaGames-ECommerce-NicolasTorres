import React, { useEffect, useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom";
import useItemDetail from "../../hooks/useItemDetail";

const ItemDetail = (props)=> {


    //Declaro las variables que voy a usar de products
    const {title, description , price , pictureUrl , stock} = props.props;
    const {finishShop , productsAdded} = useItemDetail();

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
                {
                    productsAdded ? 
                <div>
                    <p className="itemDetailDescriptionStock"> <strong>Stock:</strong> {stock}</p>
                    <ItemCount stock={stock} initial={0} finishShop={finishShop}/>
                </div>
                : <Link className="itemDetailLink" to={`/Cart`}><button className="itemDetailFinish">Finalizar</button></Link>
                }
            </div>
        </div>
    )

}


export default ItemDetail;