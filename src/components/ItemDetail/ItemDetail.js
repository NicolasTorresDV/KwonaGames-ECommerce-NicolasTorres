import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom";
import useItemDetail from "../../hooks/useItemDetail";

const ItemDetail = (props)=> {


    //Declaro las variables que voy a usar de products
    const {title, description , price , pictureUrl , stock} = props.props;
    const product = props.props;
    const {finishShop , productsAdded} = useItemDetail(product);

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
                <Link className="itemDetailLink" to={`/Cart`}><button className="itemDetailFinish">Finalizar</button></Link>
                : 
                <div>
                    <p className="itemDetailDescriptionStock"> <strong>Stock:</strong> {stock}</p>
                    <ItemCount stock={stock} initial={0} finishShop={finishShop}/>
                </div>
                }
            </div>
        </div>
    )

}


export default ItemDetail;