import { CheckIcon } from "@icons";
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
  } = useModal();

  return (
    isModalVisible && (
      <div
        className={`fixed top-5 right-5 text-black bg-green-200 border-green-300 border-2 flex items-center gap-3 py-2.5 px-3 rounded-lg shadow-xl ${
          hidePoppupAnimation
            ? "animate-fade-left-reverse"
            : "animate-fade-left"
        }`}
      >
        <div className="w-8 h-8 bg-green-500 text-white rounded-full p-1">
          <CheckIcon />
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
