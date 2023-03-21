import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carrinho from './Components/Rotas/Carrinho'

export default function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/Carrinho" element={<Carrinho />} />
      </Routes>
    </Router>
  );
}
