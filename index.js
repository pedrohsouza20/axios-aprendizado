import axios from "./node_modules/axios/dist/esm/axios.js";

const AXIOS_INSTANCE = axios.create({
  baseUrl: "https://rickandmortyapi.com/api",
  timeout: 1000
});

axios
  .get("https://rickandmortyapi.com/api")
  .then((data) => console.log(data.data))
  .catch((err) => console.log(err));

console.log(axios);
