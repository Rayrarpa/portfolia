import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

// Função auxiliar que recebe o objeto { isActive } fornecido pelo NavLink
// e devolve a classe CSS correta dependendo se o link é o da rota atual.
function getLinkClass({ isActive }) {
  return isActive ? 'nav-link nav-link-ativo' : 'nav-link';
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Meu<span className="navbar-logo-destaque">Portfólio</span>
      </div>

      <div className="navbar-links">
        {/* NavLink, diferente do Link, sabe se a própria rota está ativa.
            A propriedade isActive (recebida dentro da função className)
            é usada aqui para aplicar o estilo "nav-link-ativo" somente
            ao link da página em que o usuário está no momento. */}
        <NavLink to="/" className={getLinkClass} end>
          Home
        </NavLink>
        <NavLink to="/sobre" className={getLinkClass}>
          Sobre
        </NavLink>
        <NavLink to="/projetos" className={getLinkClass}>
          Projetos
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
