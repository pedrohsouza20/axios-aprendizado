import axios from "./node_modules/axios/dist/esm/axios.js";

/*const AXIOS_INSTANCE = axios.create({
  baseUrl: "https://rickandmortyapi.com/api",
  timeout: 1000,
  headers: {
    Access-Control-Allow-Origin: https://normal-website.com
  }
});*/

axios
  .get("https://my-json-server.typicode.com/pedrohsouza20/axios-aprendizado/", {
    headers: {
      "Access-Control-Allow-Origin": "https://my-json-server.typicode.com",
    },
  })
  .then((data) => console.log(data.data))
  .catch((err) => console.log(err));

console.log(axios);
