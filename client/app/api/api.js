import axios from "axios";

const BASE_API_URL = "https://rickandmortyapi.com/api/character";

const api = axios.create({
    baseURL: BASE_API_URL
});

export default api;