import React from 'react'
import './navbar.css'
const About =()=>{
    return(
        <div id='about' style={{paddingTop:"50px"}}>
        <h2 className='' style={{paddingLeft:"180px"}}>About Darshan Booking</h2>
        
        <ol  style={{listStyleType:"circle", paddingLeft:"180px"}}>
            <li>All major temples across India are implementing the Darshan Token|E-Queue|Ticket Booking system to control the rush of devotees.</li>
            <li>Social Distancing, Crowd Management, Contact Tracing with minimum physical interaction / touch.</li>
            <li>Online Advance Booking (for the devotees having internet knowledge,( coming from far off places)).</li>
            <li>On the spot Darshan Token issuance interface (for the devotees who do not have knowledge,(locals)).</li>
            <li>Developed after thorough research and consultation with the major temples across India ( Darshan Token|E-Queue|Ticket Booking system).</li>
            <li>Daily reports for the gatekeeper / security, periodical reports for the management to review the usage and details.</li>
            <li>On the spot Darshan Token issuance.</li>
         
        </ol>
    </div>
    )
}

export default About