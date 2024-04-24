import { CartProvider } from './context/CartContext.jsx';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { initializeApp } from 'firebase/app';
import './index.css';

const firebaseConfig = {
  apiKey: 'AIzaSyDNCJKwaM9gY54vQZSzMLwicDSpxESEQAM',
  authDomain: 'entregafinalreact-43884.firebaseapp.com',
  projectId: 'entregafinalreact-43884',
  storageBucket: 'entregafinalreact-43884.appspot.com',
  messagingSenderId: '352804368235',
  appId: '1:352804368235:web:c00246310236ac314ee62e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <App />
  </CartProvider>
);
