import { StrictMode } from 'react'
// Importa o componente StrictMode da biblioteca React.
// O StrictMode ajuda a identificar problemas no código durante o desenvolvimento.
// Ele não afeta o comportamento em produção.

import { createRoot } from 'react-dom/client'
// Importa a função createRoot do React DOM.
// Essa função é responsável por criar a raiz da aplicação React no DOM real do navegador.
// Ela substitui o antigo ReactDOM.render (React 18+).

import './index.css'
// Importa o arquivo de estilos globais da aplicação.
// Esses estilos são aplicados a toda a aplicação, independentemente do componente.

import App from './App.tsx'
// Importa o componente App.
// Esse componente será o componente raiz da interface da aplicação.

createRoot(document.getElementById('root')!).render(
  // Cria a "raiz" do React vinculada ao elemento HTML com id="root".
  // document.getElementById('root') busca esse elemento no DOM.
  // O operador "!" (non-null assertion) diz ao TypeScript que esse elemento nunca será null.

  <StrictMode>
    {/* Envolve a aplicação com o StrictMode */}
    {/* O StrictMode executa verificações extras em desenvolvimento */}
    {/* Ele pode chamar funções duas vezes propositalmente para detectar efeitos colaterais */}

    <App />
    {/* Renderiza o componente App */}
    {/* App é o ponto inicial da árvore de componentes React */}
  </StrictMode>,
)

/*
Explicação conceitual (o que realmente acontece aqui)

1. O HTML inicial (index.html)

No projeto Vite, existe um arquivo parecido com este:
- <div id="root"></div>
- Esse div não tem conteúdo nenhum no início.

2. O React assume o controle
createRoot(document.getElementById('root')!)

Aqui o React:

A. Localiza o elemento <div id="root">
B. Cria uma raiz de renderização
C. Passa a controlar tudo que existir dentro desse elemento

3. O método .render()

.render(
  <StrictMode>
    <App />
  </StrictMode>
)

Isso diz ao React:
- “Pegue esse JSX e transforme em elementos reais no DOM”

4. O papel do <StrictMode>

O StrictMode:

1. Só funciona em desenvolvimento
2. Não gera HTML extra
3. Ajuda a detectar:
- Uso incorreto de useEffect
- Efeitos colaterais perigosos
- APIs obsoletas
- Lógica que não é idempotente

👉 Por isso, às vezes você vê funções rodando duas vezes no console.

5. A árvore de componentes começa aqui
<App />

Esse é o primeiro componente da aplicação.

A partir dele:
- O React monta a árvore de componentes
- Controla estados (useState)
- Executa efeitos (useEffect)
- Faz re-renderizações eficientes

Resumo rápido:

createRoot:	Cria a raiz da aplicação React
render():	Renderiza JSX no DOM
StrictMode:	Ajuda a detectar problemas
<App />:	Componente raiz
*/
