import useCardCreationTabContext from "@contexts/useCardCreationTabContext";
import { RotateIcon } from "@icons";
import { SaveIcon } from "@icons";
// import { CheckIcon } from "@icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { getDefaultCardInterfaceObject } from "@interfaces/CardInfoInterface";
import ButtonRectangle from "@components/ui/Buttons/ButtonRectangle";
import ButtonPrimary from "@components/ui/Buttons/ButtonPrimary";
// import ButtonX from "@components/ui/Buttons/ButtonX";
import { createCard } from "../../services/CardInfo/useCreateCard";
import { useModal } from "@contexts/useModelContext";
import useViewContext from "@contexts/useViewContext";

export function SaveResetCardCustomizer() {
  const { t } = useTranslation();
  const { cardInfo, setCardInfo } = useCardCreationTabContext();
  const { showModal } = useModal();
  const { setCurrentView } = useViewContext();

  const [showResetPoppup, setShowResetPoppup] = useState(false);

  const handleCardInfoSave = () => {
    localStorage.setItem("cardInfo", JSON.stringify(cardInfo));

    createCard(cardInfo);
    showModal("Success!", "Card has been saved successfully", 3000);
    setCurrentView("Cards");
  };

  const handleCardInfoReset = () => {
    setCardInfo(getDefaultCardInterfaceObject());
    setShowResetPoppup(false);
  };
  return (
    <>
      {showResetPoppup && (
        <div className="fixed inset-0">
          <div className="relative w-full h-full flex justify-center items-center">
            <div className="absolute inset-0 bg-black/50 -z-10" />
            <div className="flex flex-col dark:bg-neutral-800 dark:border-black bg-white py-6 px-8 rounded-lg shadow border-2">
              <div className="w-11 h-11 bg-red-200 text-red-500 rounded-lg p-1.5 flex justify-center items-center">
                <RotateIcon />
              </div>
              <h1 className="text-lg font-Poppins font-bold pt-3">
                {t("Are you sure you want to reset")}?
              </h1>
              <p className="font-Poppins text-sm text-neutral-700 dark:text-neutral-400">
                {t("Your data will be deleted and this can't be undone")}.
              </p>

              <div className="flex justify-end gap-2 pt-8">
                <ButtonRectangle
                  onClick={() => setShowResetPoppup(false)}
                  text="Cancel"
                  className="font-normal text-sm rounded-md"
                />
                <ButtonRectangle
                  onClick={handleCardInfoReset}
                  primary={true}
                  className="font-normal text-sm rounded-md bg-red-500 border-red-500 shadow-none"
                  text="Reset"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="pt-2 flex items-center gap-2 flex-row-reverse">
        <ButtonRectangle
          onClick={() => {
            setShowResetPoppup(true);
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
