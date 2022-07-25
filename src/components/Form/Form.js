import React, { useState } from "react";
import './Form.css';
import useForm from "../../hooks/useForm";


const Form = () => {
    const [buyerName , setBuyerName] = useState('');
    const [buyerPhone , setBuyerPhone] = useState('');
    const [buyerEmail , setBuyerEmail] = useState('');
    const { completeShop } = useForm(buyerName , buyerPhone , buyerEmail);
    
    const handleSubmit = event => {
        // Para prevenir el Reload automatico del submit
        event.preventDefault();
    
        completeShop();

      };


  return (
    <div className="formContainer">

        <form className="form" onSubmit={handleSubmit}> 
            <h2>Completa el formulario para terminar tu compra!</h2>

            <label>Nombre:</label>
            <input className="formInput" id="formName" type="text" required="required" onChange={event => setBuyerName(event.target.value)}></input>

            <label>Telefono:</label>
            <input className="formInput" id="formPhone" type="text" required="required" onChange={event => setBuyerPhone(event.target.value)}></input>

            <label>Email:</label>
            <input className="formInput" id="formEmail" type="email" required="required" onChange={event => setBuyerEmail(event.target.value)}></input>

            <div className="formButtonContainer">
                <input className="formButtonComplete" type="submit" value="Completar compra"></input>
            </div>
        </form> 
    </div>
  )
}


export default Form;
