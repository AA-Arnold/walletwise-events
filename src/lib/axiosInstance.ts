import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  (err) => {
    throw new Error(err);
  },
);
