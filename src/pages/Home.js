import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css";

function Home() {
  return (
    <div className="container-home">
      <div className='info'>
        <img className='pfp' src='/batata.jpg'></img>
        <div className='info-texto'>
          <h1>Rafael Delforge</h1>
          <p className="cinza">
            Sou estudante do 5° periodo do ensino médio integrado com técnico de informático no Instituto Federal do Rio de Janeiro do Campus Niterói
          </p>
          <Link to="/about" className="btn-vermelho">
            Sobre Mim
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
