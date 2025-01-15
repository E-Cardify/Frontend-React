import { useTranslation } from "react-i18next";
import AlignIcon from "../../../assets/icons/Align";
import ShareIcon from "../../../assets/icons/Share";
import { DashboardNavItem } from "./DashboardNavItem";

export function DashboardNavbarTabs() {
    const { t } = useTranslation();

    return (<div className="flex font-Poppins pt-4 items-end flex-wrap">
        <DashboardNavItem text="Overview" />
        <DashboardNavItem text="Notifications" />
        <DashboardNavItem text="History" />

        {
            /* right side */
        }
        <div className="ml-auto flex gap-3 pb-2 items-center">
            <div className="text-gray-500 flex dark:bg-neutral-900 dark:border-black bg-white items-center py-1.5 cursor-pointer border-2 px-3.5 font-Roboto text-xs gap-1.5 rounded-md">
                <div className="w-4 h-4">
                    <AlignIcon />
                </div>
                <p>{t("Filter")}</p>
            </div>
            <div className="text-white flex bg-green-500 items-center py-1.5 shadow cursor-pointer shadow-green-600 border border-green-500 px-3.5 font-Roboto text-xs gap-1.5 rounded-md">
                <div className="w-4 h-4">
                    <ShareIcon />
                </div>
                <p>{t("Share")}</p>
            </div>
        </div>
    </div>);
}
