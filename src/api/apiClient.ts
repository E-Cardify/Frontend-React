import axios from "axios";
import queryClient from "../config/queryClient";
import { navigate } from "../lib/navigation";

const API = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const TokenRefreshClient = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { status, data } = error.response;
    console.log(error);

    if (status === 401) {
      try {
        await TokenRefreshClient.post("/auth/refresh-tokens");
        return TokenRefreshClient(error.config);
      } catch {
        queryClient.clear();
        navigate("/login", {
          replace: true,
          state: {
            redirect: window.location.pathname,
          },
        });
      }
    }
    return Promise.reject({ status, ...data });
  }
);

export default API;
