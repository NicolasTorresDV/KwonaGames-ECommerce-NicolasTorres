import React from "react";
import useCard from "../../hooks/useItemCount";
import "./ItemCount.css"



const ItemCount = ({stock , initial , finishShop}) => {
    //Llamo al hook que creé para que me traiga los datos que necesito
    const {onAdd , amount} = useCard({stock, initial}) 

    return (
        <div>
            <div className="itemUnits">
                <button className="itemUnitsButton" onClick={()=>onAdd(-1)}>-</button>
                <span className="itemUnitsSpan">{amount}</span>
                <button className="itemUnitsButton" onClick={()=>onAdd(+1)}>+</button>
            </div>
            <div>
                <button onClick={() => finishShop(amount)} className="itemUnitsAdd">Agregar al carrito</button>
            </div>
        </div>

    )
}

export default ItemCount;
