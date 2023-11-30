import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes, useParams } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Favs from './Pages/Favs'
import Detail from './Pages/Detail'
import Footer from './Components/Footer'
import HeaderDentist from './Components/HeaderDentist'

function App() {
  
  return (
    <>
      <HeaderDentist/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/favs' element={<Favs/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
