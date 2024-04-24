import { useState, useEffect } from "react"
import {
    getFirestore,
    getDocs,
    where,
    collection,
    query,
} from 'firebase/firestore';

export const useRequestList = (id) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const db = getFirestore();
        let refDoc;
        if (!id) refDoc = collection(db, 'products');
        else {
            refDoc = query(collection(db, 'products'), where('category', '==', id));
        }
        getDocs(refDoc)
            .then(snapshot => {
                setProducts(
                    snapshot.docs.map(iterator => {
                        return { id: iterator.id, ...iterator.data() };
                    })
                );
            })
            .catch(e => alert(`no se pudo conectar con el servidor ${e}`));
    }, [id]);

    return { products }
}