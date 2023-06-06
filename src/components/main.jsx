import Carousel from 'react-bootstrap/Carousel';
import bg1 from '../images/image.jpg';
import bg2 from '../images/image2.jpg';
import bg3 from '../images/image3.jpg';
import { Container,Card,Button,Row,Col} from 'react-bootstrap';

function Main() {
  return (
    <>
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

    <Container>
            <Row className='mt-4'> 
                <Col lg='4'>
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bg1} />
      <Card.Body>
        <Card.Title>The All Seeing Eye</Card.Title>
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

 
            </Row>


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
      </Row>

        </Container>



</>
  );
}

export default Main;