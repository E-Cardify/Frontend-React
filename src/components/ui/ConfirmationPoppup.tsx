import { useConfirmationPoppup } from "@contexts/useConfirmationPoppupContext";
import { RotateIcon } from "@icons";
import { useTranslation } from "react-i18next";
import ButtonRectangle from "./Buttons/ButtonRectangle";

export default function ConfirmationPoppup() {
  const { t } = useTranslation();
  const {
    modalContent,
    isModalVisible,
    hideModal,
    modalSecondaryText,
    onConfirm,
  } = useConfirmationPoppup();

  return (
    isModalVisible && (
      <div className="fixed inset-0">
        <div className="relative w-full h-full flex justify-center items-center">
          <div className="absolute inset-0 bg-black/50 -z-10" />
          <div className="flex flex-col dark:bg-neutral-800 dark:border-black bg-white py-6 px-8 rounded-lg shadow border-2">
            <div className="w-11 h-11 bg-red-200 text-red-500 rounded-lg p-1.5 flex justify-center items-center">
              <RotateIcon />
            </div>
            <h1 className="text-lg font-Poppins font-bold pt-3">
              {t(modalContent || "")}?
            </h1>
            <p className="font-Poppins text-sm text-neutral-700 dark:text-neutral-400">
              {t(modalSecondaryText || "")}.
            </p>

            <div className="flex justify-end gap-2 pt-8">
              <ButtonRectangle
                onClick={() => hideModal()}
                text="Cancel"
                className="font-normal text-sm rounded-md"
              />
              <ButtonRectangle
                onClick={() => {
                  if (onConfirm) {
                    onConfirm();
                    hideModal();
                  }
                }}
                primary={true}
                className="font-normal text-sm rounded-md bg-red-500 border-red-500 shadow-none"
                text="Reset"
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
}
