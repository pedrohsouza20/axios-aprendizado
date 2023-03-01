//const { default: axios } = require("axios");

import axios from "./node_modules/axios/dist/esm/axios.js";

axios
  .get("https://rickandmortyapi.com/api")
  .then((data) => console.log(data.data))
  .catch((err) => console.log(err));

console.log(axios);
