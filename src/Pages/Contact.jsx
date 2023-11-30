import React from 'react'
import Form from '../Components/Form'
import { useDentistState } from '../Context/globalContext'
import {darkTheme} from '../Styles/Contact.module.css'

const Contact = () => {
  const {state} = useDentistState();
  return (
    <div className={`${!state.theme ? darkTheme : undefined}`}>
      <h1 style={{margin: '0', padding: '2%'}}>Hello!</h1>
      <h2>Get in contact with us</h2>
      <Form/>
    </div>
  )
}

export default Contact