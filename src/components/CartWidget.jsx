import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import cartImage from '../assets/cartImage.svg';
import '../App.css';
export const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const totalProducts = cart.reduce(
    (total, products) => total + products.quantity,
    0
  );
  return (
    <div className='cartWidget-header'>
      <Link to='/checkout'>
        <img src={cartImage} alt='' className='imagen' />
        <strong className='cartWidget-total'>{totalProducts}</strong>
      </Link>
    </div>
  );
};
