import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default Footer;

function Footer() {
 return (
  <footer className="bg-dark text-white py-3" style={{position: 'fixed', bottom: '0', width: '100%'}}>
    <Container >
      <Row>
        <Col className="text-center">
          <p>&copy; 2024 Softech. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
 );
}