import { useContext, useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom'; 
import { doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { CartContext } from '../contexts/CartContext';

const firebaseApp = initializeApp({
 apiKey: "AIzaSyCUwh9aZtXDRwMbCYASeNcbJksdGBnnGl0",
 authDomain: "react-final-andrada.firebaseapp.com",
 projectId: "react-final-andrada",
 storageBucket: "react-final-andrada.appspot.com",
 messagingSenderId: "94238635094",
 appId: "1:94238635094:web:092a498386666c5910b7f7"
});
const db = getFirestore(firebaseApp);

export const ItemDetailsContainer = () => {
 const [item, setItem] = useState(null);
 const [loading, setLoading] = useState(true);
 const {id} = useParams();

 const { addItem } = useContext(CartContext);

 useEffect (() => { 
 const refDoc = doc(db, "items", id);
 
 getDoc(refDoc).then((snapshot) => {
 setItem({ id: snapshot.id, ...snapshot.data() });
 }).finally(() => setLoading(false));
 }, [id]);
 
 if(loading) {
 return <>Loading...</>;
 };

 return (
 <Container className="mt-5 p-3">
 <Row>
    <Col md={6} className="d-flex flex-column justify-content-between align-items-center border border-light rounded p-3">
       <img src={item.pictureUrl} style={{maxWidth: '500px', maxHeight: '600px'}} />
    </Col>
    <Col md={6} className="d-flex flex-column justify-content-start align-items-start border border-light rounded p-3">
       <div className="mb-4">
         <h1>{item.title}</h1>
         <p>${item.price}</p>
         <p>{item.description}</p>
       </div>
       <div className="ml-3 mt-3">
         <Button variant="primary" onClick={() => addItem(item)}>Add to cart</Button>
       </div>
    </Col>
 </Row>
 </Container>
 );
};
