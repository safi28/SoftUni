import axios from "axios";
const instance = axios.create({
  baseURL: "https://vue-project-93965.firebaseio.com/",
  headers: { "Content-Type": "application/json" }
});

instance.interceptors.request.use(config => {
  config.url = `${config.url}?auth=${localStorage.getItem("token")}`;
  return config;
});

export default instance;