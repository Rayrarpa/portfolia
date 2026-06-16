import React from 'react';
import { Link } from 'react-router-dom';

function Sobre() {
  return (
    <div className="container">
      <h1>Quem sou eu</h1>
      <p className="cinza">
        Sou estudante de desenvolvimento web, apaixonado por construir
        interfaces e aprender frameworks como React. Gosto de transformar
        ideias simples em aplicações funcionais e organizadas.
      </p>

      <div className="card">
        <h3>Habilidades</h3>
        <p className="cinza">HTML, CSS, JavaScript, React, Git</p>
      </div>

      {/* Link cria navegação interna (client-side) sem recarregar a página */}
      <Link to="/projetos" className="btn-vermelho">
        Ver meus projetos →
      </Link>
    </div>
  );
}

export default Sobre;
