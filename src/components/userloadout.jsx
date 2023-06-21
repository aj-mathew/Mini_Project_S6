import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbs.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './parkingspot.css'
import Carousel from 'react-bootstrap/Carousel';
import bg1 from '../images/image.jpg';
import bg2 from '../images/image2.jpg';
import bg3 from '../images/image3.jpg';
import { Button } from 'react-bootstrap';


function User_loadout (){
  return (
    <>
     <Navbar className='navbs' expand="lg">
      <Container>
        <Navbar.Brand href="/">Parkify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
          
           
            <Nav.Link href="/">Logout</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={bg1}
          alt="First slide"
          style={{width:'100'}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>
          <Button variant="primary" size="lg" href='/parkingspot'>
          Book Spot
        </Button>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={bg2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>
          <Button variant="primary" size="lg" href='/parkingspot'>
          Book Spot
        </Button>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bg3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Koenigsegg Agera RS</h3>
          <p>
          <Button variant="primary" size="lg" href='/parkingspot'>
          Book Spot
        </Button>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    
</>
   

  );
 
  
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
  
  
  

}

export default User_loadout;