import { useTranslation } from "react-i18next";
import { AlignIcon, BellIcon, InformationIcon, ShareIcon, UserIcon } from "@icons";
import { DashboardInfoButton } from "./DashboardInfoButton";
import { DashboardNavItem } from "./DashboardNavItem";

export function DashboardNavbar() {
    const { t } = useTranslation();

    return (
        <div className="border-b-2 dark:border-neutral-400">
            <div className="flex gap-2 items-center">
                <h1 className="font-Roboto font-bold text-3xl dark:text-white">{t("Dashboard")}</h1>

                {
                    /* right side */
                }
                <div className="flex gap-2 ml-auto items-center">
                    <DashboardInfoButton>
                        <InformationIcon />
                    </DashboardInfoButton>

                    <DashboardInfoButton>
                        <BellIcon />
                    </DashboardInfoButton>

                    <DashboardInfoButton>
                        <UserIcon />
                    </DashboardInfoButton>
                </div>
            </div>
            <div className="flex font-Poppins pt-4 items-end flex-wrap">
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
            </div>
        </div>);
}
