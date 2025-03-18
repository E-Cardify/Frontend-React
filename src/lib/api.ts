import { UserPrivateDataResponseType } from "@hooks/useAuth";
import API from "../api/apiClient";
import { CardInfoInterface } from "@interfaces/CardInfoInterface";
import socket from "./socket.io";

interface LoginData {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface RegisterData {
  email: string;
  password: string;
  lastName: string;
  firstName: string;
  privacyPolicy: boolean;
}

export type UpdateUserDataProps = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
};

export const login = async (data: LoginData) => API.post("/auth/login", data);

export const register = async (data: RegisterData) =>
  API.post("/auth/register", data);

export const getUser = async () =>
  API.get<UserPrivateDataResponseType>("/user/me");

export const logout = async () => API.get("/auth/logout");

export const getCard = async (cardId: string) =>
  API.get<CardInfoInterface>(`/card-info/${cardId}`);

export const getMainCard = async () =>
  API.get<CardInfoInterface>("/user/main-card");

export const getCards = async () =>
  API.get<CardInfoInterface[]>("/user/get-cards");

export const deleteCard = async (cardId: string) =>
  API.delete<null>(`/card-info/delete-card/${cardId}`);

export const changeMainCard = async (cardId: string) =>
  API.patch<null>(`/user/change-main-card/${cardId}`);

export const createCard = async (cardInfo: CardInfoInterface) =>
  API.post<null>(`/card-info/create-card`, cardInfo);

export const updateCard = async (cardInfo: CardInfoInterface, _id: string) =>
  API.put<null>(`/card-info/update-card/${_id}`, cardInfo);

export const resendEmail = async () => API.get<null>("/auth/resend-email");

export const updateUserData = async (updateUserData: UpdateUserDataProps) => {
  return API.patch("/user/update-user-data", updateUserData);
};

export const rewriteCardDescription = async (message: string) => {
  socket.emit("rewrite-card-description", {
    message,
  });
};
