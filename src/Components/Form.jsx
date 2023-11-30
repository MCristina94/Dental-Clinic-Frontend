import React, { useState } from 'react'
import Message from './Message';
import {formSt, inputData, btnForm} from '../Styles/Form.module.css'

const Form = () => {

  //state para ingresar la información del usuario, y actualizarla cuando sea necesario
  const [customer, setCustomer] = useState({
    name: '',
    email: ''
  });

  //se crean dos state para mostrar mensaje de error o el mensaje de recibido de la información suministrada por el usuario
  const [show, setShow] = useState(false); //state para el mensaje de recibido
  const [error, setError] = useState (false); //state para el mensaje de error

  //se crea el evento para el preventDefault del formulario, y el uso de los state de mensajes error y recibido
  const regex = /^[A-Za-z]{3,}( [A-Za-z]+)?$/ //regex para validar los datos que ingresan al input del name
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //regex para validar los datos que ingresan al input del email
  const handleSubmit = (event) => {
    event.preventDefault();
    if(customer.name.length >= 5 && regex.test(customer.name) && emailRegex.test(customer.email)){
        setShow(true);
        setError(false);
    }else{
        setShow(false);
        setError(true);
    }
  }
  return (  
    <div>
      <form onSubmit={handleSubmit}>
        <div className={formSt}>
          <div className={inputData}>
            <label>Name: </label>
            <input type="text" value={customer.name} onChange={(event) => setCustomer({...customer, name: event.target.value})}/>
          </div>
          <div className={inputData}>
            <label>Email: </label>
            <input type="email" value={customer.email} onChange={(event) => setCustomer({...customer, email: event.target.value})}/>
          </div>
          <div>
           <button className={btnForm}>Send</button>
          </div>
        </div>
        {show && <Message customer = {customer}/>}
        {error && <h3 style={{color: 'red' }}>Please verify your information again.</h3>}
      </form>



    </div>
  )
}

export default Form