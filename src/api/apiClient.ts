import axios from "axios";
import queryClient from "../config/queryClient";
import { navigate } from "../lib/navigation";

export const defaultErrorMessage = "An error occurred";

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

export type ErrorResponse = {
  status: number;
  message: string;
  data: unknown;
};

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { status, data } = error.response;
    const message: string = (data?.message as string) || "Server error.";

    console.log(status, data);

    if (status === 401) {
      try {
        await TokenRefreshClient.get("/auth/refresh");
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

    return Promise.reject({ status, message, ...data });
  }
);

export default API;
