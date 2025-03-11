import { SlackIcon } from "@icons";
import { useTranslation } from "react-i18next";
export function SideNavBarLogo() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="text-2xl font-Poppins font-bold cursor-pointer flex gap-1 items-center dark:text-white group">
        <div className="w-8 h-8 text-green-500 group-hover:text-green-600">
          <SlackIcon />
        </div>
        <h1 className="select-none">{t("Cardify")}</h1>
      </div>
    </div>
  );
}
