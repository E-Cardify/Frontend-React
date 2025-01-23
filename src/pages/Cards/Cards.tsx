import CardPreviewCard from "@components/CardPreviewCard";
import { CardInfoInterface } from "@interfaces/CardInfoInterface";
import { useQuery } from "@tanstack/react-query";

export default function Cards() {
  const { data, isLoading } = useQuery<CardInfoInterface[]>({
    queryFn: async () =>
      fetch(`http://localhost:5000/api/v1/card-info`).then((res) => res.json()),
    queryKey: ["card-info"],
  });

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {data && (
        <div className="flex flex-wrap gap-2 items-start">
          {data.map((SingleCardInfo) => {
            return <CardPreviewCard cardInfo={SingleCardInfo} />;
          })}
        </div>
      )}
    </>
  );
}
