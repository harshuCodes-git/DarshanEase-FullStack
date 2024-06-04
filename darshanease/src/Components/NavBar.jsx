import React, { useState } from 'react';
import './navbar.css';
import logo from '../assets/logo.png';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const NavBar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='navabar'>
      <div className='class1'>
        <img
          className='img1'
          src='https://i.pinimg.com/236x/47/8d/91/478d91cfdd23742558b17ee10fdd1415.jpg'
          alt='background'
        />
        <div>
        <Link to='home' smooth={true} duration={500} onClick={scrollToTop}  offset={-80}>
        <img
            src={logo}
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              marginLeft: '35px',
              marginTop: '8px',
              cursor:"pointer"
            }}
            alt='logo'
          />
        </Link>
         
          <h4>DarshanEase</h4>
        </div>
        <img
          className='img2'
          src='https://i.pinimg.com/236x/60/ea/85/60ea85960135aadd5ba6e97220241fb5.jpg'
          alt='background'
        />
      </div>
      <div>
        <nav className='nav1'>
        <p className='p1'>
        <Link to='home' smooth={true} duration={500} onClick={scrollToTop}  offset={-80}>
              Home
        </Link>
       </p>
<p className='p2'>
<Link to='temples' smooth={true} duration={500}  offset={-120}>
  Temples
</Link>
</p>
<p className='p4'>
<Link to='about' smooth={true} duration={500} offset={-140}>
  About
</Link>
</p>
<p className='p3'>
<Link to='services' smooth={true} duration={500} offset={-140}>
  Services
</Link>
</p>


<p className='p5'>
<Link to='contact' smooth={true} duration={500}  offset={-100}>
  Contact us
</Link>
</p>

<p className='p6'>
<div className='dropdown'>
            <button className='dropbtn' onClick={toggleDropdown}>
              Login
            </button>
            {isDropdownOpen && (
              <div className='dropdown-content'>
                <RouterLink to='/ulogin'>User</RouterLink>
                <RouterLink to='/ologin'>Organizer</RouterLink>
                <RouterLink to='/alogin'>Admin</RouterLink>
              </div>
            )}
          </div>
</p>

        </nav>
      </div>
    </div>
  );
};

export default NavBar;