import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({ item }) => {
 
  return (
  <Card style={{ width: '24rem', height: '36rem' }} className="d-flex flex-column">
      <Card.Img variant="top" src={item.pictureUrl} style={{width: '100%', height: '60%', objectFit: 'contain'}} />
      <Card.Body className="flex-grow-1 overflow-hidden">
          <Card.Title>{item.title}</Card.Title>
          <p className="card-text">
              {item.description}
          </p>
      </Card.Body>
      <Link className="p-3"to={`/item/${item.docId}`}>
          <Button variant="primary">View details</Button>
      </Link>
  </Card>
  );
 };