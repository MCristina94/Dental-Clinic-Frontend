import React, { useEffect, useState } from 'react'
import { useDentistState } from '../Context/globalContext'
import Card from '../Components/Card';
import {favsContainer, darkTheme} from '../Styles/Favs.module.css'

const Favs = () => {
  const {state, dispatch} = useDentistState();
  useEffect(() => {
    dispatch({type: 'LOAD-FAVS'})
  }, [])
  return (
    <div className={`${!state.theme ? darkTheme : undefined}`}>
      <h1 style={{margin: '0', padding: '5%'}}>Your Favorites</h1>
      
      {state.favs && (
        <div className={favsContainer}>
          {state.favs.map((dentist) => (
            <Card key={dentist.id} dentist={dentist} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favs