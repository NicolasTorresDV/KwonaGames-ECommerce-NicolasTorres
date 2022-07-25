import { useState } from "react";

//Uso toda la logica de CartContext aqui.
const useCartContext = () => {

    let productsStorage = [];
    if (localStorage.getItem("ProductosCarrito") == null) {
        localStorage.setItem("ProductosCarrito",JSON.stringify(productsStorage));
    }else{
        productsStorage = JSON.parse(localStorage.getItem('ProductosCarrito'));
    }

    //Declaro los hooks que voy a usar
    const [products , setProducts] = useState(productsStorage);
    const [qtyProdcuts , setQtyProducts] = useState(0);
    const [productsFinalPrice  , setProductsFinalPrice] = useState(0);
 
    //Devuelve la cantidad de productos
    const quantityProducts = () => {
    let quantity = 0;
    products.forEach(elementProduct => quantity += elementProduct.quantity);

    setQtyProducts(quantity);
    }

    //Total final
    const productsTotal = () => {
        let totalPrice = 0;
        products.forEach(elementProduct => {
            totalPrice += parseInt(elementProduct.priceNum) * parseInt(elementProduct.quantity)
        })

        setProductsFinalPrice(totalPrice)

    }

    //Añado un producto, y si ya existe, sumo la cantidad
    const addItem = (product) =>{
        if(isInCart(product.id)){
            const foundProduct = products.find(elementProduct => elementProduct.id === product.id);
            const auxProducts = [...products];
            auxProducts[products.indexOf(foundProduct)].quantity += product.quantity;

            setProducts(auxProducts);

        }else {
            if (product.quantity > 0 ) {
                setProducts([...products, product]);
            }
        }
        quantityProducts();
        productsTotal();
    }


    //"Quito" un producto de la lista de Cart. Basicamente le asigno a lista de productos, la misma lista pero sin el producto eliminado
    const removeItem = (productId) =>{
        const auxProducts = products.filter(elementProducts => elementProducts.id !== productId);
        setProducts(auxProducts);
        quantityProducts();
        productsTotal();
    }

    //Me fijo si existe el producto con array.some , que me devuelve un booleano si esta el elemento en la lista o no
    const isInCart = (productId) => {
        return products.some( (elementProducts) => elementProducts.id === productId);
    }

    //Limpiar lista de productos del Cart
    const clearCart = () => {
        setProducts([]);
        quantityProducts() ;
        productsTotal();
    }

    //Actualizar lista de productos en localStorage

    const updateLocalStorage = () => {
        localStorage.setItem('ProductosCarrito' , JSON.stringify(products));
    }
    
   

    return {
        products , qtyProdcuts , productsFinalPrice , addItem , removeItem , isInCart , clearCart , quantityProducts , productsTotal , updateLocalStorage
    }

}


export default useCartContext;