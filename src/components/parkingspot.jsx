import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './parkingspot.css'
import AXIOS from 'axios'

function ParkingSpot({ spot, bookSpot }) {
  const [isBooked, setIsBooked] = useState(spot.bookingstatus);
  const navigate=useNavigate()

  const go=()=>{
    navigate(`/bookingform?name=${spot?.name}`)
}

  return (
    <div className={`parking-spot ${isBooked ? 'booked' : ''}`}>
      <h3>{spot.name}</h3>
      <p>{spot.description}</p>
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
        <ParkingSpot key={spot.name} spot={spot} bookSpot={bookSpot} />
      ))}
    </div>
  );
}

function ParkSpot() {
  const [loading,setLoading] = useState(true);
  const [parkingSpots, setParkingSpots] = useState([]);

  const bookSpot = (id) => {
    const updatedSpots = parkingSpots.map(spot => {
      if (spot.id === id) {
        return { ...spot, booked: true };
      }
      return spot;
    });
    setParkingSpots(updatedSpots);
  };
  async function getSpots(){
    const spots = await AXIOS.get("http://localhost:9000/getspots/")
    console.log(spots.data)
    setParkingSpots(spots.data)
    setLoading(false)
  }
  useEffect(()=>{
    getSpots()
  },[]);

  return (
    <div className="app">
      <h1>Parking Locations</h1>
      {
        loading? (
          "LOADING..."
        ):(
          <ParkingSpots spots={parkingSpots} bookSpot={bookSpot} />
        )
      }
    </div>
  );
}







export default ParkSpot;
