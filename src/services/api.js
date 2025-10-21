import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8009",
});

export default api;
