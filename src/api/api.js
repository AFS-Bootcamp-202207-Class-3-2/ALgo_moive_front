import axios from "axios";

const api = axios.create({
    baseURL: 'https://algo-moive-backed.herokuapp.com/'
});

export default api;
