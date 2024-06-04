// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Unavbar from './Unavbar';
// import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// function Utemples() {
//   const [items, setItems] = useState([]);
//   const [searchName, setSearchName] = useState('');
//   const [searchType, setSearchType] = useState('');

//   useEffect(() => {
//     axios
//       .get(`http://localhost:7000/organizer/gettemples/`)
//       .then((response) => {
//         const templeData = response.data;
//         setItems(templeData);
//         console.log(templeData);
//       })
//       .catch((error) => {
//         console.error('Error fetching temples: ', error);
//       });

// }, []);



// const filteredItems = items.filter((item) =>
//   (item.templeName && item.templeName.toLowerCase().includes(searchName.toLowerCase())) &&
//   (item.type && item.type.toLowerCase().includes(searchType.toLowerCase()))
// );

//   return (
//     <div>
//       <Unavbar />

//       <div className="container mx-auto p-8">
//         <h2 className="text-3xl font-semibold mb-4 text-center">Temples </h2>

//         <div className="mb-4" style={{display:"flex",justifyContent:"space-around"}}>
//           <div>
//           <label className="text-gray-700
          
//           ">Search by Name:</label>
//           <input
//             type="search"
//             className="ml-2 p-2 border border-gray-300 rounded"
//             value={searchName}
//             onChange={(e) => setSearchName(e.target.value)}
//           />
//           </div>
//           <div>
//           <label className="text-gray-700">Search by Type:</label>
//           <input
//             type="search"
//             className="ml-2 p-2 border border-gray-300 rounded"
//             value={searchType}
//             onChange={(e) => setSearchType(e.target.value)}
//           />
//         </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//   {filteredItems.map((item) => (
//     <div key={item._id} className="bg-white p-4 rounded shadow">
//       <img
//         src={`http://localhost:7000/${item.templeImage}`}
//         alt="Item Image"
//         className="rounded-t-lg"
//         style={{ height: '350px', width: '500px' }}
//       />
//               <div>
//                 <p className="text-xl font-bold mb-2">{item.temleName}</p>
//                 <p className="text-gray-700 mb-2">Type: {item.open}</p>
//                 <p className="text-gray-700 mb-2">organizer: {item.close}</p>
//                 <p className="text-gray-700 mb-2">venue: {item.location}</p>
          
//                 <div style={{ display: 'flex', justifyContent: 'center' }}>
//                   {/* <Button style={{ backgroundColor: 'rebeccapurple', border: 'none' }}>
//                     <Link to={`/uevent/${item._id}`} style={{ color: 'white', textDecoration: 'none' }}>
//                       View
//                     </Link>
//                   </Button> */}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Utemples;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
// import './organizer.css';
import Unavbar from './Unavbar';

const Utemples = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
   
      axios
        .get(`http://localhost:7000/organizer/gettemples/`)
        .then((response) => {
          const templeData = response.data;
          setItems(templeData);
          console.log(templeData);
        })
        .catch((error) => {
          console.error('Error fetching temples: ', error);
        });
  
  }, []);

  const deleteItem = (id) => {
    axios.delete(`http://localhost:7000/eventdelete/${id}`);
    window.location.assign('/myevents');
    alert('Temple is deleted');
  };

  return (
    <div style={{backgroundColor:"whitesmoke"}}>
   <Unavbar/>
      <div className="container mx-auto p-8" >
        
        <h2 className="text-3xl font-semibold mb-2 text-center"> Temples</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item._id} className="bg-white p-4 rounded shadow" >
                <div     >
              <img
                src={`http://localhost:7000/organizer/${item.templeImage}`}
                alt="Temple Image"
                // className="rounded-t-lg w-full object-cover mb-4"
                style={{ height: '200px',width:"400px"}}
              />
              </div>
              <div>
                <p className="text-xl font-bold mb-2 text-center text-red-400">{item.templeName}</p>
                <strong>
                  <p className="text-center">Timings</p>
                </strong>
                <p className="text-gray-900 mb-0" style={{display:"flex", justifyContent:"space-between"}}>
                <p>  <strong>Open: </strong>
                  {item.open} AM  
                   </p>
                 <p>
                 <strong >Close: </strong>
                  {item.close} PM
                 </p>
                </p>
                <p className="text-gray-900 mb-2">
                  <strong>Location:</strong> {item.location}
                </p>
                <p className="text-gray-900">
                  <strong>Description:</strong>
                  {item.description.slice(0, 259)} ...
                </p>

                
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button style={{ backgroundColor: 'rebeccapurple', border: 'none' }}>
                    <Link to={`/utemple/${item._id}`} style={{ color: 'white', textDecoration: 'none' }}>
                      View
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Utemples;
