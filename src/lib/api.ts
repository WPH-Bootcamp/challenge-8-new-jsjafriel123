import axios from "axios";

// Create API Client
export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  // timeout: 10_000,
  // headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_READ_ACCESS_TOKEN;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
