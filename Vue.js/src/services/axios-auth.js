import axios from "axios";

const instance = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1",
  headers: { "Content-Type": "application/json" }
});

instance.interceptors.request.use((config) => {
  config.url = `${config.url}?key=AIzaSyDnQhgNny7mfLq-i49_RK2JHFvDGmDjz8I`;
  return config;
});

export default instance;
