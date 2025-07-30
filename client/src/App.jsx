import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Products from './pages/products';
import ProductDetail from './pages/productdetail';
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import Login from './pages/login';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';

import CartProvider from './context/CartContext'; // 🛒 Import the provider

function App() {
  return (
    <CartProvider> {/* 🛒 Wrap the whole app */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;