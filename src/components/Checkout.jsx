import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { usePerson } from '../hooks/usePerson';
import { useTotalPrices } from '../hooks/useTotalPrices';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { Formulario } from './Formulario';
import '../App.css';

export const Checkout = () => {
  const { cart, clearCart, restCart } = useContext(CartContext);

  const { handleData, person } = usePerson();

  const { totalCalc, subTotalCalc } = useTotalPrices();

  const [error, setError] = useState('');

  const createTicket = () => {
    const totalTicket = totalCalc(cart);
    const finalTicket = {
      buyer: { ...person },
      ticket: [...cart],
      total: totalTicket,
    };
    return finalTicket;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (person.email !== person.confEmail) {
      setError('active');
    } else {
      setError('');
      const ticketToSend = createTicket();

      if (ticketToSend) {
        const db = getFirestore();
        const refDoc = collection(db, 'orders');
        addDoc(refDoc, ticketToSend).then(({ id }) => {
          if (id) {
            alert(`tu compra fue exitosa ${id}`);
          }
        });
      }

      clearCart();
    }
  };

  console.log(cart);
  if (cart.length === 0) {
    return (
      <h2 className='retorno-temprano'>
        Tu carrito esta vacio, te invitamos a gastar dinero para llenarlo
      </h2>
    );
  }
  return (
    <main className='main-container'>
      <section className='section-container'>
        <div className='cards-container'>
          <span className='title-container'>
            <h2 className='title-table-container'>Producto</h2>
            <h2 className='title-table-container'>Cantidad</h2>
            <h2 className='title-table-container'>Precio</h2>
            <h2 className='title-table-container'>Subtotal</h2>
            <h2 className='title-table-container'>Quitar unidad</h2>
          </span>
          <div className='card-list'>
            {cart.map(product => (
              <div className='card-product' key={product.id}>
                <span className='card-image-apart'>
                  <img src={product.img} alt={`Imagen de ${product.name}`} />
                  <h2 className='title-product-h2'>{product.product}</h2>
                </span>
                <h2 className='title-category'>x{product.quantity}ud</h2>
                <h2 className='title-category'>${product.price}</h2>
                <button
                  onClick={() => {
                    restCart(product.id);
                  }}
                >
                  Quitar unidad
                </button>
                <h2 className='title-category'>
                  ${subTotalCalc(product.quantity, product.price)}
                </h2>
              </div>
            ))}
          </div>
        </div>
        <div className='total-checkout'>
          <button onClick={clearCart}>Limpiar carrito</button>
          <label htmlFor=''>Total: ${totalCalc(cart)}</label>
        </div>
      </section>
      <aside className='aside-checkout'>
        <p>
          Necesitas registrarte para poder efectuar la compra, por favor ingresa
          tus datos en el formulario
        </p>
        <Formulario
          handleData={handleData}
          person={person}
          error={error}
          handleSubmit={handleSubmit}
        />
      </aside>
    </main>
  );
};
