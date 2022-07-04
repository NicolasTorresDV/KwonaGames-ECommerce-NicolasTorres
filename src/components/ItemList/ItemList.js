import React from "react";
import Item from "../Item/Item";
import { Link } from "react-router-dom";
import "./ItemList.css"

//Obtengo la lista de productos en la variable "products"
const ItemList = ({products}) => {
    return (
        <div className="itemList">
            <h3>Lista Productos</h3>
            <div className="itemListProducts">
                {/* Por cada producto en productos, llamo al componente Item, para que me cree cada producto */}
                {products.map( (product) => <Link key={product.id}  to={`/Products/${product.id}`} className="itemListLink"> <Item key={product.id} product={product}/></Link> )}
            </div>
        </div>
    )
}


export default ItemList;