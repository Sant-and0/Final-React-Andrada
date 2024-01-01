import { Link } from 'react-router-dom';
import cart from '../assets/cart.png';
export const CartWidget = () => {
    
    return (
        <Link to="/cart">
            <div>
                <img width="40px" src={cart} alt="carrito"/>
                <span>4</span>
            </div>
        </Link>
    )
}