import { useState } from "react";
import { getCategories } from "../AsyncMock/productMock"; //Traigo los datos de prueba

 //Uso toda la logica de NavBar aqui.
const useProductCategories = () => {
    //Declaro los hooks que voy a usar
    const [navItems , setNavItems] = useState([]);

    const getProductsCategories = async () => {
        try {
            const productData = await getCategories;
            let counter = 0;
            let navItemsAux = [];
            productData.forEach(element => {
                let newNavItem = {
                    id: counter,
                    label: element.categoryid,
                    route: `/Categories/${element.categoryid}`
                }
        
                navItemsAux.push(newNavItem);
                counter++;
            });
            setNavItems(navItemsAux);

        } catch (error) {
            console.log("Error al traer categorias de productos" + error);
        }
    }
    
    return {
        getProductsCategories , navItems
    }


}

export default useProductCategories;