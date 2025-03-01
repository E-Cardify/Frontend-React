import { UserIcon } from "@icons";
import ButtonPrimary from "@components/ui/Buttons/ButtonPrimary";
import { useTranslation } from "react-i18next";

export default function SubscriptionTab() {
  const { t } = useTranslation();

  return (
    <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
          <div className="w-6 h-6 text-white">
            <UserIcon />
          </div>
        </div>
        <div>
          <h3 className="font-Poppins font-semibold dark:text-white">
            {t("Free Plan")}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            {t("Current subscription")}
          </p>
        </div>
      </div>

      <ButtonPrimary
        text="Upgrade to Premium"
        className="w-full justify-center"
      />
    </div>
  );
}
