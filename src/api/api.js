import axios from "axios";

const api = axios.create({
  baseURL: 'https://algo-moive-backed.herokuapp.com/'
  // baseURL: "http://localhost:9999",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.token = JSON.parse(token).data;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default api;
