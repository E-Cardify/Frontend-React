import { CardInfoInterface } from "@interfaces/CardInfoInterface";
import { useQueryClient } from "@tanstack/react-query";

export const useCreateCard = () => {
  const queryClient = useQueryClient();

  const createCard = async (cardInfo: CardInfoInterface) => {
    const response = await fetch("http://localhost:5000/api/v1/card-info/", {
      method: "POST",
      body: JSON.stringify(cardInfo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      queryClient.invalidateQueries({ queryKey: ["card-info"] });
    }
  };

  return createCard;
};
