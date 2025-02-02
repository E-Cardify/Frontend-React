import CardPreviewCard from "@components/CardPreviewCard";
import { useFetchCardInfo } from "../../services/CardInfo/useFetchCardInfo";
import Navbar from "@layout/ViewContainer/Navbar";
import { EditPenIcon, StartIcon, TrashIcon } from "@icons";
import useViewContext from "@contexts/useViewContext";
import { CardInfoInterface } from "@interfaces/CardInfoInterface";
import { useConfirmationPoppup } from "@contexts/useConfirmationPoppupContext";
import { useDeleteCard } from "../../services/CardInfo/deleteCard";
import { useFetchMainCardInfo } from "../../services/CardInfo/useFetchMainCardInfo";
import { useChangeMainCard } from "../../services/CardInfo/useChangeMainCard";

export default function Cards() {
  const { data, isLoading } = useFetchCardInfo();
  const { data: mainCardInfo } = useFetchMainCardInfo();
  const changeMainCard = useChangeMainCard();
  const { setCurrentView, setEditingCardInfo } = useViewContext();
  const { showModal } = useConfirmationPoppup();
  const deleteCard = useDeleteCard();

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
                    <div className="relative w-full h-full px-3 py-2 rounded-md overflow-hidden shadow shadow-black flex gap-2">
                      <div className="absolute bg-black/80 inset-0" />
                      <div
                        className="w-6 h-6 cursor-pointer relative text-neutral-300 hover:text-white"
                        onClick={() => {
                          showModal(
                            "Do you want to delete this card",
                            "This process is not irreversible",
                            () => {
                              deleteCard(SingleCardInfo.id);
                            },
                            <TrashIcon />
                          );
                        }}
                      >
                        <TrashIcon />
                      </div>
                      <div
                        className="w-6 h-6 cursor-pointer relative text-neutral-300 hover:text-white"
                        onClick={() => {
                          handleCardEditing(SingleCardInfo);
                        }}
                      >
                        <EditPenIcon />
                      </div>
                      <div
                        className={`w-6 h-6 cursor-pointer relative text-yellow-300 hover:text-yellow-400 ${
                          mainCardInfo?.id == SingleCardInfo.id &&
                          "fill-current"
                        }`}
                        onClick={() => {
                          if (SingleCardInfo.id !== mainCardInfo?.id) {
                            changeMainCard(SingleCardInfo.id || "");
                          }
                        }}
                      >
                        <StartIcon />
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
