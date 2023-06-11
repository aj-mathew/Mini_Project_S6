import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './parkingspot.css'

function ParkingSpot({ spot, bookSpot }) {
  const [isBooked, setIsBooked] = useState(false);
  const navigate=useNavigate()

  const go=()=>{
    navigate('/bookingform')
}

  return (
    <div className={`parking-spot ${isBooked ? 'booked' : ''}`}>
      <h3>Spot {spot.id}</h3>
      <p>{isBooked ? 'Booked' : 'Available'}</p>
      {!isBooked && (
        <button onClick={go}>Book</button>
      )}
    </div>
  );
}

function ParkingSpots({ spots, bookSpot }) {
  return (
    <div className="parking-spots">
      <h2>Available Spots</h2>
      {spots.map(spot => (
        <ParkingSpot key={spot.id} spot={spot} bookSpot={bookSpot} />
      ))}
    </div>
  );
}

function ParkSpot() {
  const [parkingSpots, setParkingSpots] = useState([
    { id: 1, booked: false },
    { id: 2, booked: false },
    { id: 3, booked: false },
    { id: 4, booked: false },
    // Add more parking spots as needed
  ]);

  const bookSpot = (id) => {
    const updatedSpots = parkingSpots.map(spot => {
      if (spot.id === id) {
        return { ...spot, booked: true };
      }
      return spot;
    });
    setParkingSpots(updatedSpots);
  };

  return (
    <div className="app">
      <h1>Parking Locations</h1>
      <ParkingSpots spots={parkingSpots} bookSpot={bookSpot} />
    </div>
  );
}

export default ParkSpot;