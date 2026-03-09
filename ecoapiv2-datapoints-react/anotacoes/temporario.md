/* eslint-disable @typescript-eslint/no-explicit-any */
// Desabilita a regra que proíbe "any" no TypeScript

import React, { use, useContext, useEffect, useState } from "react";
// Importa React e hooks necessários (REMOVIDO "use", pois não existe)

import "./App.css";
// Importa o CSS do componente

import axios from "axios";
// Biblioteca para requisições HTTP

// ================================
// Variáveis de ambiente (Vite)
// ================================

// O vite trabalha com import.meta.env para acessar variáveis de ambiente definidas no arquivo .env

const SERVER_DATA = import.meta.env.VITE_SERVER_DATA;
// URL base da sua API Node/Express

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;
// URL do Strapi (não está sendo usado ainda)

const TOKEN_STRAPI = import.meta.env.VITE_TOKEN_STRAPI;
// Token Bearer usado nas requisições protegidas

// ===================================================
// Componente principal
// ===================================================

function App() {
// A aplicação, que é o componente principal, é uma função que pode ser exportada

  const [data, setData] = useState([]);
  // const [data, setData] = useState<any[]>([]);
  // Armazena resposta da API

  // ===================================================
  // Busca dados na sua API (POST datapoint)
  // ===================================================

  // ===================================================
  // // *OPÇÃO 1 - DESABILITADA*
  // ===================================================
  // useEffect(() => {

  //   if (data.length === 0) {

  //     fetch(`${SERVER_DATA}/posts`)
  //     .then((response) => response.json())
  //     .then((json) => setData(json));            
  //   }  
  // }, []);

  // ===================================================
  // // *OPÇÃO 2 - HABILITADA*
  // ===================================================
  // useEffect(() => {
  // // useEffect((função) => { }, [array de dependências])
  // // Hook executado após a renderização do componente (efeitos colaterais)

  //   if (data.length === 0) {
  //   // Verifica se ainda não existem dados para evitar chamadas repetidas da API
  //     async function fetchData() {
  //      const response = await fetch(`${SERVER_DATA}/posts`);
  //      const json = await response.json();
  //      setData(json); 
  //     }
  //     fetchData();             
  //   }

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // // Array de dependências vazio => esse useEffect executa apenas uma vez na montagem (componentDidMount)

  // ===================================================
  // *OPÇÃO 3 - PARA POSTAR DADOS - DESABILITADA*
  // ===================================================
  // useEffect(() => {
  // // useEffect((função) => { }, [array de dependências])
  // // Hook executado após a renderização do componente (efeitos colaterais)

  //   if (data.length === 0) {
  //   // Verifica se ainda não existem dados para evitar chamadas repetidas da API
  //     async function fetchData() {
       
  //       const response = await fetch({
  //         url: `${SERVER_DATA}/posts`,
  //         method: "POST",
  //         headers: {
  //           Authorization: 'Bearer token',          
  //         },
  //         body: JSON.stringify({title: 'foo' , body: 'bar', userId: 1})
  //       });
  //      const json = await response.json();
  //      setData(json); 
  //     }
  //     fetchData();             
  //   }

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // // Array de dependências vazio => esse useEffect executa apenas uma vez na montagem (componentDidMount)

  // ===================================================
  // *OPÇÃO 4 - HABILITADA*
  // ===================================================
  useEffect(() => {

    if (data.length === 0) {
      console.log(SERVER_DATA);

      async function fetchData() {
        const axiosResponse = await axios.get(`${SERVER_DATA}/posts`);
        
        console.log("Título: AXIOS RESPONSE",axiosResponse);
        setData(axiosResponse.data);
        
      }
      fetchData();        
    }  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(SERVER_DATA);

  // Fragmento React: evita criar div extra
  return (
    <>
    {/* Fragmento React: evita criar uma div extra no DOM */}
      
      <ul>
      {/* Lista não ordenada que vai renderizar os itens */}

        {/* Percorre o array "data" e renderiza um <li> para cada item */}
        {data.map((item: any) => (
        
          <li key={item.id}>
          {/* Cada item da lista precisa de uma "key" única para o React controlar a renderização */}

            <strong>{item.title}</strong>
            {/* Exibe o título do item em negrito */}

            <p>{item.body}</p>
            {/* Exibe o conteúdo/descrição do item em um parágrafo */}
          
          </li>
          /* Fecha o elemento da lista */
        ))}

      </ul>
      {/* Fecha a lista */}
    
    </>
    /* Fecha o Fragmento React */  
  );

}

export default App;