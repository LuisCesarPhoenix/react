/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { use, useContext, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const SERVER_DATA = "https://jsonplaceholder.typicode.com";
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;
const TOKEN_STRAPI = import.meta.env.VITE_TOKEN_STRAPI;

const Ctx = React.createContext([
  {
    equipamento: {
      id: 1,
      attributes: {
        connections: {
          data: {
            id: 1,
          },
        },
        reservatorios: {
          data: {
            id: 1,
            attributes: {
              title: "Reservatorio 1",
              tag_n_id: "DP_0001",
              tag_volume: "DP_0002",
              tag_p_id: "DP_0003",
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
          data: {
            id: 1,
          },
        },
        reservatorios: {
          data: {
            id: 1,
            attributes: {
              title: "Reservatorio 2",
              tag_n_id: "DP_0004",
              tag_volume: "DP_0005",
              tag_p_id: "DP_0006",
            },
          },
        },
      },
    },
  },
]);

const token = TOKEN_STRAPI;

function App() {
  const dados = useContext(Ctx);
  // console.log(dados);
  const [data, setData] = useState([]);

  const [xids, setXids] = useState<string[]>([]);
  const [imgUrl, setImgUrl] = useState<string[]>([]);
  // console.log("XIDS:", xids);

  useEffect(() => {
    const xidsArray: string[] = [];

    dados.forEach((item) => {
      if (item) {
        const reservatorio =
          item.equipamento.attributes.reservatorios.data.attributes;

        xidsArray.push(reservatorio.tag_n_id);
        xidsArray.push(reservatorio.tag_volume);
        xidsArray.push(reservatorio.tag_p_id);

        setXids(xidsArray);
      }
    });
  }, [dados]);

  useEffect(() => {
    if (data.length === 0) {
      // Consultando o ECOAPI
      async function fetchData() {
        // axios.post(url, data, config)
        // url = endpoint da API
        // data = corpo da requisição (payload)
        // config = configurações adicionais, como headers

        const axiosResponse = await axios
          .post(
            ${SERVER_DATA}/v2/api/datapoint/${dados[0].equipamento.attributes.connections.data.id},
            {
              xid: xids,
              tagId: xids,
            },
            {
              headers: {
                Authorization: Bearer ${token},
              },
            },
          )
          .catch((e) => console.error(e));

        // console.log("AXIOSRESPONSE:", axiosResponse);
        if (axiosResponse) {
          setData(axiosResponse.data);
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
    }

    const config = {
      headers: {
        Authorization: Bearer ${token},
      },
      method: "POST",
      url: ${SERVER_DATA}/v2/api/datapoint/${dados[0].equipamento.attributes.connections.data.id},
      data: {
        xid: xids,
        tagId: xids,
      },
    };

    async function fetchDataAxios() {
      const response = await axios.request({ ...config });
      setData(response.data);
    }
    fetchDataAxios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function fetchImage() {
      const response = await axios.get(${SERVER_DATA}/photos);
      setImgUrl(Array.isArray(response.data) ? response.data : [response.data]);
    }
    fetchImage();
  }, []);
  console.log(SERVER_DATA);

  return (
    <>
      <ul>
        {imgUrl.length !== 0 &&
          imgUrl.map((url: string, index: number) => (
            <li key={index}>
              <img src={url} alt={Image ${index}} />
            </li>
          ))}
      </ul>
    </>
  );
}

export default App;