import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";

const apiClient = axios.create({
  baseURL: process.env.URL_API,
  headers: {
    "Content-type": "application/json",
  },
});

const internalApi = axios.create({
  baseURL: process.env.NEXTAUTH_URL,
  headers: {
    "Content-type": "application/json",
  },
});

apiClient.interceptors.request.use(async (config) => {
  const session = await getServerSession(authOptions);

  let token = session?.access_token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { apiClient, internalApi };
