import { useTranslation } from "react-i18next";
import { PlusIcon } from "@icons";
import { Link } from "react-router-dom";
import useAuth from "@hooks/useAuth";
import { getCards as getCardsFn } from "../../../lib/api";
import { useQuery } from "@tanstack/react-query";
import { useModal } from "@contexts/useModelContext";

export function CreateNewCard() {
  const { t } = useTranslation();

  const { user } = useAuth();
  const { data: cards } = useQuery({
    queryKey: ["cards"],
    queryFn: getCardsFn,
  });

  const { showModal: toast } = useModal();

  return (
    <Link
      to={
        cards && cards.data.length >= user.data.maxCards
          ? ""
          : "/management/create-card"
      }
      className={`flex-1 flex justify-center items-center flex-col  bg-gradient-to-br text-white p-3 rounded-xl shadow shadow-neutral-400 dark:shadow-neutral-700 ${
        cards && cards.data.length >= user.data.maxCards
          ? `
          from-blue-500 to-red-500 cursor-not-allowed
        `
          : `
          from-green-500 to-blue-500 cursor-pointer
          `
      }`}
      onClick={() => {
        if (cards && cards.data.length >= user.data.maxCards) {
          toast(
            "You have reached the maximum number of cards",
            "Maximum number of cards reached",
            3000,
            false
          );
        }
      }}
    >
      <div className="w-10 h-10">
        <PlusIcon />
      </div>
      <p className="font-bold font-Poppins text-center">
        {t("Create New Card")}
      </p>
    </Link>
  );
}
