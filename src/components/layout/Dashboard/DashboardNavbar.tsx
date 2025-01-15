import { useTranslation } from "react-i18next";
import { BellIcon, InformationIcon, UserIcon } from "@icons";
import { DashboardInfoButton } from "./DashboardInfoButton";
import { DashboardNavbarTabs } from "./DashboardNavbarTabs";

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
                    <DashboardInfoButton title={t("Help")}>
                        <InformationIcon />
                    </DashboardInfoButton>

                    <DashboardInfoButton title={t("Notifications")}>
                        <BellIcon />
                    </DashboardInfoButton>

                    <DashboardInfoButton title={t("Account")}>
                        <UserIcon />
                    </DashboardInfoButton>
                </div>
            </div>

            <DashboardNavbarTabs />
        </div>);
}
