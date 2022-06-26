import React from "react";
import useCard from "../../hooks/useItemCount";
import "./ItemCount.css"



const ItemCount = ({stock , initial}) => {
    //Llamo al hook que creé para que me traiga los datos que necesito
    const {onAdd , amount} = useCard({stock, initial}) 

    return (

            <div className="itemUnits">
                <button className="itemUnitsButton" onClick={()=>onAdd(-1)}>-</button>
                <span className="itemUnitsSpan">{amount}</span>
                <button className="itemUnitsButton" onClick={()=>onAdd(+1)}>+</button>
            </div>

    )
}

export default ItemCount;
