import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Checkout } from './components/Checkout';
import { NavBar } from './components/NavBar';
import './App.css';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={'/'} element={<ItemListContainer />} />
          <Route path={'/category/:id'} element={<ItemListContainer />} />
          <Route path={'/item/:id'} element={<ItemDetailContainer />} />
          <Route path={'/checkout'} element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
