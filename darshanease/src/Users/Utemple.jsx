import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Unavbar from './Unavbar';
import { Button } from 'react-bootstrap';

const Utemple = () => {
    const [item, setItem] = useState(null); // Initialize item as null
    const [darshan, setDarshan] = useState([]); // Initialize item as null

    const { id } = useParams();


    useEffect(() => {
        axios.get(`http://localhost:7000/organizer/gettemplebyid/${id}`)
            .then((resp) => {
                console.log(resp);
                setItem(resp.data); // Set item to the fetched data (an object, not an array)
                
                // Fetch darshan data using the organizerId from the item
                const organizerId = resp.data.organizerId;
                console.log(organizerId)
                axios.get(`http://localhost:7000/organizer/getdarshanbyid/${organizerId}`)
                    .then((response) => {
                        const darshanData = response.data;
                        setDarshan(darshanData);
                        console.log(response);
                    })
                    .catch((error) => {
                        console.error('Error fetching darshan: ', error);
                    });
            })
            .catch(() => {
                console.log("Did not get data");
            });
    
    }, [id]);
    



    return (
        <div style={{backgroundColor:"whitesmoke"}}>
            <Unavbar/>
            <br/>
            {item && (
                <div>
                    <div style={{ display: "flex", justifyContent: "center", height: "300px" }} >
                        <img src={`http://localhost:7000/organizer/${item?.templeImage}`} width="500px"  />
                    </div>
                    <h1 className='text-center'> {item.eventName}</h1>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div style={{ width: '38%', marginLeft: "150px" }}>
                            <h2 style={{ color: "grey" }}><strong>Description</strong></h2>
                            <hr style={{ height: "3px", backgroundColor: "black" }} />
                            <p style={{ fontSize: "20px" }}>{item.description}</p>
                        </div>
                        <div style={{ marginRight: '300px' }}>
                            <h2 style={{ color: "grey" }}><strong>Info</strong></h2>

                            <hr style={{ height: "3px", backgroundColor: "black" }} />
                            <p style={{ fontSize: "20px" }}>open:  {item.open}AM</p>
                            <p style={{ fontSize: "20px" }}>close:  {item.close}PM</p>
                            <p style={{ fontSize: "20px" }}>organizer:  {item.organizerName}</p>
                            <p style={{ fontSize: "20px" }}>Address:  {item.location}</p>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            )}

            <br/>
            <div className="container mx-auto p-8"  >
        <h2 className="text-3xl font-semibold mb-2 text-center">Darshans</h2>
        <br/>
        <br/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {darshan.map((item) => (
            <div key={item._id} className="p-4 rounded shadow" style={{backgroundColor:"white"}} >
              <div>
                <p className="text-xl font-bold mb-2 text-center">{item.darshanName}</p>
                <strong>
                </strong>
                <p className="text-gray-900 mb-2">
                  <strong>Timing: </strong>
                  {item.time} AM
                </p>
                <p className="text-gray-900 mb-2">
                  <strong>Date: </strong>
                  {item.date} PM
                </p>
                <p className="text-gray-900 mb-2">
                  <strong>Normal Darshan:</strong> {item.prices.normal}
                </p>
                <p className="text-gray-900 mb-2">
                  <strong>Vip Darshan:</strong> {item.prices.vip}
                </p>
                <p className="text-gray-900">
                  <strong>Description:</strong>
                  {item.description.slice(0, 150)} ...
                </p>

                <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700">
                            <Link to={`/bookdarshan/${item._id}`} style={{ color: "white", textDecoration: "none" }}  >
                                Book Now
                            </Link>
                        </button>
                    </div>

              </div>
            </div>
          ))}
        </div>
      </div>


        </div>
    );
};

export default Utemple;
