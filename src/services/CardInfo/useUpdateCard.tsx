import { CardInfoInterface } from "@interfaces/CardInfoInterface";

export const updateCard = async (cardInfo: CardInfoInterface, id: string) => {
  const response = await fetch(`http://localhost:5000/api/v1/card-info/${id}`, {
    method: "PUT",
    body: JSON.stringify(cardInfo),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(response);
};
