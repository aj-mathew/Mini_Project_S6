import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { Row,Col } from 'react-bootstrap';
import { useState } from 'react';
import AXIOS from 'axios';

import { useNavigate } from 'react-router-dom';


function User_login() {
  const [eml, setEml] = useState("");
  const [pss, setPss] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await AXIOS.post('http://localhost:9000/login', { eml, pss });

      if (response.data.message === 'Login successful') {
        if (response.data.userinfo.role === 'user') {
          navigate('/userloadout');
        } 
        else if(response.data.userinfo.role === 'owner'){
          alert("I am an owner wee"); // navigate to owner loadout
        }
      }
    } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert('Internal server error');
        }
      }

    setEml("");
    setPss("");
  }

  
  return (
    <MDBContainer fluid>
    
      <div className="p-5 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px'}}></div>

      <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-5 text-center'>

          
          <Row className='justify-content-end'>
            <Col lg='6' >
              <img  className='mt-4' style={{width:'100%'}}/>
            </Col>
            <Col lg='6'>
                <h2 className="fw-bold mt-4 mb-5">LOGIN</h2>
               
                <Row className='justify-content-center'>
                   <Col lg='10'>
                       <MDBInput wrapperClass='mb-4' placeholder='Email' value={eml} id='form1' type='email' onChange={(e)=>setEml(e.target.value)} style={{width:'20rem'}}/>
                   </Col>
                 </Row>
                 <Row className='justify-content-center'>
                   <Col lg='10'>
                       <MDBInput wrapperClass='mb-4' placeholder='Password' id='form1' value={pss} type='password' onChange={(e)=>setPss(e.target.value)} style={{width:'20rem'}}/>
                   </Col>
                 </Row>
                <div className='d-flex justify-content-center mb-4'>
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                </div>
                

                <MDBBtn className='w-40 mt-2 mb-5' size='md' onClick={handleLogin}>Login</MDBBtn>
                <div>
                     <p className="mb-0">Don't have an account? <a href="/signup" class="text-black-50 fw-bold">Sign Up</a></p>
                </div>
            </Col>
          </Row>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default User_login;