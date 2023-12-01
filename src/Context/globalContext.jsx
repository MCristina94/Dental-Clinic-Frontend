import axios from "axios";
import { createContext, useContext, useEffect } from "react";
import { useReducer } from "react";
import { useParams } from "react-router-dom";


const DentistStates = createContext();

const reducer = (state, action) => {
    console.log(action.type);
    switch(action.type){
        case 'GET-DENTISTS': //Trae la información de la api y la guarda en la lista (dentistList)
            return {...state, dentistList: action.payload}
        case 'ADD-FAVS' :
            const favs = [...state.favs, action.payload]
            localStorage.setItem('favorites', JSON.stringify(favs))
            return {...state, favs}
        case 'LOAD-FAVS' :
            const favorites = localStorage.getItem('favorites')
            if(favorites){
                return {...state, favs:JSON.parse(favorites) }
            }
            return {...state}
        case 'DELETE-FAV': 
            const currentFavs = state.favs.filter(fav => fav.id !== action.payload.id)
            localStorage.setItem('favorites', JSON.stringify(currentFavs))
            return {...state, favs: currentFavs}
        case 'CHANGE-THEME' :
            return {...state, theme: !state.theme}
    }
}

const initialState = {
    dentistList: [], 
    favs: [],
    theme: true
}

const Context = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const url = 'https://jsonplaceholder.typicode.com/users'; //Dirección de la api donde se almacena la información de cada dentista

    //Se realiza llamado a la api por medio de axios, enviando su respuesta por useReducer
    useEffect(() => {
        axios(url)
        .then(res => dispatch({type: 'GET-DENTISTS', payload: res.data}))
    }, [])
    


    return (
        //Se envia la información de state y dispatch por medio del useContext para ser utilizada en los componentes
        <DentistStates.Provider value={{
            state, dispatch
        }}>
            {children}
        </DentistStates.Provider>
    )



}

export default Context

//Función para facilitar la llamada del useContext en los componentes
export const useDentistState = () => useContext(DentistStates);