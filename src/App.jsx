import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailsContainer } from './components/ItemDetailsContainer';
import { Cart } from './components/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

import { initializeApp } from "firebase/app";
import { Checkout } from './components/Checkout';

const firebaseConfig = {
  apiKey: "AIzaSyCP-TJ0V37j0xxBrxejzwW6zTQKbV5TV6A",
  authDomain: "ecommerce47230.firebaseapp.com",
  projectId: "ecommerce47230",
  storageBucket: "ecommerce47230.appspot.com",
  messagingSenderId: "1091479609744",
  appId: "1:1091479609744:web:4deb6d0848b50a0126d315"
};

initializeApp(firebaseConfig);

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
          <Route exact path='/item/:id' element={<ItemDetailsContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
