import { useState } from 'react';
export const ItemCount = ({ onAdd, stock }) => {
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    if (stock > count) {
      setCount(count + 1);
    }
  };

  const handleMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleCart = () => {
    onAdd(count);
    setCount(1);
  };

  return (
    <div className='buttons-cart'>
      <button onClick={handleMinus}>-</button>
      <label htmlFor=''>{count}</label>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleCart}>Agregar al carrito</button>
    </div>
  );
};
