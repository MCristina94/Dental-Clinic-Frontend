import React, { useEffect, useState } from 'react'
import { useDentistState } from '../Context/globalContext'
import avatar from '../Img/dentalavatar.png'
import { Link } from 'react-router-dom';
import {card, imgCard, buttonCard, darkTheme, linkDarkTheme} from '../Styles/Card.module.css'

const Card = ({dentist}) => {
  
  const {state, dispatch} = useDentistState();
  const [isFavorite, setIsFavorite] = useState(false);
    
  useEffect(() => {
    const findFav = state.favs.find(fav => fav.id === dentist.id);
    if(findFav){
      setIsFavorite(true);
    }
  }, [])
  function dentistStorage () {
    if(isFavorite){
      dispatch({type: 'DELETE-FAV', payload: dentist})
      setIsFavorite(false);
    }else{
      dispatch({type: 'ADD-FAVS', payload: dentist })  
      setIsFavorite(true);
    }
    
    
   }
 
  //Ingresa la información de cada dentista, la cual proviene de dentistList
  //Se trae el dispatch de useDentistState, para guardar los favoritos en el localstorage y poder renderizarlos
  

  return (
    <div className={`${card} ${!state.theme ? darkTheme : undefined}`} >
     
      <Link to={'/detail/' + dentist.id} >
        <img className={imgCard} src={avatar} alt="avatar" /> 
        <h3 className={`${state.theme ? undefined : linkDarkTheme }`} style={{margin: '0'}}>{dentist.name}</h3>
        <h4 className={`${state.theme ? undefined : linkDarkTheme }`} style={{margin: '0'}}>{dentist.username}</h4>
      </Link>
      <div style={{display:'flex', flexDirection: 'column'}}>
        <h4 >Location: {dentist.address.city}</h4>
        <button className = {buttonCard} onClick={dentistStorage}>{isFavorite? <i className="fa-solid fa-star" style={{color: "#FFD700"}}></i> : <i className="fa-regular fa-star" style={state.theme ? {undefined} : {color: '#FFFFFF'}}></i> }</button>
      </div>
        
      </div>
   
  )
}

export default Card