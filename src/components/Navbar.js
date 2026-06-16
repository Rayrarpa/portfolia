import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function getLinkClass({ isActive }) {
  return isActive ? 'nav-link nav-link-ativo' : 'nav-link';
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        PortRay
      </div>

      <div className="navbar-links">
        <NavLink to="/" className={getLinkClass} end>
          Home
        </NavLink>
        <NavLink to="/about" className={getLinkClass}>
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
