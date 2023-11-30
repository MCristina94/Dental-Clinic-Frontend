import React from 'react'
import { useDentistState } from '../Context/globalContext'
import Card from '../Components/Card';
import {cardFlex, pImgFlex, pHome, imgHome, darkTheme} from '../Styles/Home.module.css'
import girl from '../Img/lady.jpg'

const Home = () => {
  
  //Se hace el llamado al useContext y se guarda en una variable
  const {state} = useDentistState();
  console.log({state});

  return (
    <div className={`${!state.theme ? darkTheme : undefined}`}>
      <h1 style={{padding: '2%', margin: '0'}}>Dental Clinic - Enjoy a lot more</h1>
      <div className={pImgFlex}>
        <div className={pHome}>
          <h2 style={{color: '#008CCE', fontSize: '30px' }}>Welcome to Dental Clinic!</h2>
          <p style={{textAlign: 'left', fontSize: '20px'}}>
            We are a specialized clinic dedicated to enhancing your dental health and aesthetics. 
            On our website, you can get acquainted with the highly skilled professionals who are part of our clinic. Additionally, 
            we provide the convenience of adding your favorite professionals to your list, and you can explore detailed information 
            about each one.</p>
          <p style={{textAlign: 'left', fontSize: '20px'}}>
            If you wish to get in touch with us, simply fill out the form available on the 'Contact' tab. We will be delighted to 
            receive your information and will get back to you as soon as possible via email. At Dental Clinic, we are committed to 
            your dental well-being and aim to provide you with a unique and personalized experience. Thank you for visiting our website 
            and trusting us with your oral health!</p>
        </div>
        <div>
          <img className={imgHome} src={girl} alt="" />
        </div>
      </div>
      <div className={cardFlex}>
        {/**Se recorre la lista de los dentistas, y se envia la información a la card, la cual renderiza la información necesaria */}
        {state.dentistList.map(dentist => <Card key = {dentist.id} dentist = {dentist}/>)}
      </div>
    </div>
  )
}

export default Home