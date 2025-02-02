import { CardInfoInterface } from "@interfaces/CardInfoInterface";
import { useQuery } from "@tanstack/react-query";

export function useFetchMainCardInfo() {
  return useQuery<CardInfoInterface>({
    queryFn: () =>
      fetch(`http://localhost:5000/api/v1/card-info/main`).then((res) =>
        res.json()
      ),
    queryKey: ["card-info", "main"],
  });
}
