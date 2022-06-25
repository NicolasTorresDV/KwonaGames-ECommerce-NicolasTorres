import React from "react";
import useCard from "../../hooks/useItemCount";
import "./ItemCount.css"



const ItemCount = ({stock , initial, name}) => {

    const {onAdd , amount} = useCard({stock, initial}) 
    
    console.log(typeof(amount));
    return (
        <div className="infoCountContainer">
            <div className="itemInfo">
                <span className="itemInfoStock">Stock: {stock}</span>
                <span className="itemInfoName">{name}</span>
            </div>
            <div className="itemUnits">
                <button className="itemUnitsButton" onClick={()=>onAdd(-1)}>-</button>
                <span className="itemUnitsSpan">{amount}</span>
                <button className="itemUnitsButton" onClick={()=>onAdd(+1)}>+</button>
            </div>
        </div>
    )
}

export default ItemCount;
