import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link } from "react-router-dom"

const Onavbar = () => {
  const name=localStorage.getItem('user')  
  return (
    <Navbar bg="" variant="dark" expand="lg" style={{backgroundColor:"teal"}}>
      <Container>
        <Navbar.Brand ><Link to='/shome' style={{color:"white",textDecoration:"none"}}>DarshanEase(organizer)</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" >
            <Link to="/ohome" style={{padding:"10px",color:"white",textDecoration:"none"}}>Dashboard</Link>
            <Link to="/mytemple" style={{padding:"10px",color:"white",textDecoration:"none"}}>My Temple</Link>
            <Link to="/odarshans" style={{padding:"10px",color:"white",textDecoration:"none"}}>Darshans</Link>
            <Link to="/bookings" style={{padding:"10px",color:"white",textDecoration:"none"}}>Bookings</Link>
            <Link to="/" style={{paddingLeft:"10px",paddingTop:"10px",color:"white",textDecoration:"none"}}>Logout</Link>
            <h4 style={{color:"white",paddingTop:"0px"}}>({JSON.parse(name).name} )</h4>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Onavbar;
