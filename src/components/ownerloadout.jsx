import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Owner_Loadout(){
    return(
        <>
        <Navbar className='navbs' expand="lg">
      <Container>
        <Navbar.Brand href="/">Parkify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
          
          <Nav.Link href="/createspot">Create Spot</Nav.Link>
            <Nav.Link href="/">Logout</Nav.Link>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


        </>
    )
}

export default Owner_Loadout