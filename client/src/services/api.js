import axios from "axios";

const api = axios.create({
  baseURL: "https://assignment-burger-builder-application.onrender.com/",
});

export default api;
