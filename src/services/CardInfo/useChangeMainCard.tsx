import { useQueryClient } from "@tanstack/react-query";

export const useChangeMainCard = () => {
  const queryClient = useQueryClient();

  const changeMainCard = async (newId: string) => {
    const response = await fetch(
      `http://localhost:5000/api/v1/card-info/change-main-card/${newId}`
    );

    if (response.ok) {
      queryClient.invalidateQueries({ queryKey: ["card-info", "main"] });
    }
  };

  return changeMainCard;
};
