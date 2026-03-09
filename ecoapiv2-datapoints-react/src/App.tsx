/* eslint-disable @typescript-eslint/no-explicit-any */
// Desabilita a regra que proíbe "any" no TypeScript

import React, { useContext, useEffect, useState } from "react";
// Importa React e hooks necessários (REMOVIDO "use", pois não existe)

import "./App.css";
// Importa o CSS do componente

import axios from "axios";
// Biblioteca para requisições HTTP

// ================================================
// Variáveis de ambiente (Vite)
// ================================================

// O vite trabalha com import.meta.env para acessar variáveis de ambiente definidas no arquivo .env

const SERVER_DATA = import.meta.env.VITE_SERVER_DATA;
// URL base da sua API Node/Express

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;
// URL do Strapi (não está sendo usado ainda)

const TOKEN_STRAPI = import.meta.env.VITE_TOKEN_STRAPI;
// Token Bearer usado nas requisições protegidas

// ================================================
// Contexto mockado de equipamentos
// ================================================

// Nos componentes do Iframe já tem as consultas que trazem os dados do equipamento
// Criar um provider que vai buscar os dados do equipamento no Strapi e salva dentro do contexto para serem usados no useContext(Ctx)
// Criar um contexto dento do provider para inserir os dados do equipamento no useContext(ctx)
// Esse é um exemplo de como se eu estivesse consultando os dados do Strapi
const Ctx = React.createContext([
// const Ctx = React.createContext([{equipamento}, {equipamento}]);
  {
    equipamento: {
      id: 1,
      attributes: {
        connections: {
          data: { id: 1 },
        },
        reservatorios: {
          data: {
            id: 1,
            attributes: {
              title: "Reservatorio 1",
              tag_n_id: "DP_0001",
              // tag de nível
              tag_volume: "DP_0002",
              // tag de volume
              tag_p_id: "DP_0003",
              // tag de porcentagem
            },
          },
        },
      },
    },
  },
  {
    equipamento: {
      id: 2,
      attributes: {
        connections: {
          data: { id: 1 },
        },
        reservatorios: {
          data: {
            id: 1,
            attributes: {
              title: "Reservatorio 2",              
              tag_n_id: "DP_0004",
              // tag de nível
              tag_volume: "DP_0005",
              // tag de volume
              tag_p_id: "DP_0006",
              // tag de porcentagem
            },
          },
        },
      },
    },
  },
]);
// Cria um contexto global contendo os equipamentos para que todos os componentes possam acessar (isso é mock local/dados mocados)

const token = TOKEN_STRAPI;
// Armazena o token em uma variável local

// ===================================================
// Componente principal
// ===================================================

