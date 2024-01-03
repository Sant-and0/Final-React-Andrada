import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function ThanksPage() {
 const { id } = useParams();

 return (
 <Container style={{backgroundColor: '#d3d3d3', borderRadius: '10px', padding: '20px',display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',marginTop: '60px'
 }}>
 <h2>Thanks for your purchase!</h2>
 <p>The purchase data is being verified, this may take a while, as soon as it is ready you will be notified by Email.</p>
 <h3>Your order number is: <span style={{ color: '#3fa7c0' }}>{id}</span></h3>
 </Container>
 );
}

export default ThanksPage;
