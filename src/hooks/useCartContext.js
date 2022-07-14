import { useState } from "react";

//Uso toda la logica de CartContext aqui.
const useCartContext = () => {

    //Declaro los hooks que voy a usar
    const [products , setProducts] = useState([]);
    const [qtyProdcuts , setQtyProducts] = useState(0);

    //Devuelve la cantidad de productos
    const quantityProducts = () => {
    let quantity = 0;
    products.forEach(elementProduct => quantity += elementProduct.quantity);

    setQtyProducts(quantity);
    }

    //Añado un producto, y si ya existe, sumo la cantidad
    const addItem = (product) =>{
        if(isInCart(product.id)){
            const foundProduct = products.find(elementProduct => elementProduct.id === product.id);
            const auxProducts = [...products];
            auxProducts[products.indexOf(foundProduct)].quantity += product.quantity;

            setProducts(auxProducts);

        }else {
            if (product.quantity <= 0 ) {
                alert("Debe agregar al menos un producto");
            } else {  
                setProducts([...products, product]);
            }
        }
        quantityProducts();
    }


    //"Quito" un producto de la lista de Cart. Basicamente le asigno a lista de productos, la misma lista pero sin el producto eliminado
    const removeItem = (productId) =>{
        setProducts(products.filter(elementProducts => elementProducts.id !== productId));
        quantityProducts();
    }

    //Me fijo si existe el producto con array.some , que me devuelve un booleano si esta el elemento en la lista o no
    const isInCart = (productId) => {
        return products.some( (elementProducts) => elementProducts.id === productId);
    }

    //Limpiar lista de productos del Cart
    const clearCart = () => {
        setProducts([]);
        quantityProducts() ;
    }
    
   

    return {
        products , qtyProdcuts , addItem , removeItem , isInCart , clearCart , quantityProducts
    }

}


export default useCartContext;