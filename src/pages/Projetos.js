import React from 'react';
import { Link } from 'react-router-dom';
import "./projetos.css";

function Projetos() {
  const projetos = [
    {
      titulo: 'Lista de Tarefas',
      descricao: 'Aplicação para organizar tarefas diárias com React e LocalStorage.'
    },
    {
      titulo: 'Calculadora',
      descricao: 'Calculadora simples construída com JavaScript puro.'
    },
    {
      titulo: 'Meu Portfólio',
      descricao: 'Este próprio site, usando React Router para navegação entre páginas.'
    }
  ];

  return (
    <div className="container">
      <h1>Projetos</h1>

      {projetos.map((projeto) => (
        <div className="card" key={projeto.titulo}>
          <h3>{projeto.titulo}</h3>
          <p className="cinza">{projeto.descricao}</p>
        </div>
      ))}

      {/* Link cria navegação interna (client-side) sem recarregar a página */}
      <Link to="/" className="btn-vermelho">
        ← Voltar para a Home
      </Link>
    </div>
  );
}

export default Projetos;
