
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaTrash } from "react-icons/fa";
// import Onavbar from './Onavbar';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import './organizer.css'


// const Mytemple = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (user) {
//       axios
//         .get(`http://localhost:7000/organizer/gettemple/${user.id}`)
//         .then((response) => {
//           const templeData = response.data;
//           setItems(templeData);
//           console.log(templeData);
//         })
//         .catch((error) => {
//           console.error('Error fetching temples: ', error);
//         });
//     } else {
//       console.log('ERROR');
//     }
//   }, []);

//   const deleteItem = (id) => {
//     axios.delete(`http://localhost:7000/eventdelete/${id}`);
//     window.location.assign('/myevents');
//     alert('Temple is deleted');
//   };

//   return (
//     <div>
//       <Onavbar />
      
//       <div className="container mx-auto p-8">
//       <div style={{display:"flex",justifyContent:"flex-end",marginRight:"20px"}}>
//       <Button style={{backgroundColor:"lightslategray",border:"none"}}><Link to='/edittemple' style={{color:"white",textDecoration:"none"}} className="editTempleLink">Edit Temple</Link>/
//       <Link to='/createtemple' style={{color:"white",textDecoration:"none"}} className="editTempleLink">Create Temple</Link>
//       </Button>
//       </div>
//         <h2 className="text-3xl font-semibold mb-2 text-center">My Temple</h2>

//         <div className="max-w-md mx-auto grid grid-cols-1 gap-4">
//           {items.map((item) => (
//             <div key={item._id} className="bg-white p-4 rounded shadow">
//               <img
//                 src={`http://localhost:7000/organizer/${item.templeImage}`}
//                 alt="Temple Image"
//                 className="rounded-t-lg w-full h-40 object-cover mb-4"
//                 style={{height:"250px"}}
//               />
//               <div>
//                 <p className="text-xl font-bold mb-2">Temple Name:{item.templeName}</p>
//                <strong> <p className='text-center'>Timing</p></strong>
//                 <p className="text-gray-900 mb-2"><strong>Open: </strong>{item.open} AM</p>
//                 <p className="text-gray-900 mb-2"><strong>Close: </strong>{item.close} PM</p>
//                 <p className="text-gray-900 mb-2"><strong>Location:</strong> {item.location}</p>
//                 <p className="text-gray-900">
//                   <strong>Description:</strong>
//                   {item.description.slice(0, 259)} ...
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Mytemple;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
import Onavbar from './Onavbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './organizer.css';

const Mytemple = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      axios
        .get(`http://localhost:7000/organizer/gettemple/${user.id}`)
        .then((response) => {
          const templeData = response.data;
          setItems(templeData);
          console.log(templeData);
        })
        .catch((error) => {
          console.error('Error fetching temples: ', error);
        });
    } else {
      console.log('ERROR');
    }
  }, []);

  const deleteItem = (id) => {
    axios.delete(`http://localhost:7000/eventdelete/${id}`);
    window.location.assign('/myevents');
    alert('Temple is deleted');
  };

  return (
    <div style={{backgroundColor:"whitesmoke"}}>
       
      <Onavbar />
      <div className="container mx-auto p-8" >
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '20px' }}>
          {items.length > 0 ? (
            <Button style={{ backgroundColor: 'lightslategray', border: 'none' }}>
                <Link to={`/edittemple/${items[0]._id}`} style={{ color: 'white', textDecoration: 'none' }} className="editTempleLink">
                Edit Temple
              </Link>
              
            </Button>
          ) : (
            <Button style={{ backgroundColor: 'lightslategray', border: 'none' }}>
              <Link to="/createtemple" style={{ color: 'white', textDecoration: 'none' }} className="editTempleLink">
                Create Temple
              </Link>
            </Button>
          )}
        </div>
        <h2 className="text-3xl font-semibold mb-2 text-center">My Temple</h2>

        <div className="max-w-md mx-auto grid grid-cols-1 gap-4">
          {items.map((item) => (
            <div key={item._id} className="bg-white p-4 rounded shadow" >
                <div     >
              <img
                src={`http://localhost:7000/organizer/${item.templeImage}`}
                alt="Temple Image"
                // className="rounded-t-lg w-full object-cover mb-4"
                style={{ height: '250px',width:"500px"}}
              />
              </div>
              <div>
                <p className="text-xl font-bold mb-2 text-center">{item.templeName}</p>
                <strong>
                  <p className="text-center">Timing</p>
                </strong>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <p className="text-gray-900 mb-2">
                  <strong>Open: </strong>
                  {item.open}
                </p>
                <p className="text-gray-900 mb-2">
                  <strong>Close: </strong>
                  {item.close}
                </p>
                </div>
                <p className="text-gray-900 mb-2">
                  <strong>Location:</strong> {item.location}
                </p>
                <p className="text-gray-900">
                  <strong>Description:</strong>
                  {item.description.slice(0, 259)} ...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mytemple;
