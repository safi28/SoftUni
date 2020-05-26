import axios from "axios";
const instance = axios.create({
  baseURL: "https://vue-project-93965.firebaseio.com/",
  headers: { "Content-Type": "application/json" }
});

instance.interceptors.request.use(c => {
  c.url = `${c.url}?auth=${localStorage.getItem("userId")}`;
  return c;
});

export default instance;