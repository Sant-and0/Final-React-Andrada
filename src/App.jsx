import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailsContainer } from './components/ItemDetailsContainer';
import { NavBar } from './components/NavBar';
import { CartProvider } from './contexts/CartContext';
import React from 'react';
import Footer from '../src/components/Footer';
import Cart from './components/Cart';
import ThanksPage from './components/ThanksPage';

function App() {
  return (
    <CartProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:id" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailsContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/thanks/:id" element={<ThanksPage/>} />
            </Routes>
        </BrowserRouter>
        <Footer />
    </CartProvider>
    
    );
};

export default App;