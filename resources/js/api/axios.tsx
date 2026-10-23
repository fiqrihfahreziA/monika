import axios from "axios";

const api = axios.create({
  baseURL: "/",
  headers: { Accept: "application/json" },
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = document
    .querySelector('meta[name="csrf-token"]')
    ?.getAttribute("content");
  if (token) config.headers.set("X-CSRF-TOKEN", token);
  return config;
});

export default api;