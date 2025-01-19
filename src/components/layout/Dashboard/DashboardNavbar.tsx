import { useTranslation } from "react-i18next";
import { BellIcon, InformationIcon, UserIcon } from "@icons";
import { DashboardInfoButton } from "./DashboardInfoButton";
import { DashboardNavbarTabs } from "./DashboardNavbarTabs";
import useDashboardViewContext from "@hooks/useDashboardViewContext";
import useViewContext from "@hooks/useViewContext";

export function DashboardNavbar() {
    const { t } = useTranslation();
    const { currentView, setCurrentView } = useViewContext();
    const { currentView: currentDashboardView, setCurrentView: setCurrentDashboardView } = useDashboardViewContext();

    const showNotifications = () => {
        console.log('showing notifications');

        if (currentView !== "Dashboard") {
            setCurrentView("Dashboard");
        }

        if (currentDashboardView !== "Notifications") {
            setCurrentDashboardView("Notifications");
        }
    }

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

                    <DashboardInfoButton onClick={showNotifications} title={t("Notifications")}>
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
