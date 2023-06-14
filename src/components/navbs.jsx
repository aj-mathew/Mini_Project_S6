import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbs.css'

function Navbs() {
  return (
    <Navbar className='navbs' expand="lg">
      <Container>
        <Navbar.Brand href="/">Parkify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
            <NavDropdown title="Sign In" id="basic-nav-dropdown">
              <NavDropdown.Item href="/usersignin">User</NavDropdown.Item>
              <NavDropdown.Item href="/ownersignin">
                Owner
              </NavDropdown.Item>
             
            </NavDropdown>
            <Nav.Link href="/parkingspot">Book Spot</Nav.Link>
            <Nav.Link href="/signin">Sign In</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbs;