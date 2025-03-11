import { useQuery } from "@tanstack/react-query";
import { getUser } from "../lib/api";
import { AxiosResponse } from "axios";

export const AUTH = "auth";

export type UserPrivateDataResponseType = {
  _id: string;
  mainCard: string;
  cards: string[];
  firstName: string;
  lastName: string;
  email: string;
  isVerified: boolean;
  maxCards: number;
};

const useAuth = (opts = {}) => {
  const { data: user, ...rest } = useQuery({
    queryKey: [AUTH],
    queryFn: getUser,
    staleTime: Infinity,
    ...opts,
  });

  return {
    user: user as AxiosResponse<UserPrivateDataResponseType>,
    ...rest,
  };
};

export default useAuth;
