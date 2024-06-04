import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import t8 from '../assets/t8.jpg'
import t7 from '../assets/t7.jpg'
import t5 from '../assets/t5.jpg'
import t4 from '../assets/t4.jpeg'
import t3 from '../assets/t3.jpg'
const Banner = () => {

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
    <div style={{marginTop:"10px"}}>
        <div className='' style={{marginLeft:"260px"}}>
    <Slider {...settings} >
      <div>
      <img
            src={t8}
            alt="First slide"
            style={{ width: '1000px', height: '350px',marginBottom:"10px" }}
          />
      </div>
      <div>
      <img
            src={t5}
            alt="Second slide"
            style={{ width: '1000px', height: '350px',marginBottom:"10px"  }}
          />
      </div>
      <div>
      <img
            src={t7}
            alt="Third slide"
            style={{ width: '1000px', height: '350px',marginBottom:"10px" }}
          />
      </div>
      <div>
      <img
            src={t3}
            alt="Fourth slide"
            style={{ width: '1000px', height: '350px',marginBottom:"10px"  }}
          />
      </div>
    </Slider>
    </div>
    <div className='class3'>
    <div className="marquee-container">
      <div className="marquee-text">
        <p>Book your tickets for Temple Darshan now! Limited slots available. Don't miss the divine experience.</p>
      </div>
    
    </div>
    </div>
    </div>
  )
}

export default Banner