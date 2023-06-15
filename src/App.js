import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Main from './components/main';
import Navbs from './components/navbs';
import Aboutus from './components/aboutus';
import Userreg from './components/registration';
import Regis from './components/regis';
import Footer from './components/footer';
import Login from './components/login';
import Signup from './components/signup';
import ParkSpot from './components/parkingspot';
import CarBookingForm from './components/bookingform';
import UserSignIn from './components/usersign';
import OwnerSignIn from './components/ownersign';

function App() {                
  return (
   <>
    <Navbs/>
    <Routes>
               
      <Route path='/' element={<Main/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/register' element={<Userreg/>}></Route>
      <Route path='/register2' element={<Regis/>}></Route>
      <Route path='/parkingspot' element={<ParkSpot/>}></Route>
      <Route path='/bookingform' element={<CarBookingForm/>}></Route>
      <Route path='/usersignin' element={<UserSignIn/>}></Route>
      <Route path='/ownersignin' element={<OwnerSignIn/>}></Route>
    </Routes>
    <Footer/>
   </>
  );
}

export default App;
                        