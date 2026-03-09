/* eslint-disable @typescript-eslint/no-explicit-any */
// Desabilita a regra que proíbe "any" no TypeScript

import React, { useContext, useEffect, useState } from "react";
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

// ================================
// Contexto mockado de equipamentos
// ================================

// Criar um provider dentro do contexto(const ctx = vai_receber_algo) para inserir os dados a ser usados no useContext(ctx)
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

  const dados = useContext(Ctx);
  // Obtém dados do contexto

  const [data, setData] = useState([]);
  // const [data, setData] = useState<any[]>([]);
  // Armazena resposta da API

  const [xids, setXids] = useState<string[]>([]);
  // Lista de tags (xids) que serão enviadas ao backend

  const [imgUrl, setImgUrl] = useState<string[]>([]);
  // Lista de URLs de imagens
  // console.log("XIDS:", xids);

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

        xidsArray.push(reservatorio.tag_n_id);
        // Adiciona tag de nível

        xidsArray.push(reservatorio.tag_volume);
        // Adiciona tag de volume

        xidsArray.push(reservatorio.tag_p_id);
        // Adiciona tag de porcentagem

        setXids(xidsArray);
        // Atualiza o estado somente 1x (evita múltiplos renders)
      }
    });
  }, [dados]);

  // ===================================================
  // Busca dados na sua API (POST datapoint)
  // ===================================================

  useEffect(() => {
  // useEffect((função) => { }, [array de dependências])
  // Hook executado após a renderização do componente (efeitos colaterais)

    if (data.length === 0) {
    // Verifica se ainda não existem dados para evitar chamadas repetidas da API

      // Consultando o ECOAPI
      async function fetchData() {
      // Função assíncrona criada para buscar dados externos

        // axios.post(url, data, config);
        // url = endpoint da API
        // data = corpo da requisição (payload)
        // config = configurações adicionais, como headers

        const axiosResponse = await axios
        // const axiosResponse = await axios.post().catch(e => console.error(e));
        // Aguarda a resposta da requisição HTTP feita com axios

          .post(
          // Executa requisição POST

            ${SERVER_DATA}/v2/api/datapoint/${dados[0].equipamento.attributes.connections.data.id},
            // Endpoint montado dinamicamente com base na URL do servidor e no id da conexão

            {
            // Objeto enviado como body (payload)

              xid: xids,
              // Array contendo os identificadores das tags consultadas

              tagId: xids,
              // Mesmo array, porém enviado em outro campo exigido pela API

            },
            {
            // Configurações extras da requisição

              headers: {
              // Cabeçalhos HTTP

                Authorization: Bearer ${token},
                // Envia token de autenticação no padrão Bearer
              },
            },
          )
          .catch((e) => console.error(e));
          // Captura erros da requisição e exibe no console

        // console.log("AXIOSRESPONSE:", axiosResponse);
        if (axiosResponse) {
        // Se axiosResponse existir
        // Garante que a resposta existe antes de atualizar o estado

          setData(axiosResponse.data);
          // Salva apenas os dados retornados da API no estado React

        }
        // const response = await fetch({
        //   url: ${SERVER_DATA}/posts,
        //   method: "POST",
        //   headers: {
        //     Authorization: "Bearer token",
        //   },
        //   body: JSON.stringify({ title: "foo", body: "bar", userId: 1 }),
        // });
        // const json = await response.json();
        // setData(json);
      }

      fetchData();
      // Chama a função para executar a requisição imediatamente

    }

    const config = {
    // Objeto que centraliza toda a configuração da requisição axios

      headers: {
      // Cabeçalhos HTTP enviados junto com a requisição

        Authorization: `Bearer ${token}`,
        // Envia o token JWT no padrão Bearer para autenticação na API
      },

      method: "POST",
      // Define o método HTTP como POST (envia dados no body)

      url: `${SERVER_DATA}/v2/api/datapoint/${dados[0].equipamento.attributes.connections.data.id}`,
      // Monta a URL dinamicamente usando:
      // base da API + endpoint + id da conexão vindo do Context (Ctx)

      data: {
      // Corpo da requisição (payload)

        xid: xids,
        // Array de tags (xids) que será consultado na API

        tagId: xids,
        // Mesmo array enviado em outro campo exigido pelo backend
      },
    };

    async function fetchDataAxios() {
    // Função assíncrona responsável por executar a chamada HTTP

      const response = await axios.request({ ...config });
      // Executa a requisição usando o objeto config (spread evita mutação)

      setData(response.data);
      // Atualiza o estado React salvando apenas os dados retornados da API

    }

    fetchDataAxios();
    // Chama a função imediatamente quando o useEffect roda (ao montar o componente)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    // Desativa o aviso do ESLint sobre dependências faltando no useEffect

  }, []);
  // Array de dependências vazio => esse useEffect executa apenas uma vez (componentDidMount)

  useEffect(() => {
  // useEffect((função) => { }, [array de dependências])
  // Novo efeito colateral executado quando o componente é montado

    async function fetchImage() {
    // Função assíncrona para buscar imagens da API

      const response = await axios.get(`${SERVER_DATA}/photos`);
      // Requisição GET no endpoint /photos do JSONPlaceholder

      setImgUrl(Array.isArray(response.data) ? response.data : [response.data]);
      // Garante que imgUrl seja sempre array para evitar erro no .map()
      // Se não for array, encapsula o resultado em um

    }

    fetchImage();
    // Executa a função logo após a definição

  }, []);
  // Array de dependências vazio => esse useEffect executa apenas uma vez na montagem (componentDidMount)
  
  console.log(SERVER_DATA);
  // Log de depuração exibindo a URL base da API no console

  return (
  // Início do JSX renderizado pelo componente

    <>
    {/* Fragmento React para evitar criar uma div desnecessária no DOM */}

      <ul>
      {/* Lista que conterá as imagens */}

        {imgUrl.length !== 0 &&
        // Só renderiza se existir pelo menos uma imagem

          imgUrl.map((url: string, index: number) => (
          // Percorre o array e cria um item para cada URL

            <li key={index}>
            {/* Elemento da lista; index usado como chave de identificação */}

              <img src={url} alt={`Image ${index}`} />
              {/* Renderiza a imagem usando a URL retornada */}
              {/* alt melhora acessibilidade */}

            </li>

          ))}

      </ul>

    </>

  );

}

export default App;
// Exporta o componente App para ser usado em outros arquivos
