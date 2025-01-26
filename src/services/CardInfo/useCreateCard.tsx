import { CardInfoInterface } from "@interfaces/CardInfoInterface";

export const createCard = async (cardInfo: CardInfoInterface) => {
  const response = await fetch("http://localhost:5000/api/v1/card-info/", {
    method: "POST",
    body: JSON.stringify(cardInfo),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(response);
};
