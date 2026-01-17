import axios from "axios";

// Create API Client
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  // timeout: 10_000,
  headers: { accept: "application/json", "Content-Type": "application/json" },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = import.meta.env.VITE_READ_ACCESS_TOKEN;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);
