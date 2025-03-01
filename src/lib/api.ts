import API from "../api/apiClient";
import { CardInfoInterface } from "@interfaces/CardInfoInterface";

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  email: string;
  password: string;
  lastName: string;
  firstName: string;
}

export const login = async (data: LoginData) => API.post("/auth/login", data);

export const register = async (data: RegisterData) =>
  API.post("/auth/register", data);

export const getUser = async () => API.post("/user/get-user-private-data");

export const logout = async () => API.post("/auth/logout");

export const getCard = async (cardId: string) =>
  API.get<CardInfoInterface>(`/card-info/${cardId}`);

export const getMainCard = async () =>
  API.get<CardInfoInterface>("/user/main-card");

export const getCards = async () =>
  API.post<CardInfoInterface[]>("/user/get-cards", {
    populate: "true",
  });

export const deleteCard = async (cardId: string) =>
  API.delete<null>(`/card-info/delete-card/${cardId}`);

export const changeMainCard = async (cardId: string) =>
  API.put<null>(`/user/change-main-card/${cardId}`);

export const createCard = async (cardInfo: CardInfoInterface) =>
  API.post<null>(`/card-info/create-card`, cardInfo);

export const updateCard = async (cardInfo: CardInfoInterface, _id: string) =>
  API.put<null>(`/card-info/update-card/${_id}`, cardInfo);

export const resendEmail = async () => API.post<null>("/auth/resend-email");
