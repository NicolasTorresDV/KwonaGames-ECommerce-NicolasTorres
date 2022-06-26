import React from "react";
import Item from "../Item/Item";
import "./ItemList.css"

//Obtengo la lista de productos en la variable "products"
const ItemList = ({products}) => {
    return (
        <div className="itemList">
            <h3>Lista Productos</h3>
            <div className="itemListProducts">
                {/* Por cada producto en productos, llamo al componente Item, para que me cree cada producto */}
                {products.map( (product) => <Item key={product.id} product={product}/> )}
            </div>
        </div>
    )
}


export default ItemList;