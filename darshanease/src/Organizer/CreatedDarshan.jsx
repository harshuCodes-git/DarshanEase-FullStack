import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Onavbar from './Onavbar';
import moment from 'moment';
import 'moment-timezone';


function CreatedDarshan() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({  
    description: '',
    darshanName: '',
    open: '',
    close: '',
    prices: {
          normal:'',
          vip:'',
    },
  });
  const { id } = useParams();
 


  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

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
  

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name.startsWith('prices')) {
      // Initialize formData.prices if it's undefined
      const newPrices = formData.prices ? { ...formData.prices } : {};
      
      // Handle nested property in prices
      const priceType = name.split('.')[1];
      newPrices[priceType] = value;
  
      setFormData({
        ...formData,
        prices: newPrices,
      });
    } else {
      // Handle other properties
      setFormData({ ...formData, [name]: value });
    }
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formDataToSend = {
        ...formData,
        organizerName: user.name,
        organizerId: user.id,
        templeName: items[0]?.templeName, // Access templeName using index if items is an array
        location:items[0]?.location,
        templeImage: items[0]?.templeImage
      };

      formDataToSend.open = moment.tz(formData.open, 'HH:mm', 'Asia/Kolkata').format('hh:mm A');
      formDataToSend.close = moment.tz(formData.close, 'HH:mm', 'Asia/Kolkata').format('hh:mm A');
      await axios.post('http://localhost:7000/organizer/createdarshan', formDataToSend);
      alert('darshan added successfully');
      console.log("Darshan created");
      navigate('/odarshans');
    } catch (error) {
      console.error('Error adding temple: ', error);
    }
  };
  
  

  return (
    <div>
      <Onavbar />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div
          className="mt-8 p-4 border rounded shadow-lg rounded-lg shadow-md"
          style={{
            width: '35%',
            background: 'linear-gradient(to left, #009696, #4CAF57)', // Change these colors to your desired gradient
          }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">Create Darshan</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4" style={{ display: 'flex', justifyContent: 'space-around' }}>
              <div>
                <label className="block text-black-900 text-center">Darshan Name</label>
                <input
                  type="text"
                  name="darshanName"
                  placeholder="Darshan Name"
                  value={formData.darshanName}
                  onChange={handleChange}
                  className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                  style={{ width: '280px' }}
                />
              </div>
            </div>
            <label className="block text-black-900 text-center">Timing</label>
            <div className="mb-4" style={{ display: 'flex', justifyContent: 'space-around' }}>
              <div>
                <label className="block text-black-900 text-center">Open</label>
                <input
                  type="time"
                  name="open"
                  placeholder="open"
                  value={formData.open}
                  onChange={handleChange}
                  className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                  style={{ width: '230px' }}
                />
              </div>
              <div>
                <label className="block text-black-900 text-center">close</label>
                <input
                  type="time"
                  name="close"
                  placeholder="Close"
                  value={formData.close}
                  onChange={handleChange}
                  className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                  style={{ width: '230px' }}
                />
              </div>
            </div>
            <label className="block text-black-900 text-center">Prices</label>
            <div className="mb-4" style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div className="mb-4">
              <label className="block text-black-900 text-center">Normal Price</label>
              <input
                type="text"
                name="prices.normal"
                placeholder="Normal Price"
                value={formData.prices.normal}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-black-900 text-center">Vip Price</label>
              <input
                type="text"
                name="prices.vip"
                placeholder="Vip Price"
                value={formData.prices.vip}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            </div>
            <div className="mb-4">
              <label className="block text-black-900 text-center">Description</label>
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button
                type="submit"
                className="bg-blue-900 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatedDarshan;
