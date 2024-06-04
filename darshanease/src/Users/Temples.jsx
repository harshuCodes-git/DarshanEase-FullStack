import React, { useState,useEffect } from 'react'
import '../Components/navbar.css'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const TempleCard = ({ imageSrc, title, description }) => {

    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseOver = () => {
      setIsHovered(true);
    };
  
    const handleMouseOut = () => {
      setIsHovered(false);
    };
  
    return (
      <Card  style={{width:"25rem"}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        {isHovered ? (
          <Card.Body>
            <Card.Text>
              <strong style={{ color: 'orange' }}>Advance Darshan</strong> <br /> <br />
              <strong>{title}</strong> <br /> <br />
              <p>{description}</p>
            </Card.Text>
          </Card.Body>
        ) : (
          <div>
           
            
            <Card.Img variant="top" src={imageSrc} alt={title}  style={{width:"500px",height:"200px"}}  />
           
          
          </div>
        )}
      </Card>
    );
  };
  




const Temples = () => {
    const settings = {
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,        // Enable autoplay
        autoplaySpeed: 2000, 
        arrows:false
      };

  return (
  
    <div className='content' style={{backgroundColor:"whitesmoke",paddingBottom:"50px",paddingTop:"20px"}} id='temples'>   
  

      <h1 className='text-center'>Temples</h1>
      <Link  to='/utemples' style={{textDecoration:"none"}}>
      <div style={{display:"flex", justifyContent:"space-around"}}>
      <TempleCard 
        imageSrc="https://d3k1i85mml78tf.cloudfront.net/Blogs/1677258515580_post_image_1.jpg" 
        title="Shri Thakur Banke Bihari Ji Mandir"
        description="to Register Shri Thakur Banke Bihari Ji Mandir Online Darshan Booking"
        linkTo="/ulogin"
      />
      <TempleCard
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Shiv_khori_2.jpg/1200px-Shiv_khori_2.jpg"
        title="Shiv Khori Mandir"
        description="Click here to Register Shiv Khori Mandir Online Darshan Booking"
       
      />
      <TempleCard
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/4/4e/Tirumala_090615.jpg"
        title="Tirupati Tirumala Temple"
        description="Click here to Register Tirupati Tirumala Temple Online Darshan Booking"
      />  </div>
      <br/> 
      <div style={{display:"flex", justifyContent:"space-around"}}>
      <TempleCard 
        imageSrc="https://imageio.forbes.com/blogs-images/jimdobson/files/2016/05/Sree_Padmanabhaswamy_Temple.jpg?height=459&width=711&fit=bounds" 
        title="Padmanabaswamy Temple"
        description="Click here to Register Padmanabaswamy Temple Online Darshan Booking"
      />
      <TempleCard
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/e/e4/Sai_baba_samadhi_mandir_.jpg"
        title="Shirdi Sai Baba Mandir"
        description="Click here to Register Shirdi Sai Baba Mandir Online Darshan Booking"
      />
      <TempleCard
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/9/94/The_Golden_Temple_of_Amrithsar_7.jpg"
        title="Golden Temple"
        description="Click here to Register Golden Temple Online Darshan Booking"
      />   
    </div>
    </Link>
    </div>
    
    
    
  )
}

export default Temples


