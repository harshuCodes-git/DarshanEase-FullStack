import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Onavbar from './Onavbar';
import moment from 'moment'; 

function CreateTemple() {
  
  const [formData, setFormData] = useState({
    description: '',
    templeName: '',
    open: '',
    close: '',
    location: '',// Array to store guest details
  });

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

 

  const handleChange = (e) => {
    if (e.target.name === 'templeImage') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      formDataToSend.append('templeName', formData.templeName);
      formDataToSend.append('open', moment(formData.open, 'HH:mm').format('hh:mm A')); // Format to 12-hour time
      formDataToSend.append('close', moment(formData.close, 'HH:mm').format('hh:mm A'));
      formDataToSend.append('description', formData.description);
      formDataToSend.append('location', formData.location);
      formDataToSend.append('templeImage', formData.templeImage);

      formDataToSend.append('organizerName', user.name);
      formDataToSend.append('organizerId', user.id);


      await axios.post('http://localhost:7000/organizer/createtemple', formDataToSend);
      alert('Temple added successfully');
      console.log("temple created")
      navigate('/mytemple');
    } catch (error) {
      console.error('Error adding temple : ', error);
    }
  };

  return (
    <div>
      <Onavbar/>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div className="mt-8 p-4 border rounded shadow-lg rounded-lg shadow-md" style={{
        width: "35%",
        background: "linear-gradient(to left, #009696, #4CAF57)" // Change these colors to your desired gradient
      }}>
        <h2 className="text-2xl font-semibold mb-4 text-center">Add Temple</h2>
        <form onSubmit={handleSubmit}>     
          <div className="mb-4" style={{display:"flex",justifyContent:"space-around"}}>
         <div>
         <label className="block text-black-900 text-center" >Temple Name</label>
          <input
            type="text"
            name="templeName"
            placeholder='Temple Name'
            value={formData.templeName}
            onChange={handleChange}
            className="border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            style={{width:"280px"}}
          />

         </div>
      
        </div>
        
        <label className="block text-black text-center" >Timings</label>  
        <div className="mb-4" style={{display:"flex",justifyContent:"space-around"}}>
          <dvi>
          <label className="block text-black-900 text-center" >Open</label>  
          <input
            type="time"
            name="open"
            placeholder='open'
            value={formData.open}
            onChange={handleChange}
            className="border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            style={{width:"230px"}}
          />
          </dvi>
          <dvi>
          <label className="block text-black-900 text-center" >Close</label>  
          <input
            type="time"
            name="close"
            placeholder='close'
            value={formData.close}
            onChange={handleChange}
            className="border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            style={{width:"230px"}}
          />
          </dvi>
        
        </div>
        
        <div>
        <div>
           <label className="block text-black-900 text-center" >Address</label> 
           <input
            type="text"
            name="location"
            placeholder='Address'
            value={formData.location}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            // style={{width:"280px"}}

          />
           </div>
        </div>
        <div className="mb-4" style={{display:"flex",justifyContent:"space-around"}}>
        
          
        </div>
        <div className="mb-4">
          <label className="block text-black-900 text-center">Description</label>
          <textarea
            name="description"
            placeholder='Description'
            value={formData.description}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
       
       
        <div className="mt-4 mb-4">
          <label className="block text-black-900">Temple Images</label>
          <input
            type="file"
            name="templeImage"
            accept="/*"
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
            required
            style={{border:"1 px solid black"}}
          />
        </div>

        
          <div style={{display:"flex",justifyContent:"center"}}>
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

export default CreateTemple;
