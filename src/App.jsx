import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Carrinho from './pages/Carrinho/Carrinho';
import Home from './pages/Home/Home';

export default function App() {
  return (
    <Routes>
      <Route  path='/' element={<Home />} />
      <Route path='Carrinho' element={<Carrinho />} />
    </Routes>
    
  );
}
