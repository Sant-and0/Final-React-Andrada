import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

import { products } from '../data/products';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from './CartWidget';

  const categories = products.map ((item) => item.category);
  const uniqueCategories = new Set(categories);

export const NavBar = () => {
    return (<>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink to="/">
            <NavBar.Brand>SofTech</NavBar.Brand>
          </NavLink>
          <Nav className="me-auto">
          {[...uniqueCategories].map(item => 
            <Nav.Link as={NavLink} key={item} to={'/category/${item}'}>
              {item}
            </Nav.Link>
            )}
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
            </>)
};