function App() {
// A aplicação, que é o componente principal, é uma função que pode ser exportada

  const [data, setData] = useState([]);
  // const [data, setData] = useState<any[]>([]);
  // Armazena a resposta da API

  const dados = useContext(Ctx);
  // Obtém dados do contexto
  console.log("Equipamentos: ",dados);

  const [xids, setXids] = useState<string[]>([]);
  // Lista de tags (xids) que serão enviadas ao backend
  console.log("Xids: ", xids);

  // ===================================================
  // Busca dados na sua API (datapoint POST)
  // ===================================================

  // ===================================================
  // // *OPÇÃO 1 - DESABILITADA*
  // ===================================================
  // useEffect(() => {
  // // useEffect((função) => { }, [array de dependências]);
  // // Hook executado após a renderização do componente (efeitos colaterais)

  //   if (data.length === 0) {
  // // Verifica se ainda não existem dados para evitar chamadas repetidas da API
  
  //     fetch(`${SERVER_DATA}/posts`)
  //     .then((response) => response.json())
  //     .then((json) => setData(json));            
  //   }  
  // }, []);
  // // Array de dependências vazio => esse useEffect executa apenas uma vez na montagem (componentDidMount)

  // ===================================================
  // // *OPÇÃO 2 - DESABILITADA*
  // ===================================================
  // useEffect(() => {
  // // useEffect((função) => { }, [array de dependências]);
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
  // // useEffect((função) => { }, [array de dependências]);
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
  // *OPÇÃO 4 - DESABILITADA*
  // ===================================================
  // useEffect(() => {
  // // useEffect((função) => { }, [array de dependências]);
  // // Hook executado após a renderização do componente (efeitos colaterais)

  //   if (data.length === 0) {
  //   // Verifica se ainda não existem dados para evitar chamadas repetidas da API

  //     console.log(SERVER_DATA);

  //     async function fetchData() {
  //       const axiosResponse = await axios.get(`${SERVER_DATA}/comments`);
        
  //       console.log("Título: AXIOS RESPONSE",axiosResponse);
  //       setData(axiosResponse.data);       
  //     }
  //     fetchData();        
  //   }  
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // // Array de dependências vazio => esse useEffect executa apenas uma vez na montagem (componentDidMount)
  
  // ===================================================
  // *OPÇÃO 5 - PARA POSTAR DADOS - DESABILITADA*
  // ===================================================
  // useEffect(() => {
  // // useEffect((função) => { }, [array de dependências]);
  // // Hook executado após a renderização do componente (efeitos colaterais)

  //   if (data.length === 0) {
  //   // Verifica se ainda não existem dados para evitar chamadas repetidas da API

  //     console.log(SERVER_DATA);

  //     async function fetchData() {
  //       const axiosResponse = await axios.post(`${SERVER_DATA}/post`,
  //         {
  //           data: {}
  //         },
  //         { 
  //           headers: {Authorization: 'Bearer token'},
  //         }
  //       );
        
  //       console.log("Título: AXIOS RESPONSE",axiosResponse);
  //       setData(axiosResponse.data);       
  //     }
  //     fetchData();        
  //   }  
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // // Array de dependências vazio => esse useEffect executa apenas uma vez na montagem (componentDidMount)

  // ===================================================
  // *OPÇÃO 6 - PARA ATUALIZAR DADOS - DESABILITADA*
  // ===================================================
  // useEffect(() => {
  // // useEffect((função) => { }, [array de dependências]);
  // // Hook executado após a renderização do componente (efeitos colaterais)

  //   if (data.length === 0) {
  //   // Verifica se ainda não existem dados para evitar chamadas repetidas da API

  //     console.log(SERVER_DATA);

  //     async function fetchData() {
  //       const axiosResponse = await axios.put(`${SERVER_DATA}/post/1`,
  //         {
  //           data: {}
  //         },
  //         { 
  //           headers: {Authorization: 'Bearer token'},
  //         }
  //       );
        
  //       console.log("Título: AXIOS RESPONSE",axiosResponse);
  //       setData(axiosResponse.data);       
  //     }
  //     fetchData();        
  //   }  
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // // Array de dependências vazio => esse useEffect executa apenas uma vez na montagem (componentDidMount)

  // ===================================================
  // *OPÇÃO 7 - PARA DELETAR DADOS - DESABILITADA*
  // ===================================================
  // useEffect(() => {
  // // useEffect((função) => { }, [array de dependências]);
  // // Hook executado após a renderização do componente (efeitos colaterais)

  //   if (data.length === 0) {
  //   // Verifica se ainda não existem dados para evitar chamadas repetidas da API

  //     console.log(SERVER_DATA);

  //     async function fetchData() {
  //       const axiosResponse = await axios.delete(`${SERVER_DATA}/post/1`,
  //         { 
  //           headers: {Authorization: 'Bearer token'},
  //         }
  //       );
        
  //       console.log("Título: AXIOS RESPONSE",axiosResponse);
  //       setData(axiosResponse.data);       
  //     }
  //     fetchData();        
  //   }  
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // // Array de dependências vazio => esse useEffect executa apenas uma vez na montagem (componentDidMount)

  // ========================================================
  // *OPÇÃO 8 - CONSULTAR DADOS NO ECOAPIV2 - DESABILITADA*
  // ========================================================
 
  // ===================================================
  // Extrai os XIDs (lista de tags) dos reservatórios  
  // ===================================================
  useEffect(() => {
  // useEffect((função) => { }, [array de dependências]);
  // Hook executado após a renderização do componente (efeitos colaterais)
    const xidsArray: string[] = [];
    // Cria array temporário

    dados.forEach((item) => {
    // Percorre cada equipamento
      if (item) {
      // Se o ítem existir ele continua, se não, ele para
        const reservatorio =
          item.equipamento.attributes.reservatorios.data.attributes;
          // Acessa atributos do reservatório
        console.log("Reservatório: ", reservatorio);

        xidsArray.push(reservatorio.tag_n_id);
        // Adiciona tag de nível

        xidsArray.push(reservatorio.tag_volume);
        // Adiciona tag de volume

        xidsArray.push(reservatorio.tag_p_id);
        // Adiciona tag de porcentagem

        setXids(xidsArray);
        // Atualiza o estado somente 1x (evita múltiplos renders)
        console.log("Array de Xids: ", xidsArray);
      }
    });
  }, [dados]);
  // Array de dependências vazio => esse useEffect executa apenas uma vez na montagem (componentDidMount)

  useEffect(() => {
  // useEffect((função) => { }, [array de dependências]);
  // Hook executado após a renderização do componente (efeitos colaterais)

    if (data.length === 0) {
    // Verifica se ainda não existem dados para evitar chamadas repetidas da API

      // console.log(SERVER_DATA);

      async function fetchData() {
        const axiosResponse = await axios.post(
          `${SERVER_DATA}v2/api/datapoint/${dados[0].equipamento.attributes.connections.data.id}`,
          // Endpoint montado dinamicamente com base na URL do servidor e no id da conexão
          
          // {
          //   xid: ["DP_0001", "DP_0002", "DP_0003"],
          // },

          {
            // Objeto enviado como body (payload)

              xid: xids,
              // Array contendo os identificadores das tags consultadas

              tagId: xids,
              // Mesmo array, porém enviado em outro campo exigido pela API

          },
          // { 
          //   headers: {Authorization: `Bearer ${token}`},
          // }
        );
        
        // console.log("Título: Equipamentos",axiosResponse);
        setData(axiosResponse.data);       
      }
      fetchData();        
    }  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Array de dependências vazio => esse useEffect executa apenas uma vez na montagem (componentDidMount)

  // console.log(SERVER_DATA);

  return (
  // Início do JSX renderizado pelo componente

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
  // Fim do JSX renderizado pelo componente

  // return (
  // // Início do JSX renderizado pelo componente

  //   <>
  //   {/* Fragmento React para evitar criar uma div desnecessária no DOM */}

  //     <ul>
  //     {/* Lista que conterá as imagens */}

  //       {imgUrl.length !== 0 &&
  //       // Só renderiza se existir pelo menos uma imagem

  //         imgUrl.map((url: string, index: number) => (
  //         // Percorre o array e cria um item para cada URL

  //           <li key={index}>
  //           {/* Elemento da lista; index usado como chave de identificação */}

  //             <img src={url} alt={`Image ${index}`} />
  //             {/* Renderiza a imagem usando a URL retornada */}
  //             {/* alt melhora acessibilidade */}

  //           </li>

  //         ))}

  //     </ul>

  //   </>

  // );

}

export default App;
// Exporta o componente App para ser usado em outros arquivos