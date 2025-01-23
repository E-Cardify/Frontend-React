import CardPreviewCard from "@components/CardPreviewCard";
import { useFetchCardInfo } from "../../services/CardInfo/useFetchCardInfo";
import Navbar from "@layout/ViewContainer/Navbar";

export default function Cards() {
  const { data, isLoading } = useFetchCardInfo();

  return (
    <>
      <Navbar text="Your cards" />
      <div className="mt-3">
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
      </div>
    </>
  );
}
