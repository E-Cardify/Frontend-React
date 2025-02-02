import { useQueryClient } from "@tanstack/react-query";

export const useDeleteCard = () => {
  const queryClient = useQueryClient();

  const deleteCard = async (id?: string) => {
    if (!id) return;

    const response = await fetch(
      `http://localhost:5000/api/v1/card-info/${id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      queryClient.invalidateQueries({ queryKey: ["card-info"] });
    }
  };

  return deleteCard;
};
