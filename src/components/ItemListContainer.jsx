import {useParams} from "react-router-dom";  
import {useState, useEffect} from "react"; 
import Container from "react-bootstrap/Container";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";

import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const {id} = useParams();

    useEffect (() => {
        const db = getFirestore();
    
        const refCollection = id 
        ? query(
            collection(db, "items"), where("category", "==", id))
        : collection(db, "items");
    
        getDocs(refCollection).then((snapshot) => {
          if (snapshot.size === 0) console.log("no results");
          else {
                setItems(
              snapshot.docs.map((doc) => {
                return { docId: doc.id, ...doc.data() };
              })
             );
            }
        });
    }, [id]);

    return (
        <Container className="mt-auto" >
            <h1 className="p-3">Products</h1>
            <ItemList items={items} />
        </Container>
    )
}
