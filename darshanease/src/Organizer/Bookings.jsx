
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import '../Vendor/List.css';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Onavbar from './Onavbar';
// import Footer from '../Components/Footer';
// import Vnavbar from './Vnavbar';

function Bookings() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch items data
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user)
    if (user) {
      axios.get(`http://localhost:7000/organizer/getorganizerbookings/${user.id}`)
  .then((response) => {
    setOrders(response.data);
    console.log(response)
  })
  .catch((error) => {
    console.error('Error fetching bookings: ', error);
  });
    }

}, []);




  // Function to calculate the status based on the delivery date
  const calculateStatus = (Delivery) => {
    const currentDate = new Date();
    const formattedDeliveryDate = new Date(Delivery);

    if (formattedDeliveryDate >= currentDate) {
      return "Upcomming";
    } else {
      return "Completed";
    }
  };

  return (
    <div>
      <Onavbar/>
      <br/>
      <div>
      <h3 className="text-3xl font-semibold mb-4 text-center">Bookings</h3>
        <div>
          {orders? orders.map((item) => {
            const status = calculateStatus(item.date);

            return (
              <Card
                key={item._id}
                style={{
                  width: '90%',
                  marginLeft: '65px',
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                  paddingTop: '15px',
                  marginBottom: '35px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                  <div>
                    <img src={`http://localhost:7000/organizer/${item?.templeImage}`} alt={`${item.itemtype} Image`} style={{ height: "100px" ,paddingBottom:"15px"}} />
                  </div>
                  <div>
                    <p>TempleName:</p>
                    <p>{item.templeName}</p>
                  </div>
                  <div>
                    <p>DarshanName:</p>
                    <p>{item.darshanName}</p>
                  </div>
                  <div>
                    <p>Bookingid:</p>
                    <p>{item._id.slice(0,10)}</p>
                  </div>
                  <div>
                    <p>Devotee Name</p>
                    <p>{item.userName}</p>
                  </div>
                  <div>
                    <p>Organizer Name:</p>
                    {item.email}
                  </div>
                  <div>
                    <p>BookingDate</p>
                    <p>{item.BookingDate}</p>
                  </div>
                  <div>
                    <p>Darshan Timing</p>
                    <p>{item.open}-{item.close}</p>
                  </div>
                  <div>
                    <p>Price</p>
                    <p>{item.totalamount}</p>
                  </div>
                  <div>
                    <p>Quantity</p>
                    <p>{item.quantity}</p>
                  </div>
                  {/* <div>
                    <p>Status</p>
                    <p>{status}</p>
                  </div> */}
                </div>
              </Card>
            )
          }): "no bookings yet "}
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div>
      {/* <Footer/> */}
      </div>
    </div>
  );
}

export default Bookings;
