# Meu Portfólio Pessoal

Aplicação React com três páginas (Home, Sobre e Projetos) que demonstra todos os
mecanismos de navegação do React Router v6.

## Como executar

```bash
npm install
npm start
```

A aplicação abrirá em `http://localhost:3000`.

## Onde cada conceito aparece no código

- **BrowserRouter** — `src/App.js`. Envolve toda a aplicação e habilita a
  navegação por URL usando a History API, sem recarregar a página.
- **Routes** — `src/App.js`. Container que agrupa todas as `Route` da aplicação.
- **Route** — `src/App.js`. Cada `<Route path="..." element={...} />` mapeia um
  caminho de URL (`/`, `/sobre`, `/projetos`) ao componente de página correspondente.
- **Link** — usado dentro de cada página (`Home.js`, `Sobre.js`, `Projetos.js`)
  para criar os botões de navegação interna, sem recarregar o navegador:
  - Home → botão "Conheça mais sobre mim" leva para `/sobre`
  - Sobre → botão "Ver meus projetos" leva para `/projetos`
  - Projetos → botão "Voltar para a Home" leva para `/`
- **NavLink + isActive** — `src/components/Navbar.js`. Na barra de navegação,
  o `NavLink` recebe uma função em `className` que é chamada pelo React Router
  com o objeto `{ isActive }`. Quando `isActive` é `true` (ou seja, quando a
  rota daquele link é a rota atual), é aplicada a classe `nav-link-ativo`,
  que destaca o link em vermelho com uma linha inferior — diferenciando
  visualmente a página em que o usuário está.

## Tema visual

Paleta preto e vermelho, com tipografia monoespaçada nos títulos para dar
um toque de "terminal/dev" ao portfólio.
