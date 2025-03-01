import { CheckIcon, XIcon } from "@icons";
import ButtonX from "./Buttons/ButtonX";
import { useModal } from "@contexts/useModelContext";
import { useTranslation } from "react-i18next";

export default function Poppup() {
  const { t } = useTranslation();
  const {
    modalContent,
    isModalVisible,
    hideModal,
    hidePoppupAnimation,
    modalSecondaryText,
    isOk,
  } = useModal();

  return (
    isModalVisible && (
      <div
        className={`fixed top-5 right-5 text-black z-50 ${
          isOk ? "bg-green-200 border-green-300" : "bg-red-200 border-red-300"
        } border-2 flex items-center gap-3 py-2.5 px-3 rounded-lg shadow-xl ${
          hidePoppupAnimation
            ? "animate-fade-left-reverse"
            : "animate-fade-left"
        }`}
      >
        <div
          className={`w-8 h-8 ${
            isOk ? "bg-green-500" : "bg-red-500"
          } text-white rounded-full p-1`}
        >
          {isOk ? <CheckIcon /> : <XIcon />}
        </div>
        <div>
          <h1 className="font-bold font-Poppins">{t(modalContent || "")}</h1>
          <p className="font-Montserrat text-sm text-neutral-800">
            {t(modalSecondaryText || "")}.
          </p>
        </div>
        <ButtonX onClick={hideModal} />
      </div>
    )
  );
}
