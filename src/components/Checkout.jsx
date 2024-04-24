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
    }
  };

  if (cart.length === 0) {
    return (
      <h2>Tu carrito esta vacio, te invitamos a gastar dinero para llenarlo</h2>
    );
  }
  return (
    <>
      <main className='container-checkout'>
        <table className='checkout-table'>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <tr key={item.id}>
                <td className='table-products'>
                  <img src={item.img} alt={`nombre de ${item.product}`} />
                  <span>{item.product}</span>
                </td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>${subTotalCalc(item.quantity, item.price)}</td>
                <td>
                  <button
                    className='button-checkout'
                    onClick={() => restCart(item.id)}
                  >
                    Restar Item
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <aside className='aside-checkout'>
          <p>
            Necesitas registrarte para poder efectuar la compra, por favor
            ingresa tus datos en el formulario
          </p>
          <Formulario
            handleData={handleData}
            person={person}
            error={error}
            handleSubmit={handleSubmit}
          />
        </aside>
      </main>
      <div className='total-checkout'>
        <button onClick={clearCart}>Limpiar carrito</button>
        <label htmlFor=''>Total:</label>
        <label htmlFor=''>${totalCalc(cart)}</label>
      </div>
    </>
  );
};
