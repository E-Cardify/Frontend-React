import axios, { AxiosError } from "axios";
import queryClient from "../config/queryClient";
import { navigate } from "../lib/navigation";
import { notifications } from "@mantine/notifications";

export const defaultErrorMessage = "An error occurred";

const API = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

const TokenRefreshClient = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

export type APIErrorResponse = {
  status: number;
  message: string;
  data: unknown;
};

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const axiosError = error as AxiosError;
    const { response } = axiosError;

    if (response) {
      const { status, data } = error.response;
      const message: string = (data?.message as string) || "Server error.";

      console.log(message, status, data);

      if (status === 401 && data.errorCode === "InvalidAccessToken") {
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
          notifications.show({
            message: "Your session run out, please log in again",
            color: "orange",
          });
        }
      }

      return Promise.reject({ message, status, data });
    }

    return Promise.reject({
      status: 500,
      ...axiosError,
      message: "Internet connection error, please try again later.",
    });
  }
);

export default API;
