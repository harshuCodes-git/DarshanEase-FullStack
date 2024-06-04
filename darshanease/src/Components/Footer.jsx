import React from 'react';
import './navbar.css';

const Footer = () => {
  return (
    <div className="contact-container" style={{paddingLeft:"180px",backgroundColor:"black"}}>
          <h2 className="section-title" style={{color:"yellow"}}>Contact Us</h2>
          <div className="contact-info" style={{paddingLeft:"120px",color:"white"}}>
            <br/>
            <p>"Embark on a spiritual Journey, One Darshan at a Time - Seamless Temple Darshan Ticket Booking at your Fingertips!"</p>
            
              <p  style={{paddingLeft:"220px"}}>Email: contact@darshanease.com</p>
              <p style={{paddingLeft:"270px"}}>Phone: 123-456-7890</p>
              <p style={{paddingLeft:"200px"}}>Address: 123 Main Street, City, Country</p>
              <p style={{paddingLeft:"270px"}}>All Rights Reserved.</p>
            
          </div>
        </div>
  );
};

export default Footer;
