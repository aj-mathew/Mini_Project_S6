import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardz() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="image.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          PSG Jersey
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardz;