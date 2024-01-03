import React, { useContext, useState} from 'react';
import { CartContext } from '../contexts/CartContext';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { getFirestore, collection, addDoc } from "firebase/firestore";

const clearBuyer = { name: "", phone: "", email: "" };



function Cart() {
 const [buyer, setBuyer] = useState(clearBuyer);
 const { clear, items, removeItem } = useContext(CartContext);

 const total = items.reduce((acumulado, actual) => {
    return acumulado + actual.price * 5;
},0);

 const handleSendOrder = () => {
   const order = {buyer, items, total,};

   const db = getFirestore();
   const orderCollection = collection(db, "orders");

   addDoc(orderCollection, order).then(({ id }) => {
     if (id) {
       alert("Your order: " + id + " has been completed!");
     }
   }). finally(() => setBuyer(clearBuyer));
};

 const handleChange = (ev) => {
    const {name, value} = ev.target
    setBuyer(prev => {
        return {
            ...prev,
            [name]: value,
        };
    });
 };

 return (
  <Container>
   <Row style={{marginBottom: '90px'}}>
    <Col md={8}>
     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px', margin: '0 auto' }}>
     {items.map(item => (
       <div class="cart-item" key={item.id} style={{ display: 'flex', gap: '20px', borderBottom: '1px solid black', marginTop: '30px', marginBottom: '30px', padding: '20px' }}>
         <div style={{ flexBasis: '33.33%', height: '350px' }}>
           <img src={item.pictureUrl} style={{ maxWidth: '350px', height: 'auto', objectFit: 'cover' }} />
         </div>
         <div style={{ flexBasis: '66.66%', height: '350px' }}>
           <h2>{item.title}</h2>
           <p>{item.description}</p>
           <p>Price: ${item.price}</p>
           <p>Quantity: {item.quantity}</p>
           <p>Subtotal: ${item.price * item.quantity}</p>
           <div onClick={() => removeItem(item.id)}>
            X
           </div>
         </div>
       </div>
     ))}
     </div>
    </Col>
    <Col md={4} className="position-sticky" style={{ top: '50px' }}>
     <Form style={{backgroundColor: '#343a40', padding: '20px', borderRadius: '10px', color: 'white', marginTop: '50px'}}>
       <Form.Group className="mb-3 input-group">
         <Form.Label><strong>Name:</strong></Form.Label>
         <Form.Control required type="text" value={buyer.name} onChange={handleChange} name='name'/>
       </Form.Group>
       <Form.Group className="mb-3 input-group">
         <Form.Label><strong>Phone:</strong></Form.Label>
         <Form.Control required type="text" value={buyer.phone} onChange={handleChange} name='phone'/>
       </Form.Group>
       <Form.Group className="mb-3 input-group">
         <Form.Label><strong>Email:</strong></Form.Label>
         <Form.Control required type="email" value={buyer.email} onChange={handleChange} name='email' />
       </Form.Group>
       <Button variant="primary" onClick={handleSendOrder}>Buy Cart</Button>
     </Form>
    </Col>
   </Row>
  </Container>
 );
}

export default Cart;
