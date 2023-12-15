import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailsContainer } from './components/ItemDetailsContainer';
import { NavBar } from './components/NavBar';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:id" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailsContainer />} />
            </Routes>
        </BrowserRouter>
    </CartProvider>
    );
};

export default App;
