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


function Login() {
  
  return (
    <MDBContainer fluid>

      <div className="p-5 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px'}}></div>

      <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-5 text-center'>

          
          <Row className='justify-content-end'>
            <Col lg='6'>
              <img  className='mt-4' style={{width:'100%'}}/>
            </Col>
            <Col lg='6'>
                <h2 className="fw-bold mt-4 mb-5">LOGIN</h2>
                {/* <Row className='justify-content-center'>
                    <Col lg='5'>
                    <MDBInput wrapperClass='mb-4' placeholder='First Name' id='form1' type='text' style={{width:'15rem'}}/>
                    
                    </Col>
                    <Col lg='5'>
                    <MDBInput wrapperClass='mb-4' placeholder='Last Name' id='form1' type='text' style={{width:'15rem'}}/>   
                    </Col>
                </Row> */}
                <Row className='justify-content-center'>
                   <Col lg='10'>
                       <MDBInput wrapperClass='mb-4' placeholder='Email' id='form1' type='email' style={{width:'20rem'}}/>
                   </Col>
                 </Row>
                 <Row className='justify-content-center'>
                   <Col lg='10'>
                       <MDBInput wrapperClass='mb-4' placeholder='Password' id='form1' type='email' style={{width:'20rem'}}/>
                   </Col>
                 </Row>
                 {/* <Row className='justify-content-center'>
                    <Col lg='5'>
                    <MDBInput wrapperClass='mb-4' placeholder='Password' id='form1' type='password' style={{width:'15rem'}}/>
                    
                    </Col>
                    <Col lg='5'>
                    <MDBInput wrapperClass='mb-4' placeholder='Confirm Password' id='form1' type='password' style={{width:'15rem'}}/>   
                    </Col>
                </Row> */}
                <div className='d-flex justify-content-center mb-4'>
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                </div>
                

                <MDBBtn className='w-40 mt-2 mb-5' size='md'>Login</MDBBtn>
                <div>
                     <p className="mb-0">Don't have an account? <a href="/signup" class="text-black-50 fw-bold">Sign Up</a></p>
                </div>
            </Col>
          </Row>

          {/* <MDBRow>
            <MDBCol col='3'>
              <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
            </MDBCol>

            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
            </MDBCol>
          </MDBRow> */}

          {/* <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/> */}

          

          {/* <div className="text-center">

            <p>or sign up with:</p>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='facebook-f' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='twitter' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='google' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='github' size="sm"/>
            </MDBBtn>

          </div>
             */}
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Login;