import React, { useEffect, useState } from 'react'
import { useDentistState } from '../Context/globalContext'
import Card from '../Components/Card';
import {favsContainer, darkTheme} from '../Styles/Favs.module.css'

const Favs = () => {
  const {state} = useDentistState();
  const [dentistSelected, useDentistSelected] = useState([]);
  useEffect(() => {
    const favorites = localStorage.getItem('favorites')
      if(favorites){
        useDentistSelected(JSON.parse(favorites))
      }
  })
  return (
    <div className={`${!state.theme ? darkTheme : undefined}`}>
      <h1 style={{margin: '0', padding: '5%'}}>Your Favorites</h1>
      
      {dentistSelected && (
        <div className={favsContainer}>
          {dentistSelected.map((dentist) => (
            <div key={dentist.id}>
              <Card dentist={dentist} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favs