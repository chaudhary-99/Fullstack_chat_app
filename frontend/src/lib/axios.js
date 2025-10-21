import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5000/api"
      : "http://fullstack-chat-qmx5lm0dp-karishma-chaudharys-projects.vercel.app",
  withCredentials: true,
});
