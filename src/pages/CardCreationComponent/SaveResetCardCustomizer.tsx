import useCardCreationTabContext from "@contexts/useCardCreationTabContext";
import { RotateIcon } from "@icons";
import { SaveIcon } from "@icons";
import { getDefaultCardInterfaceObject } from "@interfaces/CardInfoInterface";
import ButtonRectangle from "@components/ui/Buttons/ButtonRectangle";
import ButtonPrimary from "@components/ui/Buttons/ButtonPrimary";
import { useCreateCard } from "../../services/CardInfo/useCreateCard";
import { useConfirmationPoppup } from "@contexts/useConfirmationPoppupContext";
import { useNavigate } from "react-router-dom";

export function SaveResetCardCustomizer() {
  const { cardInfo, setCardInfo } = useCardCreationTabContext();
  const { showModal: showConfirmationPoppup } = useConfirmationPoppup();
  const createCard = useCreateCard();
  const navigate = useNavigate();

  const handleCardInfoSave = async () => {
    localStorage.setItem("cardInfo", JSON.stringify(cardInfo));

    const isOk = await createCard(cardInfo);
    if (isOk) {
      navigate("/management/cards");
    }
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
