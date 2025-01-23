import CardPreviewCard from "@components/CardPreviewCard";
import { useFetchCardInfo } from "../../services/CardInfo/useFetchAllCardInfo";

export default function Cards() {
  const { data, isLoading } = useFetchCardInfo();

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {data && (
        <div className="flex flex-wrap gap-2 items-start">
          {data.map((SingleCardInfo) => {
            return (
              <CardPreviewCard
                key={`${SingleCardInfo.id}${SingleCardInfo.information.title}${SingleCardInfo.information.lastName}`}
                cardInfo={SingleCardInfo}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
