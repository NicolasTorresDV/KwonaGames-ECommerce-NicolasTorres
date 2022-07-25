import { useState } from "react";
import { database } from "../Firebase/firebase";
import { getDocs , collection} from "firebase/firestore"

 //Uso toda la logica de NavBar aqui.
const useProductCategories = () => {
    //Declaro los hooks que voy a usar
    const [navItems , setNavItems] = useState([]);

    const getProductsCategories = async () => {
        try {

            const categoriesCollection = collection(database, 'Categories');
            const categoriesDocs = await getDocs(categoriesCollection)

            let counter = 0;
            let navItemsAux = [];
            categoriesDocs.docs.forEach(element => {
                let newNavItem = {
                    id: counter,
                    label: element.data().categoryid,
                    route: `/Categories/${element.data().categoryid}`
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