import React from 'react'
import './navbar.css'
const Services =()=>{
    return(
        <div id='services' style={{paddingTop:"50px", paddingLeft:"180px"}}>
        <h2 className='' style={{ color:"blue"}}>Our Services</h2>
      <div className='service-list'>
        <div className='service-block' >
          
          <h5 style={{color:"brown", backgroundColor: "white",padding:"20px",marginBottom:"20px",borderRadius:"8px"}}>Darshan Timings</h5>
          <p>
            Explore the divine experience with our regular darshan timings. Witness the spiritual aura and seek blessings from the divine deities.
          </p>
        </div>
        <div className='service-block'>
          <h5 style={{color:"brown", backgroundColor: "white",padding:"20px",marginBottom:"20px",borderRadius:"8px"}}>Special Pooja Services</h5>
          <p>
            Elevate your spiritual journey with our special pooja services. Immerse yourself in the sacred rituals and receive blessings from the revered priests.
          </p>
        </div>
        <div className='service-block'>
        <h5 style={{color:"brown", backgroundColor: "white",padding:"20px",marginBottom:"20px",borderRadius:"8px"}}>Online Ticket Booking</h5>
          
          <p>
            Conveniently book your darshan tickets online. Save time and ensure a seamless entry to the temple premises.
          </p>
        </div>
        <div className='service-block'>
          
          <h5 style={{color:"brown", backgroundColor: "white",padding:"20px",marginBottom:"20px",borderRadius:"8px"}}>Customer Service</h5>
          <p>
            Tailor your spiritual experience with our custom services. Personalize your visit to meet your unique spiritual needs.
          </p>
        </div>
      </div>
    </div>
    )
}

export default Services