import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, 'products', id);
    getDoc(refDoc).then(snapshot => {
      setItem({ id: snapshot.id, ...snapshot.data() });
    });
  }, [id]);

  if (item === null) {
    return <h2 className='loader'>loading...</h2>;
  }

  return <ItemDetail item={item} />;
};
