import CardPreviewCard from "@components/CardPreviewCard";
import { useFetchCardInfo } from "../../services/CardInfo/useFetchCardInfo";
import Navbar from "@layout/ViewContainer/Navbar";
import { EditPenIcon } from "@icons";
import useViewContext from "@contexts/useViewContext";
import { CardInfoInterface } from "@interfaces/CardInfoInterface";

export default function Cards() {
  const { data, isLoading } = useFetchCardInfo();
  const { setCurrentView, setEditingCardInfo } = useViewContext();

  const handleCardEditing = (cardInfo: CardInfoInterface) => {
    setEditingCardInfo(cardInfo);
    setCurrentView("CardEditing");
  };

  return (
    <>
      <Navbar text="Your cards" />
      <div className="mt-3">
        {isLoading && <div>Loading...</div>}
        {data && (
          <div className="flex flex-wrap gap-2 items-start">
            {data.map((SingleCardInfo) => {
              return (
                <div
                  className="relative"
                  key={`${SingleCardInfo.id}${SingleCardInfo.information.title}${SingleCardInfo.information.lastName}`}
                >
                  <CardPreviewCard cardInfo={SingleCardInfo} />
                  <div className="absolute left-3 top-3 text-white">
                    <div className="relative w-full h-full px-3 py-2 rounded-md overflow-hidden shadow shadow-black">
                      <div className="absolute bg-black/80 inset-0" />
                      <div
                        className="w-6 h-6 cursor-pointer relative"
                        onClick={() => {
                          handleCardEditing(SingleCardInfo);
                        }}
                      >
                        <EditPenIcon />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
