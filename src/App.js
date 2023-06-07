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
//hi
function App() {
  return (
   <>
    <Navbs/>
    <Routes>
               
      <Route path='/' element={<Main/>}></Route>
      <Route path='/signin' element={<Login/>}></Route>
      <Route path='/register' element={<Userreg/>}></Route>
      <Route path='/register2' element={<Regis/>}></Route>
    </Routes>
    <Footer/>
   </>
  );
}

export default App;
                        