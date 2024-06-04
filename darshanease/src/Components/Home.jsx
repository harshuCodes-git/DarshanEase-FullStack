import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
import Banner from './Banner'
import Temples from './Temples'
import About from './About'
import Footer from './Footer'
import NavBar from './NavBar'
import Services from './Services'


const Home = () => {
  return (
    <div className='class' id='home'>
        <NavBar/>
        <div className=''>
         <Banner/>  
        <Temples/>
        <About/>

        <Services/> 
        
        <Footer/>
    </div>
    </div>
  )
}

export default Home