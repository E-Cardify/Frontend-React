import { useModal } from "@contexts/useModelContext";
import { useQueryClient } from "@tanstack/react-query";

export const useDeleteCard = () => {
  const queryClient = useQueryClient();
  const { showModal } = useModal();

  const deleteCard = async (id?: string) => {
    if (!id) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/card-info/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        queryClient.invalidateQueries({ queryKey: ["card-info"] });
        showModal(
          "Success!",
          "Main card has not been changed successfully. Try again",
          3000,
          true
        );
      } else {
        showModal(
          "Error!",
          "Failed to delete main card. Please try again",
          5000,
          false
        );
      }
    } catch {
      showModal(
        "Error!",
        "Failed to delete main card. Please try again",
        5000,
        false
      );
    }
  };

  return deleteCard;
};
