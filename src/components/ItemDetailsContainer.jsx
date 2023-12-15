import {useContext, useState, useEffect} from 'react'; 
import {useParams} from 'react-router-dom';  
import Container from "react-bootstrap/Container";

import { products } from '../data/products';
import { CartContext } from '../contexts/CartContext';

export const ItemDetailsContainer = () => {
    const [item, setItem] = useState(null);

    const {id} = useParams();

    const { addItem } = useContext(CartContext);

    useEffect (() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {resolve(products);}, 2000);
        });
        promise
          .then((response) => {
                const filters = response.find((item) => item.id == id);
                setItem(filters);
        })
    }, [id]);
    
    if(!item) {
        return <>Loading...</>;
    };

    return (
        <div>
            <h1>{item.title}</h1>
            <img src={item.pictureUrl} width={500} />
            <p>{item.description}</p>
            <button onClick={() => addItem(item)}>Add to cart</button>
        </div>
    );
};
