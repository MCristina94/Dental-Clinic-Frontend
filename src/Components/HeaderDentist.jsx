import React from 'react'
import logo from '../Img/dentalcare.png'
import {headerFlex, btnTheme, imgHeader, darkTheme } from '../Styles/Header.module.css'
import { useDentistState} from '../Context/globalContext';

const HeaderDentist = () => {
  const {state, dispatch} = useDentistState();
  function changeTheme () {
    dispatch({type: 'CHANGE-THEME'})
  }
  return (
    <div className={`${headerFlex} ${!state.theme ? darkTheme : undefined}`}>
      <div>
        <img className= {imgHeader} src={logo} alt="Logo Dentist" />
      </div>
      <div>
        <button className={btnTheme} onClick={changeTheme}>Theme {state.theme ? '☀️':'🌑'}</button>
      </div>
    </div>
  )
}

export default HeaderDentist