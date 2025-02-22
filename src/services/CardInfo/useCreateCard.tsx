import { useModal } from "@contexts/useModelContext";
import { CardInfoInterface } from "@interfaces/CardInfoInterface";
import { useQueryClient } from "@tanstack/react-query";

export const useCreateCard = () => {
  const queryClient = useQueryClient();
  const { showModal } = useModal();

  const createCard = async (cardInfo: CardInfoInterface) => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/card-info/", {
        method: "POST",
        body: JSON.stringify(cardInfo),

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        queryClient.invalidateQueries({ queryKey: ["card-info"] });
        showModal("Success!", "Card has been saved successfully", 3000);

        return true;
      } else {
        showModal(
          "No success!",
          "Card hasn't been saved successfully. Try again",
          3000,
          false
        );
      }
    } catch {
      showModal(
        "No success!",
        "Card hasn't been saved successfully. Try again",
        3000,
        false
      );
    }
  };

  return createCard;
};
