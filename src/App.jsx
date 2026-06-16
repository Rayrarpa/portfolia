import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';

// BrowserRouter envolve toda a aplicação e habilita a navegação por rotas
// usando a History API do navegador, sem recarregar a página a cada troca de URL.
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Routes é o container que agrupa todas as definições de rota da aplicação */}
      <Routes>
        {/* Cada Route mapeia um caminho (path) para o componente de página correspondente */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
