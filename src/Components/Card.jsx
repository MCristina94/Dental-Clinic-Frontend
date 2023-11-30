import React, { useEffect, useState } from 'react'
import { useDentistState } from '../Context/globalContext'
import avatar from '../Img/dentalavatar.png'
import { Link } from 'react-router-dom';
import {card, imgCard, buttonCard, darkTheme} from '../Styles/Card.module.css'

const Card = ({dentist}) => {
  
  const {state, dispatch} = useDentistState();
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(()=> {
    localStorage.setItem('favorites', JSON.stringify([...state.favs]));
   }, [state.favs])
  
  function dentistStorage () {
    const findFav = state.favs.find(fav => dentist.id === fav.id);
    if(findFav){
      alert('Ya existe en tu lista de favoritos')
    }else{
      dispatch({type: 'ADD-FAVS', payload: dentist })  
      localStorage.setItem('favorites', JSON.stringify([...state.favs]))   
      setIsFavorite(true);
    }
    
   }
 
  //Ingresa la información de cada dentista, la cual proviene de dentistList
  //Se trae el dispatch de useDentistState, para guardar los favoritos en el localstorage y poder renderizarlos
  

  return (
    <div className={`${card} ${!state.theme ? darkTheme : undefined}`} >
     
      <Link to={'/detail/' + dentist.id} >
        <img className={imgCard} src={avatar} alt="avatar" /> 
        <h3 style={{margin: '0'}}>{dentist.name}</h3>
        <h4 style={{margin: '0'}}>{dentist.username}</h4>
      </Link>
      <div style={{display:'flex', flexDirection: 'column'}}>
        <h4 >Location: {dentist.address.city}</h4>
        <button className = {buttonCard}onClick={dentistStorage}>{isFavorite? '💫' : '⭐'}</button>
      </div>
        
      </div>
   
  )
}

export default Card