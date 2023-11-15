import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Item } from './Item';

export const ItemList = ({items}) => {
    return (
        <Container>
            <Row>
                {items.map((item) => (
                   <Col sm={12} md={6} lg={4} key={item.id} className="p-3">
                       <Item item={item} />
                   </Col>
                ))}
            </Row>
        </Container>
    );
 };