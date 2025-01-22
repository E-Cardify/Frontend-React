import { useTranslation } from "react-i18next";
import { PlusIcon } from "@icons";
import { viewsType } from "@contexts/ViewContext";
import useViewContext from "@contexts/useViewContext";

export function CreateNewCard() {
  const { t } = useTranslation();
  const { setCurrentView } =
    useViewContext();

  const handleViewChange = (
    text: viewsType
  ) => {
    setCurrentView(text);
  };

  return (
    <div
      onClick={() => {
        handleViewChange(
          "CardCreation"
        );
      }}
      className="flex-1 flex justify-center items-center flex-col from-green-500 to-blue-500 bg-gradient-to-br text-white p-3 rounded-xl shadow shadow-neutral-400 dark:shadow-neutral-700 cursor-pointer"
    >
      <div className="w-10 h-10">
        <PlusIcon />
      </div>
      <p className="font-bold font-Poppins text-center">
        {t("Create New Card")}
      </p>
    </div>
  );
}
