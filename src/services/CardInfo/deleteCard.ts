import { useModal } from "@contexts/useModelContext";
import { useQueryClient } from "@tanstack/react-query";

export const useDeleteCard = () => {
  const queryClient = useQueryClient();
  const { showModal } = useModal();

  const deleteCard = async (id: string | undefined) => {
    if (!id) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/card-info/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {
        queryClient.invalidateQueries({ queryKey: ["card-info"] });
        showModal(
          "Success!",
          "Main card has been deleted successfully.",
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
    } catch (error) {
      console.error("Failed to delete card:", error);
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
