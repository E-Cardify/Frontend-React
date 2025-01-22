import { useTranslation } from "react-i18next";
import AlignIcon from "../../../assets/icons/Align";
import ShareIcon from "../../../assets/icons/Share";
import { DashboardNavItem } from "./DashboardNavItem";
import ButtonRectangle from "../../ui/Buttons/ButtonRectangle";

export function DashboardNavbarTabs() {
  const { t } = useTranslation();

  return (
    <div className="flex font-Poppins pt-4 items-end flex-wrap justify-center sm:justify-normal gap-y-2">
      <DashboardNavItem text="Overview" />
      {/* <DashboardNavItem text="Notifications" /> */}
      <DashboardNavItem text="History" />

      {/* right side */}
      <div className="ml-auto flex gap-3 pb-2 items-center">
        <div className="text-neutral-500 flex hover:text-neutral-800 dark:hover:text-neutral-300 dark:bg-neutral-900 dark:border-black bg-white items-center py-1.5 cursor-pointer border-2 px-3.5 font-Roboto text-xs gap-1.5 rounded-md">
          <div className="w-4 h-4">
            <AlignIcon />
          </div>
          <p>{t("Filter")}</p>
        </div>
        <ButtonRectangle
          text="Share"
          className="text-xs px-3.5 py-1.5"
          iconHeight={4}
          icon={<ShareIcon />}
        />
      </div>
    </div>
  );
}
