import {useParams} from 'react-router-dom';  
import {useState, useEffect} from 'react'; 

import { products } from '../data/products';

export const ItemDetailsContainer = () => {
    const [item, setItem] = useState(null);

    const {id} = useParams();

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
        </div>
    );
};
