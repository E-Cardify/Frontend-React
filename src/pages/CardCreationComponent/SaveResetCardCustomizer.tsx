import useCardCreationTabContext from "@contexts/useCardCreationTabContext";
import { RotateIcon } from "@icons";
import {
  CardInfoInterface,
  getDefaultCardInterfaceObject,
} from "@interfaces/CardInfoInterface";
import ButtonRectangle from "@components/ui/Buttons/ButtonRectangle";
import ButtonPrimary from "@components/ui/Buttons/ButtonPrimary";
import { useConfirmationPoppup } from "@contexts/useConfirmationPoppupContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createCard as createCardFn,
  updateCard as updateCardFn,
} from "../../lib/api";
import { useModal } from "@contexts/useModelContext";
import { useNavigate } from "react-router-dom";

export function SaveResetCardCustomizer() {
  const { cardInfo, setCardInfo } = useCardCreationTabContext();
  const { showModal: showConfirmationPoppup } = useConfirmationPoppup();
  const { showModal: showToast } = useModal();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createCard } = useMutation({
    mutationFn: (cardInfo: CardInfoInterface) => createCardFn(cardInfo),
    onSuccess: () => {
      showToast("Card created successfully", "success", 3000, true);
      queryClient.invalidateQueries({
        queryKey: ["mainCard"],
      });
      queryClient.invalidateQueries({
        queryKey: ["cards"],
      });
      navigate("/cards");
      setCardInfo({ _id: cardInfo._id, ...getDefaultCardInterfaceObject() });
    },
    onError: () => {
      showToast("Error creating card", "error", 3000, false);
    },
  });

  const { mutate: updateCard } = useMutation({
    mutationFn: (cardInfo: CardInfoInterface) =>
      updateCardFn(cardInfo, cardInfo._id || ""),
    onSuccess: () => {
      showToast("Card updated successfully", "success", 3000, true);
      queryClient.invalidateQueries({
        queryKey: ["mainCard"],
      });
      queryClient.invalidateQueries({
        queryKey: ["cards"],
      });
      navigate("/cards");
      setCardInfo({ _id: cardInfo._id, ...getDefaultCardInterfaceObject() });
    },
    onError: () => {
      showToast("Error updating card", "error", 3000, false);
    },
  });

  const handleCardInfoSave = async () => {
    if (cardInfo._id) {
      updateCard(cardInfo);
    } else {
      createCard(cardInfo);
    }
  };

  const handleCardInfoReset = () => {
    setCardInfo({ _id: cardInfo._id, ...getDefaultCardInterfaceObject() });
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
        <ButtonPrimary onClick={handleCardInfoSave} text="Save" />
      </div>
    </>
  );
}
