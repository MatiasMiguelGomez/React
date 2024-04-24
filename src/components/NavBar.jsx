import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
export const NavBar = () => {
  return (
    <div className='header'>
      <div>
        <Link to='/' className='custom-link'>
          <strong className='label-header'>Ecomerce</strong>
        </Link>
      </div>
      <Dropdown className='dropdown-header'>
        <Dropdown.Toggle as='div' className='custom-toggle' id='dropdown-basic'>
          Categorias
        </Dropdown.Toggle>

        <Dropdown.Menu className='custom-menu'>
          <Dropdown.Item as='div'>
            <Link to='/category/Electrodomésticos'>Electrodomesticos</Link>
          </Dropdown.Item>

          <Dropdown.Item as='div'>
            <Link to='/category/Higiene%20Personal'>Higiene Personal</Link>
          </Dropdown.Item>

          <Dropdown.Item as='div'>
            <Link to='/category/Hogar'>Hogar</Link>
          </Dropdown.Item>

          <Dropdown.Item as='div'>
            <Link to='/category/Juguetes'>Juguetes</Link>
          </Dropdown.Item>

          <Dropdown.Item as='div'>
            <Link to='/'>Quitar Filtros</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <CartWidget />
    </div>
  );
};
