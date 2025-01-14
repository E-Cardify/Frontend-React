import { useTranslation } from "react-i18next";
import { AlignIcon, BellIcon, InformationIcon, ShareIcon, UserIcon } from "@icons";
import useDashboardViewContext from "@hooks/useDashboardViewContext";
import { ReactNode } from "react";


function DashboardNavItem(props: {
    text: "Notifications" | "Overview" | "History"
}) {
    const { t } = useTranslation();
    const { currentView, setCurrentView } = useDashboardViewContext();

    const handleViewChange = () => {
        setCurrentView(props.text);
    }

    return (
        <div className={`pb-2 px-3 dark:text-white relative cursor-pointer ${currentView !== props.text && "text-neutral-500 dark:text-neutral-400"}`} onClick={handleViewChange}>
            {t(props.text)}
            <div className={`absolute -bottom-0.5 left-0 w-full h-[3px] ${(currentView === props.text) && "bg-green-500"}`} />
        </div>
    );
}



function DashboardInfoButton(props: {
    children: ReactNode,
}) {
    return (
        <div className="w-9 h-9 text-neutral-500 dark:bg-neutral-900 dark:border-black flex cursor-pointer items-center justify-center bg-white border-2 rounded-full">
            <div className="w-4 h-4">
                {props.children}
            </div>
        </div>
    );
}


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
            <div className="flex font-Poppins pt-4 items-end">
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
