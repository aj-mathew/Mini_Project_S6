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

function Signup() {
    const[fnam,setFam]=useState('')
    const[lnam,setLnam]=useState('')
    const[eml,setEml]=useState('')
    const[pss,setPss]=useState('')
    const[cpss,setCpss]=useState('')
    const navigate=useNavigate()
    const [role, setRole] = useState('');  
    
    const Create = async () => {
      try {
        const response = await AXIOS.post('http://localhost:9000/signup', {
          fnam,
          lnam,
          eml,
          pss,
          cpss,
          role
        });
    
        console.log(response.data.message);
    
        if (response.data.message === 'Success') {
          alert('Registration Successful!');
          navigate('/userlogin');
          setFam('');
          setLnam('');
          setEml('');
          setPss('');
          setCpss('');
          setRole('');
        } 
        else if(response.data.message == 'User already exists') {
          alert('User already exists');
          
          setFam('');
          setLnam('');
          setEml('');
          setPss('');
          setCpss('');
          setRole('');
          console.log("user exists bro")
        }
       }
       catch (error) {
        console.error('Error creating user', error);
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert('Internal server error');
        }
      }
    };
    

    
    return (
      <MDBContainer fluid>
  
        <div className="p-5 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px'}}></div>
  
        <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
          <MDBCardBody className='p-5 text-center'>
  
            
            <Row className='justify-content-center'>
              <Col lg='6' >
                  <h2 className="fw-bold mt-4 mb-5">Sign up now</h2>
                  <div>
                
                <Col>
                 <input
                    type="radio"
                    name="role"
                    value="user"
                     checked={role === 'user'}
                     onChange={()=>setRole('user')}
                  />{'  '}
                User
               
               </Col>
                
                 <Col>

                 <input
                     type="radio"
                     name="role"
                     value="owner"
                     checked={role === 'owner'}
                     onChange={()=>setRole('owner')}
                     />{'  '}
                    Owner
                 </Col>
                    
                  </div> 
                  <Row className='justify-content-center'>
                      <Col lg='5'>
                      <MDBInput wrapperClass='mb-4' value={fnam} placeholder='First Name' id='form1' type='text' onChange={(e)=>setFam(e.target.value)} style={{width:'15rem'}}/>
                      
                      </Col>
                      <Col lg='5'>
                      <MDBInput wrapperClass='mb-4' value={lnam} placeholder='Last Name' id='form1' type='text' onChange={(e)=>setLnam(e.target.value)} style={{width:'15rem'}}/>   
                      </Col>
                  </Row>
                  <Row className='justify-content-center'>
                     <Col lg='10'>
                         <MDBInput wrapperClass='mb-4' value={eml} placeholder='Email' id='form1' type='email' onChange={(e)=>setEml(e.target.value)} style={{width:'31rem'}}/>
                     </Col>
                   </Row>
                   <Row className='justify-content-center'>
                      <Col lg='5'>
                      <MDBInput wrapperClass='mb-4' value={pss} placeholder='Password' id='form1' type='password' onChange={(e)=>setPss(e.target.value)} style={{width:'15rem'}}/>
                      
                      </Col>
                      <Col lg='5'>
                      <MDBInput wrapperClass='mb-4' value={cpss} placeholder='Confirm Password' id='form1' type='password' onChange={(e)=>setCpss(e.target.value)} style={{width:'15rem'}}/>   
                      </Col>
                  </Row>
                  <div className='d-flex justify-content-center mb-4'>
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                  </div>
                  
  
                  <MDBBtn className='w-40 mt-2 mb-5' onClick={Create} size='md'>Sign Up</MDBBtn>
            
              </Col>
            </Row>
          </MDBCardBody>
        </MDBCard>
  
      </MDBContainer>
    );
  }
  
  export default Signup;