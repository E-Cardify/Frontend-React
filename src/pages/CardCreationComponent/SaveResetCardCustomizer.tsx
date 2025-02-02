import useCardCreationTabContext from "@contexts/useCardCreationTabContext";
import { RotateIcon } from "@icons";
import { SaveIcon } from "@icons";
import { getDefaultCardInterfaceObject } from "@interfaces/CardInfoInterface";
import ButtonRectangle from "@components/ui/Buttons/ButtonRectangle";
import ButtonPrimary from "@components/ui/Buttons/ButtonPrimary";
import { useCreateCard } from "../../services/CardInfo/useCreateCard";
import { useModal } from "@contexts/useModelContext";
import useViewContext from "@contexts/useViewContext";
import { useConfirmationPoppup } from "@contexts/useConfirmationPoppupContext";

export function SaveResetCardCustomizer() {
  const { cardInfo, setCardInfo } = useCardCreationTabContext();
  const { showModal } = useModal();
  const { showModal: showConfirmationPoppup } = useConfirmationPoppup();
  const { setCurrentView } = useViewContext();
  const createCard = useCreateCard();

  const handleCardInfoSave = () => {
    localStorage.setItem("cardInfo", JSON.stringify(cardInfo));

    createCard(cardInfo);
    showModal("Success!", "Card has been saved successfully", 3000);
    setCurrentView("Cards");
  };

  const handleCardInfoReset = () => {
    setCardInfo({ id: cardInfo.id, ...getDefaultCardInterfaceObject() });
  };
  return (
    <>
      <div className="pt-2 flex items-center gap-2 flex-row-reverse">
        <ButtonRectangle
          onClick={() => {
            showConfirmationPoppup(
              "Are you sure you want to reset",
              "Your data will be deleted and this can't be undone",
              handleCardInfoReset
            );
          }}
          icon={<RotateIcon />}
          text="Reset"
        />
        <ButtonPrimary
          onClick={handleCardInfoSave}
          icon={<SaveIcon />}
          text="Save"
        />
      </div>
    </>
  );
}
