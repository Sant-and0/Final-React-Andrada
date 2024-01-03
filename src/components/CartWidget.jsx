import { Link } from 'react-router-dom';
import { useContext } from 'react';
import cart from '../assets/cart.png';
import { CartContext } from '../contexts/CartContext';

export const CartWidget = () => {
    const { items } = useContext(CartContext);
    const total = items.reduce((acumulador, actual) => acumulador + actual.quantity, 0);
    return (
        <Link to="/cart">
            <div>
                <img width="40px" src={cart} alt="cart"/>
                <span>{total}</span>
            </div>
        </Link>
    );
};