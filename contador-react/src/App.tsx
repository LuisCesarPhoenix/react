import { useState } from 'react'
// Importa o hook useState da biblioteca React.
// O useState é usado para criar e controlar estados dentro de componentes funcionais.

import reactLogo from './assets/react.svg'
// Importa a imagem do logo do React que está dentro da pasta assets.
// O Vite permite importar arquivos estáticos diretamente no JavaScript/TypeScript.

import viteLogo from '/vite.svg'
// Importa o logo do Vite a partir da raiz do projeto.
// O caminho começa com "/" porque o Vite resolve automaticamente esse arquivo.

import './App.css'
// Importa o arquivo de estilos CSS específico do componente App.
// Esses estilos serão aplicados aos elementos renderizados por este componente.

/*
import Swal from 'sweetalert2'  
// Importa a biblioteca SweetAlert2 para exibir alertas bonitos e customizáveis.
// Eu desabilitei aqui porque ele já foi importado em todas as funções para arquivos separados em utils.
*/

import { carregar } from './utils/carregar'  
// Importa a função carregar do arquivo carregar.ts para ser usada no componente App.

import { error } from './utils/error'  
// Importa a função error do arquivo error.ts para ser usada no componente App.

import { success } from './utils/success'
// Importa a função success do arquivo success.ts para ser usada no componente App.

import { warning } from './utils/warning'
// Importa a função warning do arquivo warning.ts para ser usada no componente App.

import { adicionar, reduzir } from './utils/contador.ts'
// Importa as funções adicionar e reduzir do arquivo contador.ts para serem usadas no componente App.

function App() {
  // Define um componente funcional chamado App.
  // Em React, um componente é uma função que retorna JSX.

  const [count, setCount] = useState(10)
  // Declara um estado chamado "count" com valor inicial 10.
  // "count" guarda o valor atual do contador.
  // "setCount" é a função responsável por atualizar o valor de "count".
  // Sempre que setCount é chamado, o componente é re-renderizado.

  /*
  const adicionar = () => {
    // Define uma função chamada "adicionar".
    // Essa função será executada quando o usuário clicar no botão "Adicionar".

    setCount((count) => count + 1)
    // Atualiza o estado "count", somando 1 ao valor atual.
    // Isso dispara uma nova renderização do componente.
  }
  
  const reduzir = () => {
    // Define uma função chamada "reduzir".
    // Essa função será executada quando o usuário clicar no botão "Reduzir".

    setCount((count) => count - 1)
    // Atualiza o estado "count", subtraindo 1 do valor atual.
    // Também dispara uma nova renderização do componente.
  }
  */

  /*
  const success = () => {
    
    Swal.fire({
      title: "React Alert",
      text: "O React é uma biblioteca JavaScript para construir interfaces de usuário.",
      icon: "success"
    });
  }
  */

  /*
  const error = () => {
    
    Swal.fire({
      title: "React Alert",
      text: "O React utiliza um DOM virtual para melhorar o desempenho das atualizações na interface.",
      icon: "error"
    });
  }
  */

  /*
  const warning = () => {

    Swal.fire({
      title: "React Alert",
      text: "Os componentes em React podem ser funcionais ou baseados em classes.",
      icon: "warning"
    });
  }
  */

  /*
  const carregar = async () => {

    const { value: file } = await Swal.fire({
      title: "Select image",
      input: "file",
      inputAttributes: {
        "accept": "image/*",
        "aria-label": "Upload your profile picture"
      }
    });
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        Swal.fire({
          title: "Your uploaded picture",
          imageUrl: e.target.result,
          imageAlt: "The uploaded picture"
        });
      };
      reader.readAsDataURL(file);
    }
  }
  */

  return (
    <>
      {/* Fragment do React.
          Permite retornar vários elementos sem criar uma div extra no HTML. */}

      <div>
        {/* Container para os logos do Vite e do React */}

        <a href="https://vite.dev" target="_blank">
          {/* Link que aponta para o site oficial do Vite */}
          {/* target="_blank" abre o link em uma nova aba */}

          <img src={viteLogo} className="logo" alt="Vite logo" />
          {/* Renderiza a imagem do logo do Vite */}
          {/* src recebe o caminho da imagem importada */}
          {/* className define a classe CSS */}
          {/* alt define o texto alternativo da imagem */}
        </a>

        <a href="https://react.dev" target="_blank">
          {/* Link que aponta para o site oficial do React */}
          {/* target="_blank" abre o link em uma nova aba */}

          <img src={reactLogo} className="logo react" alt="React logo" />
          {/* Renderiza a imagem do logo do React */}
          {/* src recebe o caminho da imagem importada */}
          {/* className define a classe CSS */}
          {/* alt define o texto alternativo da imagem */}
        </a>
      </div>

      <h1>Vite + React</h1>
      {/* Título principal da aplicação */}

      <div className="card">  
        <button onClick={success}>Sucesso</button>
        {/* Botão que chama a função "success" ('./utils/success.ts') ao ser clicado */}
        <button onClick={error}>Erro</button>
        {/* Botão que chama a função "error" ('./utils/error.ts') ao ser clicado */}
        <button onClick={warning}>Alerta</button>
        {/* Botão que chama a função "warning" ('./utils/warning.ts') ao ser clicado */}
        <button onClick={carregar}>Carregar</button>
        {/* Botão que chama a função "carregar" ('./utils/carregar.ts') ao ser clicado */}
      </div>

      <div className="card">
        {/* Container principal do contador */}

        <h2>Contador usando o hook useState</h2>
        {/* Subtítulo explicando a funcionalidade */}

        <p>Contador: {count}</p>
        {/* Exibe o valor atual do contador */}
        {/* {count} é uma interpolação de JavaScript dentro do JSX */}

        <button onClick={() => adicionar(setCount)}>Adicionar</button>
        {/* Botão que chama a função "adicionar" ('./utils/contador.ts') ao ser clicado */}
        {/* onClick é um evento do React */}

        <button onClick={() => reduzir(setCount)}>Reduzir</button>
        {/* Botão que chama a função "reduzir" ('./utils/contador.ts') ao ser clicado */}
        {/* onClick é um evento do React */}

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        {/* Texto informativo do template do Vite */}
        {/* HMR (Hot Module Replacement) atualiza a tela sem recarregar a página */}
      </div>

      <p className="read-the-docs">
        {/* Parágrafo com classe CSS específica */}

        <h3>Clique nos logos do Vite e React para aprender mais</h3>
        {/* Texto de orientação ao usuário */}
      </p>
    </>
  )
}

export default App
// Exporta o componente App como padrão.
// Isso permite que ele seja importado e usado em outros arquivos, como main.tsx.

/*
Explicação conceitual (muito importante)

function App() {
  return (
    <>
    </>
  )
}

Isso é uma função JavaScript, mas no contexto do React, ela é considerada um componente porque:

1. O nome começa com letra maiúscula (App)

2. Ela retorna JSX

3. O React usa essa função para:
- Executar o código
- Interpretar o JSX
- Converter o JSX em HTML real no navegador

👉 JSX não é HTML, é JavaScript que parece HTML
👉 Antes de ir para o navegador, ele é transformado em chamadas como React.createElement()
*/