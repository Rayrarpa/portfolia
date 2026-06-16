import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
