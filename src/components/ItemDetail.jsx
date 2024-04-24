import { ItemCount } from './ItemCount';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const ItemDetail = ({ item }) => {
  const { addCart } = useContext(CartContext);

  const add = quantity => addCart(item, quantity);

  return (
    <main>
      <section className='container-detail'>
        <img src={item.img}></img>
        <h2>{item.product}</h2>
        <h3>{item.description}</h3>
        <h3>STOCK: {item.stock}</h3>
        <h3>${item.price}</h3>
        <ItemCount onAdd={add} stock={item.stock} />
      </section>
    </main>
  );
};
