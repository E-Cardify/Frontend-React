import { useModal } from "@contexts/useModelContext";
import { useQueryClient } from "@tanstack/react-query";

export const useChangeMainCard = () => {
  const { showModal } = useModal();

  const queryClient = useQueryClient();

  const changeMainCard = async (newId: string) => {
    const response = await fetch(
      `http://localhost:5000/api/v1/card-info/change-main-card/${newId}`
    );

    if (response.ok) {
      queryClient.invalidateQueries({ queryKey: ["card-info", "main"] });
      showModal("Success!", "Main card has been changed successfully", 3000);
    }
  };

  return changeMainCard;
};
