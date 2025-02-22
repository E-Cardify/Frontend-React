import { useModal } from "@contexts/useModelContext";
import { useQueryClient } from "@tanstack/react-query";

export const useChangeMainCard = () => {
  const { showModal } = useModal();

  const queryClient = useQueryClient();

  const changeMainCard = async (newId: string) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/card-info/change-main-card/${newId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {
        queryClient.invalidateQueries({ queryKey: ["card-info", "main"] });
        showModal("Success!", "Main card has been changed successfully", 3000);
      } else {
        showModal(
          "No success!",
          "Main card has not been changed successfully. Try again",
          5000,
          false
        );
      }
    } catch {
      showModal(
        "No success!",
        "Main card has not been changed successfully. Try again",
        5000,
        false
      );
    }
  };

  return changeMainCard;
};
