import axios from "axios";
import { createContext, useContext, useEffect } from "react";
import { useReducer } from "react";
import { useParams } from "react-router-dom";


const DentistStates = createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'GET-DENTISTS': //Trae la información de la api y la guarda en la lista (dentistList)
            return {...state, dentistList: action.payload}
        case 'ADD-FAVS' :
            return {...state, favs: [...state.favs, action.payload]}
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