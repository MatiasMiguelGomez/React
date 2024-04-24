import { useRequestList } from '../hooks/useRequestList';
import { useParams, Link } from 'react-router-dom';

export const ItemListContainer = () => {
  const { id } = useParams();

  const { products } = useRequestList(id);

  if (products.length === 0) {
    return <h2 className='loader'>Loading...</h2>;
  }

  return (
    <main className='container'>
      {products.map(product => (
        <div key={product.id} className='card'>
          <img src={product.img} alt={`imagen de ${product.product}`} />
          <h2>{product.product}</h2>
          <h3>${product.price}</h3>
          <h3>{product.category}</h3>
          <Link to={`/item/${product.id}`}>
            <button>Ver Detalles</button>
          </Link>
        </div>
      ))}
    </main>
  );
};
