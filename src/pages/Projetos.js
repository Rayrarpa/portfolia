import React from 'react';
import { Link } from 'react-router-dom';
import "./projetos.css";

function Projetos() {
  const projetos = [
    {
      titulo: 'Checkpoint',
      descricao: 'Projeto Checkpoint usando conhecimentos ReactJS',
      url: 'https://github.com/Rayrarpa/checkpoint'
    },
    {
      titulo: 'Deloesia',
      descricao: 'Projeto usando MongoDB e NodeJS para um portal de postagem de poesias',
      url: 'https://github.com/Rayrarpa/deloesia'
    },
    {
      titulo: 'Futemon',
      descricao: 'Jogo 2d pixelart inspirado no estilo de pokemon utilizando times brasileiros',
      url: 'https://github.com/Rayrarpa/futemon',
      img: 'Exemplo.png'
    }
  ];

  return (
    <div className="container-projetos">
      <h1>Projetos</h1>

      <div className='container-altar'>
      {projetos.map((projeto) => (
        <div className="card-projeto" key={projeto.titulo}>
          <img src={projeto.img}></img>
          <h3>{projeto.titulo}</h3>
          <p className="cinza">{projeto.descricao}</p>
          <a href={projeto.url} target='_blank'>Ver Link</a>
        </div>
      ))}
      </div>

      <Link to="/" className="btn-vermelho">
        ← Voltar para a Home
      </Link>
    </div>
  );
}

export default Projetos;
