import React, { useState } from 'react';
import './bookingform.css'
import BookingConfirmation from './bookingconfirm';
import AXIOS from "axios";
import { useNavigate, useLocation } from 'react-router-dom';

// function BookingConfirmation() {
//     return (
//       <div className="booking-confirmation">
//         <h2>Booking Confirmed!</h2>
//         <p>Your booking has been successfully confirmed.</p>
//         <div className="buttons">
//           <button onClick='/parkingspot'>Book Another</button>
//           <button onClick='/'>Done</button>
//         </div>
//       </div>
//     );
//   }
function CarBookingForm() {
  const { search } = useLocation();
  console.log("search", search)
  const params = new URLSearchParams(search)
  let parkingSpotChosen = params?.get('name')
  
  const [carRegistration, setCarRegistration] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerNumber, setOwnerNumber] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingStartTime, setBookingStartTime] = useState('');
  const [bookingEndTime, setBookingEndTime] = useState('');
  const [selectedSpot,setSelectedSpot]=useState(parkingSpotChosen ?? '')
  const navigate=useNavigate()

  console.log("params",params)
  const handleSubmit = async()=>{
    
      const response = await AXIOS.post('http://localhost:9000/bookingform', {carRegistration,ownerName,ownerNumber,bookingDate,bookingStartTime,bookingEndTime,selectedSpot});
      if (response.data.message === 'Success'){
        navigate('/parkingspot')
      }
  
    setCarRegistration("")
    ownerName("")
    ownerNumber("")
    bookingDate("")
    bookingStartTime("")
    bookingEndTime("")
  }
   

  return (
    <div className="car-booking-form mb-4" >
      <h2>Book a Spot</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="carRegistration">Spot Name</label>
          <input
            type="text"
            id="carRegistration"
            value={selectedSpot}
            onChange={(e) => setSelectedSpot(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="carRegistration">Car Registration Number</label>
          <input
            type="text"
            id="carRegistration"
            value={carRegistration}
            onChange={(e) => setCarRegistration(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ownerName">Name</label>
          <input
            type="text"
            id="ownerName"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ownerNumber">Contact Number</label>
          <input
            type="tel"
            id="ownerNumber"
            value={ownerNumber}
            onChange={(e) => setOwnerNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bookingDate">Booking Date</label>
          <input
            type="date"
            id="bookingDate"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bookingTime">Start Time</label>
          <input
            type="time"
            id="bookingTime"
            value={bookingStartTime}
            onChange={(e) => setBookingStartTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bookingTime">End Time</label>
          <input
            type="time"
            id="bookingTime"
            value={bookingEndTime}
            onChange={(e) => setBookingEndTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default CarBookingForm;
