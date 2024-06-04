import React from 'react'
import Unavbar from './Unavbar'
import Banner from '../Components/Banner'
import Services from '../Components/Services'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import Temples from './Temples'
import '../Components/navbar.css'

const Uhome = () => {
  return (
    <div className='class' >
        <Unavbar/>
        <div>
        <Banner/>
        <Temples/>
        <Services/>
        <Footer/>
        </div>
 
    </div>
  )
}

export default Uhome