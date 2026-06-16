import React from 'react';
import { Link } from 'react-router-dom';
import './sobre.css';

function Sobre() {
  return (
    <div className="container">
      <h1>Quem sou eu</h1>
      <p className="cinza">
        Um mero estudante da IFRJ
      </p>

      <div className="card">
        <h3>Meu Nome</h3>
        <p className="cinza">Rafael Delforge Samy Fernandes</p>
      </div>
      <div className="card">
        <h3>Hobbies</h3>
        <ul>
          <li className="cinza">Videogames</li>
          <li className="cinza">Animes</li>
          <li className="cinza">Biscuit</li>
          <li className="cinza">Mangás</li>
          <li className="cinza">Livros</li>
        </ul>
      </div>

      <div className="card">
        <h3>Meu Github</h3>
        <a href='https://github.com/Rayrarpa' target='_blank' className="cinza link">GithubLink</a>
      </div>

      <div className='ababa'>
        <Link to="/projetos" className="btn-vermelho projlink">
          Meus Projetos
        </Link>
      </div>
    </div>
  );
}

export default Sobre;
