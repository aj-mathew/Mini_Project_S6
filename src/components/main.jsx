import Carousel from 'react-bootstrap/Carousel';
import bg1 from '../images/image.jpg';
import bg2 from '../images/image2.jpg';
import bg3 from '../images/image3.jpg';
import { Container,Card,Button,Row,Col} from 'react-bootstrap';
import Navbs from "./navbs"

function Main() {
  return (
    <>
    <Navbs/>
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
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
          
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Container className='mb-4'>
            <Row className='mt-4'> 
                <Col lg='6'>
                <Card className='card'>
      <Card.Img variant="top" src={bg1} />
      <Card.Body>
        <Card.Title className='justify-content-center text-center'>Leave a Rating</Card.Title>
        <Card.Text className='justify-content-center text-center'>
          How was your experience with us?
          Your feedback is valuable to us 
          Please help us to improve 
        </Card.Text>
        <Button variant="primary" className='flex'>Rate Us</Button>
      </Card.Body>
    </Card>
 </Col>

 <Col lg='6'>
                <Card>
      <Card.Img variant="top" src={bg1} />
      <Card.Body>
        <Card.Title className='justify-align-center text-center'>Manage Your Bookings</Card.Title>
        <Card.Text className='justify-content-center text-center'>
          Manage all your bookings here
        </Card.Text>
        <Button variant="primary">Manage</Button>
      </Card.Body>
    </Card>
 </Col>

 {/* <Col lg='4'>
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bg1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
 </Col> */}

 
            </Row>

{/* 
      <Row className='mt-4'>
        <Col lg='4'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bg1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


        </Col>

        <Col lg='4'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bg1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


        </Col>


        <Col lg='4'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bg1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


        </Col>
      </Row> */}

        </Container>



</>
  );
}

export default Main;