import axios from "axios";

const api = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/distritos",
});

export default api;