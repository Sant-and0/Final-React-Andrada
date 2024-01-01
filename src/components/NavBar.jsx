import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const db = getFirestore();
      const itemsCollection = collection(db, "items");
      const itemsSnapshot = await getDocs(itemsCollection);
      const categories = new Set(itemsSnapshot.docs.map(doc => doc.data().category));
      setCategories([...categories]);
    };
    fetchCategories();
  }, []);

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>SofTech</Navbar.Brand>
        </NavLink>
        <Nav className="me-auto">
          {categories.map(category => 
            <Nav.Link as={NavLink} key={category} to={`/category/${category}`}>
              {category}
            </Nav.Link>
          )}
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
