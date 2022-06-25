import { useState } from "react";

const useCard = ({stock, initial}) => {

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