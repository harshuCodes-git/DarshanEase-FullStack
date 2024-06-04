
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Onavbar from './Onavbar';



function Ohome() {
   
  const [temples, setTemples] = useState([]);
  const [darshans, setDarshans] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    
      // Fetch temples data
      const user = JSON.parse(localStorage.getItem('user'));
      console.log(user)
      if (user) {
        axios
          .get(`http://localhost:7000/organizer/gettemple/${user.id}`)
          .then((response) => {
            console.log('Response data:', response.data); // Log the response data
            const taskData = response.data;
            setTemples(taskData);
          })
          .catch((error) => {
            console.error('Error fetching tasks: ', error);
          });
      } else {
        console.log('ERROR');
      }

      // Fetch darshans data
     axios.get(`http://localhost:7000/organizer/getdarshans/${user.id}`)
    .then((response) => {
      setDarshans(response.data);
    })
    .catch((error) => {
      console.error('Error fetching bookings: ', error);
    });

     // Fetch bookings data
     axios.get(`http://localhost:7000/organizer/getorganizerbookings/${user.id}`)
    .then((response) => {
      setBookings(response.data);
    })
    .catch((error) => {
      console.error('Error fetching bookings: ', error);
    });
  }, []);
 
  // const colors = ['#2B124C', '#AE4451', '#F39F5A','orange'];

  // Calculate the number of users and bookings

  const totaltemples = temples.length;
  const totaldarshans = darshans.length;
  const totalbookings = bookings.length;

  // Define data for the bar chart
  const data = [
   
    { name: 'temples', value: totaltemples, fill: 'darkcyan' }, 
    { name: 'darshans', value: totaldarshans, fill: 'orange' }, 
    { name: 'bookings', value: totalbookings, fill: 'green' }, 
  ];
  return (
    <div>
    <Onavbar/>
        <br/>
      <h3 className="text-3xl font-semibold mb-4 text-center" >DashBoard</h3>
      <Card body style={{ backgroundColor: "lightgray", width: "80%", marginLeft: "10%", marginTop: "20px", height: "580px" }}>
        <div className="flex justify-around temples-center p-4">
          
         <Link to="/myevents" style={{textDecoration:"none"}}>
          <div className="w-64 h-32 bg-blue-700 rounded-lg shadow-md flex flex-col justify-center temples-center text-xl font-bold text-gray-800 text-center" style={{backgroundColor:"darkcyan"}}>
           Temples <br /> <br />{totaltemples}
         </div>
         </Link>
         <Link to="/bookings" style={{textDecoration:"none"}}>
          <div className="w-64 h-32  rounded-lg shadow-md flex flex-col justify-center temples-center text-xl font-bold text-gray-800 text-center" style={{backgroundColor:"orange"}}>
           Darshans <br /> <br />{totaldarshans}
         </div>
         </Link>
         <Link to="/bookings" style={{textDecoration:"none"}}>
          <div className="w-64 h-32  rounded-lg shadow-md flex flex-col justify-center temples-center text-xl font-bold text-gray-800 text-center" style={{backgroundColor:"green"}}>
           Total Bookings <br /> <br />{totalbookings}
         </div>
         </Link>
       </div>
       <br/>
       <br/>
       <br/>
       <div style={{paddingLeft:"350px"}}>
       <BarChart width={400} height={300} data={data} >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip   />
          <Legend />
          <Bar dataKey="value" fill="" barSize={50} />
          
        </BarChart>
       </div>
       </Card> <br/>
   <Footer/>
    </div>
  );
}

export default Ohome;






// ... (import statements)


// const EVChargeFinder 
//  = () => {
//   const [chargingStations, setChargingStations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     const options = {
//       method: 'GET',
//       url: 'https://edrv-ev-charging.p.rapidapi.com/v1/chargestations',
//       headers: {
//         'X-RapidAPI-Key': '1a85cb9702msh5c13cdefcb0ffb3p1ea90fjsn664f31a9d269',
//         'X-RapidAPI-Host': 'edrv-ev-charging.p.rapidapi.com'
//       }
//     };

//     try {
//       const response = await axios.request(options);
//       setChargingStations(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       setError(error.message || 'An error occurred');
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Charging Stations</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>Error: {error}</p>
//       ) : (
//         <ul>
//           {chargingStations.map(station => (
//             <li key={station.id}>
//               {station.name} - {station.location}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default EVChargeFinder;
