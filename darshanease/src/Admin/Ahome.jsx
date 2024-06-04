

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Anavbar from './Anavbar';

function Ahome() {
  const [users, setUsers] = useState([]);
  const [vendors,setVendors]=useState([])
  const [temples, setTemples] = useState([]);
  const [darshans, setDarshans] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch user data
    axios.get(`http://localhost:7000/user/users`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users: ', error);
      });

    // Fetch organizers data
    axios.get(`http://localhost:7000/organizer/organizers`)
      .then((response) => {
        setVendors(response.data);
      })
      .catch((error) => {
        console.error('Error fetching bookings: ', error);
      });

      // Fetch temples data
    axios.get(`http://localhost:7000/organizer/gettemples`)
    .then((response) => {
      setTemples(response.data);
    })
    .catch((error) => {
      console.error('Error fetching bookings: ', error);
    });

      // Fetch darshans data
      axios.get(`http://localhost:7000/organizer/getdarshans`)
    .then((response) => {
      setDarshans(response.data);
    })
    .catch((error) => {
      console.error('Error fetching bookings: ', error);
    });

      // Fetch bookings data
      axios.get(`http://localhost:7000/user/getbookings`)
    .then((response) => {
      setOrders(response.data);
    })
    .catch((error) => {
      console.error('Error fetching bookings: ', error);
    });
  }, []);
 
  const colors = ['#2B124C', '#AE4451', '#F39F5A','orange'];

  // Calculate the number of users and bookings
  const totalUsers = users.length;
  const totalorganizers = vendors.length;
  const totaltemples = temples.length;
  const totaldarshans = darshans.length;
  const totalOrders = orders.length;

  // Define data for the bar chart
  const data = [
    { name: 'Users', value: totalUsers, fill: 'purple' }, 
    { name: 'organizers', value: totalorganizers, fill: 'darkcyan' },
    { name: 'temples', value: totaltemples, fill: 'coral' }, 
    { name: 'darshans', value: totaldarshans, fill: 'orange' }, 
    { name: 'Bookings', value: totalOrders, fill: 'green' }, 
  ];
  return (
    <div>
        <Anavbar/>
      <h3 className="text-center" style={{color:""}}>DashBoard</h3>
      <Card body style={{ background: "whitesmoke", width: "93%", marginLeft: "3.7%", marginTop: "20px", height: "580px" }}>
        <div className="flex justify-around temples-center p-2">
           <Link to="/users" style={{textDecoration:"none"}}>
          <div className="w-64 h-32  rounded-lg shadow-md flex flex-col justify-center temples-center text-xl font-bold text-gray-800 text-center" style={{backgroundColor:"purple"}}>
           USERS <br /> <br />{totalUsers}
         </div>
         </Link> 
        <Link to="/organizers" style={{textDecoration:"none"}}>
         <div className="w-64 h-32  rounded-lg shadow-md flex flex-col justify-center temples-center text-xl font-bold text-gray-800 text-center" style={{backgroundColor:"darkcyan"}}>
           Organizers <br /> <br /> {totalorganizers}
         </div>
         </Link>
         <Link to="/organizers" style={{textDecoration:"none"}}>
          <div className="w-64 h-32  rounded-lg shadow-md flex flex-col justify-center temples-center text-xl font-bold text-gray-800 text-center" style={{backgroundColor:"coral"}}>
           temples <br /> <br />{totaltemples}
         </div>
         </Link>
         <Link to="/organizers" style={{textDecoration:"none"}}>
          <div className="w-64 h-32  rounded-lg shadow-md flex flex-col justify-center temples-center text-xl font-bold text-gray-800 text-center" style={{backgroundColor:"orange"}}>
           Darshans <br /> <br />{totaldarshans}
         </div>
         </Link>
         <Link to="/users" style={{textDecoration:"none"}}>
          <div className="w-64 h-32  rounded-lg shadow-md flex flex-col justify-center temples-center text-xl font-bold text-gray-800 text-center" style={{backgroundColor:"green"}}>
           Total Bookings <br /> <br />{totalOrders}
         </div>
         </Link>
       </div>
       <br/>
       <br/>
       <br/>
       <div style={{paddingLeft:"450px"}}>
       <BarChart width={400} height={300} data={data} >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip   />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" barSize={50} />
          
        </BarChart>
       </div>
       </Card>
   
    </div>
  );
}

export default Ahome;
