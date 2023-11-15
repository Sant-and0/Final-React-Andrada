import {useParams} from "react-router-dom";  
import {useState, useEffect} from "react"; 
import Container from "react-bootstrap/Container";


import { products } from "../data/products";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const {id} = useParams();

    useEffect (() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {resolve(products);}, 2000);
        });

        promise
          .then((response) => {
            if(id) {
                const filters = response.filter((item) => item.category === id);
                setItems(filters);
            } else {
                setItems(response);
            }
        })
        .finally(() => setLoading(false));
    }, [id]);

    return (
        <Container className="mt-auto">
            <h1 className="p-3">Productos</h1>
            <ItemList items={items} />
        </Container>
    )
}
