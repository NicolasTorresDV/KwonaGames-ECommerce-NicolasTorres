import { useState } from "react";

//Uso toda la logica de ItemCount aqui.
const useCard = ({stock, initial}) => {
    //Declaro los hooks que voy a usar
    const [amount , setAmount] = useState(initial);

    const onAdd = (value) => {
        if ((amount + value) <= stock && (amount + value) >= 0) {
            setAmount(amount+value);
        }
    }

    return {
        onAdd , amount
    }

}


export default useCard;