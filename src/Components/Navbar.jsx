import React from 'react'
import {nav, linkNav, darkTheme} from '../Styles/Navbar.module.css'
import { Link } from 'react-router-dom'
import { useDentistState } from '../Context/globalContext'

const Navbar = () => {
  const {state} = useDentistState();
  return (
    //La pagina tiene tres pages principales: home donde se redenrizan las cards de dentist
    //Contact para enviar los datos del usuario y favs donde se renderizan las cards de dentist preferidos por el usuario
    <div className={`${nav} ${!state.theme ? darkTheme : undefined}`}>
      <Link className = {linkNav} to = '/'> <h4>Home</h4></Link>
      <Link className = {linkNav} to = '/contact' ><h4>Contact</h4></Link>
      <Link className = {linkNav} to = '/favs'> <h4>Favs</h4></Link>
      {/*<button className={btnTheme}>Theme {state.theme ? '🌞':'🌚'}</button>*/}
    </div>
  )
}

export default Navbar