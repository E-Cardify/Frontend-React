import { CardInfoInterface } from "@interfaces/CardInfoInterface";
import { useQuery } from "@tanstack/react-query";

export function useFetchCardInfo(
  id: string
): ReturnType<typeof useQuery<CardInfoInterface>>;

export function useFetchCardInfo(): ReturnType<
  typeof useQuery<CardInfoInterface[]>
>;

export function useFetchCardInfo(id?: string) {
  return useQuery({
    queryFn: () =>
      fetch(`http://localhost:5000/api/v1/card-info/${id ? id : ""}`).then(
        (res) => res.json()
      ),
    queryKey: id ? ["card-info", id] : ["card-info"],
  });
}
