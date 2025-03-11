import { useQuery } from "@tanstack/react-query";
import { getCards } from "../lib/api";

export const CARDS = "cards";

const useCards = (opts = {}) => {
  const { data: cards, ...rest } = useQuery({
    queryKey: [CARDS],
    queryFn: () => getCards(),
    staleTime: Infinity,
    ...opts,
  });

  return {
    cards: cards,
    ...rest,
  };
};

export default useCards;
