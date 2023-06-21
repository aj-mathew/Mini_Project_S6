import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Main from './components/main';
import Aboutus from './components/aboutus';
import Footer from './components/footer';
import Signup from './components/signup';
import ParkSpot from './components/parkingspot';
import CarBookingForm from './components/bookingform';
import User_login from './components/userlogin';
import User_loadout from './components/userloadout';
import Owner_Loadout from './components/ownerloadout';
import Create_Spot from './components/createspot';

function App() {                
  return (
   <>
    <Routes>
               
      <Route path='/' element={<Main/>}></Route>
      <Route path='/userloadout' element={<User_loadout/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/parkingspot' element={<ParkSpot/>}></Route>
      <Route path='/bookingform' element={<CarBookingForm/>}></Route>
      <Route path='/userlogin' element={<User_login/>}></Route>
      <Route path='/ownerloadout' element={<Owner_Loadout/>}></Route>
      <Route path='/createspot' element={<Create_Spot/>}></Route>
      
    </Routes>
    <Footer/>
   </>
  );
}

export default App;
                        