
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
import Onavbar from './Onavbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './organizer.css';

const Odarshans = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      axios
        .get(`http://localhost:7000/organizer/getdarshans/${user.id}`)
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
    <div>
       
      <Onavbar />
      <div className="container mx-auto p-8" >
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '20px' }}>
         
            <Button style={{ backgroundColor: 'lightslategray', border: 'none' }}>
              <Link to="/createdarshan" style={{ color: 'white', textDecoration: 'none' }} className="editTempleLink">
                Create Darshan
              </Link>
            </Button>
          
        </div>
        <h2 className="text-3xl font-semibold mb-2 text-center">My Darshans</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {items.map((item) => (
            <div key={item._id} className="bg-white p-4 rounded shadow" >
                {/* <div     >
              <img
                src={`http://localhost:7000/organizer/${item.templeImage}`}
                alt="Temple Image"
                // className="rounded-t-lg w-full object-cover mb-4"
                style={{ height: '250px',width:"500px"}}
              />
              </div> */}
              <div>
                <p className="text-xl font-bold mb-2">Darshan Name:{item.darshanName}</p>
                <strong>
                </strong>
                <p className="text-gray-900 mb-2">
                  <strong>Open: </strong>
                  {item.open} 
                </p>
                <p className="text-gray-900 mb-2">
                  <strong>Close: </strong>
                  {item.close} 
                </p>
                <p className="text-gray-900 mb-2">
                  <strong>Normal Darshan:</strong> {item.prices.normal}
                </p>
                <p className="text-gray-900 mb-2">
                  <strong>Vip Darshan:</strong> {item.prices.vip}
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

export default Odarshans;
